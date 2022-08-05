import { Engine } from 'babylonjs'
import gsap from 'gsap'
import { Materials, Meshes, Textures } from '../../engine/babs'
import { v3 } from '../../engine/babs/v3'
import { times } from '../../engine/object'
import { Physics } from '../../engine/physics-2d'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { addPeg } from './addPeg'

export const createLevel = ({ world }: { world: GameWorld }) => {
    // add pegs with colliders

    // simple grid
    const gridScale = 1.2
    times(6, (y) => {
        times(6, (x) => {
            const offset = y % 2 === 0 ? 0 : 0.5
            const tx = x - 3 + offset + gridScale - 1
            const ty = y - 2.7
            addPeg({ world, x: tx * gridScale, y: ty * gridScale })
        })
    })

    addBackground({ world })
    addTopOverlay({ world })
    addWalls({ world })
}

export const addWalls = ({ world }: { world: GameWorld }) => {
    const { scene, unitsWide, unitsTall, physicsEngine, physicsScale } = world

    const tex = Textures.getPathTexture(scene, 'walls-texture', {
        src: 'img/walls.png'
    })
    const mat = Materials.getMaterial(scene, 'walls-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })

    const id = `level-walls`

    const mesh = Meshes.getBox(scene, id, {
        position: [0, -9, 0],
        width: unitsWide,
        height: 0.001,
        depth: unitsTall,
        material: mat.name
    })
    mesh.rotate(v3(0, 1, 0), Math.PI / 2)

    GameWorlds.addEntity(world, {
        id,
        mesh,
        type: 'environment'
    })

    // add wall bodies

    const leftId = `left-${id}`
    const rightId = `right-${id}`

    const wallWidth = 0.008 * physicsScale

    const bodyLeft = Physics.getBodyType(physicsEngine.world, 'rectangle', leftId, {
        x: (-unitsWide * physicsScale) / 2,
        y: 0,
        width: wallWidth * physicsScale,
        isStatic: true,
        height: unitsTall * physicsScale
    })
    const bodyRight = Physics.getBodyType(physicsEngine.world, 'rectangle', rightId, {
        x: (unitsWide * physicsScale) / 2,
        y: 0,
        width: wallWidth * physicsScale,
        isStatic: true,
        height: unitsTall * physicsScale
    })
}

export const addBackground = ({ world }: { world: GameWorld }) => {
    const { scene, unitsWide, unitsTall } = world

    const tex = Textures.getPathTexture(scene, 'background-texture', {
        src: 'img/background.png'
    })
    const mat = Materials.getMaterial(scene, 'background-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })

    const id = `level-background`

    const mesh = Meshes.getBox(scene, id, {
        position: [0, -10, 0],
        width: unitsWide,
        height: 0.001,
        depth: unitsTall,
        material: mat.name
    })
    mesh.rotate(v3(0, 1, 0), Math.PI / 2)

    GameWorlds.addEntity(world, {
        id,
        mesh,
        type: 'environment'
    })
}

export const addTopOverlay = ({ world }: { world: GameWorld }) => {
    const { scene, unitsWide, unitsTall } = world

    const tex = Textures.getPathTexture(scene, 'overlay-texture', {
        src: 'img/overlay.png'
    })
    const mat = Materials.getMaterial(scene, 'overlay-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name,
        alpha: 0.3
    })
    mat.alphaMode = Engine.ALPHA_MULTIPLY
    // mat.wireframe = true

    // Doesn't work TODO figure out how to get this to work.
    gsap.to(mat, { alpha: .5, yoyo: true, repeat: -1, duration: 1})

    const id = `level-overlay`

    const mesh = Meshes.getBox(scene, id, {
        position: [0, 10, 0],
        width: unitsWide,
        height: 0.001,
        depth: unitsTall,
        material: mat.name
    })
    mesh.rotate(v3(0, 1, 0), Math.PI / 2)

    GameWorlds.addEntity(world, {
        id,
        mesh,
        type: 'environment'
    })
}
