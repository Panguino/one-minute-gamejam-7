import { Materials, Meshes, Textures } from '../../engine/babs'
import { v3 } from '../../engine/babs/v3'
import { Colors } from '../../engine/color'
import { Point3, toVec3, xOf, zOf } from '../../engine/math'
import { Randoms } from '../../engine/random'
import { Sounds } from '../../engine/sound'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { SFX_SOURCES } from '../SFX_SOURCES'

export const fireAtTarget = ({
    world,
    target,
    from,
    tick,
    lifetime
}: {
    world: GameWorld
    from: Point3
    target: Point3
    tick: Tick
    lifetime: number
}) => {
    const { scene, soundCtx } = world
    const id = `projectile-${Randoms.randomUuid()}`

    const tex = Textures.getPathTexture(scene, 'projectile-texture', {
        src: 'img/pearl.png'
    })
    const mat = Materials.getMaterial(scene, 'projectile-material', {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })

    const mesh = Meshes.getBox(scene, id, {
        position: [xOf(from), 40, zOf(from)],
        // color: Colors.from('yellow').toString(),
        material: mat.name,
        width: 0.1,
        height: 0.1,
        depth: 0.1
    })

    const angle = Meshes.lookAt([xOf(from), zOf(from)], [xOf(target), zOf(target)])

    mesh.rotate(v3(0, 1, 0), angle)

    const sfx = Randoms.pickRandom(SFX_SOURCES.filter((sfx) => /shoot_pearl/.test(sfx)))
    Sounds.playNote({ ctx: soundCtx, instrument: 'sampler', voice: sfx })
    const startTick = tick
    GameWorlds.addEntity(world, {
        id,
        mesh,
        destination: toVec3(target),
        destinationRadius: 0.01,
        type: 'projectile',
        speed: 2,
        animation: (tick) => {
            if (tick.tickCount - startTick.tickCount > lifetime) {
                GameWorlds.removeEntity(world, id)
            }
        },
        onDestinationReached: () => {
            GameWorlds.removeEntity(world, id)
        }
    })
}
