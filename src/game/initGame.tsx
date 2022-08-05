import { tuple2 } from '../engine/object'
import { Physics } from '../engine/physics-2d'
import { Sounds, SoundSampleMap } from '../engine/sound'
import { Ticks } from '../engine/tick'
import useGeneralState from '../state/generalState'
import { setupCameraTopDown } from './camera/setupCameraTopDown'
import { createScene } from './createScene'
import { GameWorld } from './GameWorld'
import { createLevel } from './level/createLevel'
import { MUSIC_SOURCES } from './MUSIC_SOURCES'
import { playMusic } from './playMusic'
import { SFX_SOURCES } from './SFX_SOURCES'
import { addControlSystems } from './system/addControlSystems'
import { addGameSystems } from './system/addGameSystems'
import { AddDestructor } from './system/keyboardHandlerSystem'
import { updateVolumes } from './updateVolumes'

export const initGame = async (canvas: HTMLCanvasElement) => {
    const scene = createScene(canvas)

    const { floatStrength: antiGravityStrength } = useGeneralState.getState()
    const physicsEngine = Physics.createEngine({
        gravity: {
            // y: 0.000001
            // y: 0.0001
            y: antiGravityStrength
        }
    })

    // various forms of loops
    const controlLoop = Ticks.create({})
    const renderLoop = Ticks.create({
        running: false,
        ticker: (tick) => {
            scene.render()
        }
    })
    const gameLoop = Ticks.create({})

    // cleanup after component is removed
    const destructors = [
        () => {
            gameLoop.abort = true
        },
        () => {
            controlLoop.abort = true
        },
        () => {
            renderLoop.abort = true
        }
    ]

    // allow systems to clean up after themselves
    const addDestructor: AddDestructor = (destructor) => {
        destructors.push(destructor)
    }

    const sampleMap: SoundSampleMap = Object.fromEntries(
        SFX_SOURCES.map((sfx) => {
            return tuple2(sfx, `sfx/${sfx}`)
        })
    )
    const audioMap: SoundSampleMap = Object.fromEntries(
        MUSIC_SOURCES.map((sfx) => {
            return tuple2(sfx, `music/${sfx}`)
        })
    )
    const { ctx } = await Sounds.setupSound({
        sampleMap,
        audioMap
    })

    const world: GameWorld = {
        debug: false,
        scene,
        physicsEngine,
        soundCtx: ctx,
        physicsScale: 100,
        unitsWide: 9,
        unitsTall: 9,
        entities: [],
        controlLoop,
        gameLoop,
        renderLoop,
        seed: 0
    }
    // addDebugMeshes(world)

    setupCameraTopDown(world)
    renderLoop.running = true
    gameLoop.tickers.push(...addGameSystems(world, addDestructor))
    controlLoop.tickers.push(...addControlSystems(world, addDestructor))

    // TODO this should happen via UI interaction not on start
    createLevel({ world })

    useGeneralState.subscribe(async ({ sfxVolume, musicVolume }) => {
        updateVolumes({ sfxVolume, musicVolume, ctx })
    })

    // set initial volume
    // updateVolumes({ ctx, ...useGeneralState.getState() })

    destructors.push(playMusic(ctx))

    console.log("Game Initialized")

    return tuple2(() => {
        destructors.forEach((destructor) => destructor())
    }, world)
}
