import { Materials, Meshes, Textures } from '../../engine/babs'
import { Colors } from '../../engine/color'
import { Randoms } from '../../engine/random'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { Physics } from '../../engine/physics-2d'
import { Images } from '../../engine/image'
import { createCanvas } from '../../engine/babs/createCanvas'
import { Tick } from '../../engine/tick'
import { Noises } from '../../engine/noise'
import useGeneralState from '../../state/generalState'

export const createBubble = async ({
    world,
    bubbleSize,
    x,
    y,
    invulnerable = false
}: {
    world: GameWorld
    bubbleSize: number
    x: number
    y: number
    invulnerable?: boolean
}) => {
    const { scene, unitsTall, physicsScale, physicsEngine } = world
    const { bubbleWiggleChance, bubbleWiggleForce } = useGeneralState.getState()
    const image = await Images.loadHTMLImageElement('img/bubble.svg')

    const cvs = createCanvas({ width: image.naturalWidth, height: image.naturalHeight })
    const ctx = cvs.getContext('2d')
    ctx.drawImage(image, 0, 0)

    const tex = Textures.getHtmlElementTexture(scene, 'bubble-texture', {
        element: cvs
    })
    const mat = Materials.getMaterial(scene, 'bubble-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })

    const id = `bubble-${Randoms.randomUuid()}`

    const size = bubbleSize * 0.3
    const mesh = Meshes.getBox(scene, id, {
        position: [x, 0, y],
        color: Colors.from('blue').mix(Colors.from('green')).mix(Colors.from('white')).toString(),
        width: size,
        height: 0.001,
        depth: size,
        material: mat.name
    })

    const physicsBody = Physics.getBodyType(physicsEngine.world, 'circle', id, {
        x: x * physicsScale,
        y: -y * physicsScale,
        radius: (size / 2) * physicsScale,
        mass: 10,
        friction: 0,
        frictionStatic: 0
    })

    const animation = (tick: Tick) => {
        if (Math.random() < bubbleWiggleChance) {
            const wiggle = Noises.simplex2(x, y) * bubbleWiggleForce
            const force = Math.random() * wiggle * 2 - wiggle
            Physics.applyForce(physicsEngine.world, id, [force, 0])
        }
    }

    GameWorlds.addEntity(world, {
        id,
        mesh,
        type: 'bubble',
        collisionRadius: size,
        physicsBody,
        bubbleSize,
        invulnerable,
        animation
    })
}
