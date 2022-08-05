import { Materials, Meshes, Textures } from '../../engine/babs'
import { Physics } from '../../engine/physics-2d'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'

export const addPeg = ({ world, x, y }: { world: GameWorld; x: number; y: number }) => {
    const { scene, physicsEngine, physicsScale } = world

    const tex = Textures.getPathTexture(scene, 'peg-texture', { src: 'img/peg.png' })
    const mat = Materials.getMaterial(scene, 'peg-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })

    const id = `peg-${x},${y}`
    const size = 0.2

    const mesh = Meshes.getBox(scene, id, {
        position: [x, 20, y],
        width: size,
        // height: size,
        height: 0.001,
        depth: size,
        material: mat.name
    })

    const physicsBody = Physics.getBodyType(physicsEngine.world, 'circle', id, {
        x: x* physicsScale,
        y: -y * physicsScale,
        radius: (size / 2),
        isStatic: true,
        mass: 10,
        frictionStatic: 0
    })

    GameWorlds.addEntity(world, {
        id,
        mesh,
        type: 'peg',
        physicsBody
    })
}
