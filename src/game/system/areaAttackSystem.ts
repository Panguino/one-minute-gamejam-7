import { Materials, Meshes, Textures } from '../../engine/babs'
import { v3 } from '../../engine/babs/v3'
import { Maths } from '../../engine/math'
import { isDefined, isUndefined } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { entityToPosition2 } from '../calculation/entityToPosition2'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { popBubble } from './popBubble'
import { sortEntitiesByDistanceFromTarget } from './sortEntitiesByDistanceFromTarget'

export const areaAttackSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { entities, scene } = world

        const bubblePositions = entities.filter((e) => e.type === 'bubble').filter((e) => !(e.invulnerable ?? false))

        entities
            .filter((e) => e.type === 'tower' && e.attack === 'area')
            .forEach((entity) => {
                const { mesh, range = 0, attackTextureSrc, animation, fireRateTicks = 0 } = entity

                entity.cooldownTicks -= 1
                if (entity.cooldownTicks > 0) {
                    return
                }
                entity.cooldownTicks = fireRateTicks

                const sortedBubbles = bubblePositions.sort((a, b) => sortEntitiesByDistanceFromTarget(a, b, mesh.position))

                sortedBubbles
                    .filter((bubble) => {
                        return Maths.distance2(entityToPosition2(bubble), entityToPosition2(entity)) <= range
                    })
                    .forEach((bubble) => {
                        // run the attack texture animation
                        if (isUndefined(animation) && isDefined(attackTextureSrc)) {
                            const tex = Textures.getPathTexture(scene, `${attackTextureSrc}-texture`, { src: attackTextureSrc })
                            const mat = Materials.getMaterial(scene, `${attackTextureSrc}-material`, {
                                emissiveTexture: tex.name,
                                opacityTexture: tex.name
                            })
                            const id = `${entity.id}-area-attack`
                            const mesh = Meshes.getBox(scene, id, {
                                position: entity.mesh.position,
                                width: range * 2,
                                height: range * 2,
                                depth: range * 2,
                                material: mat.name
                            })
                            // mat.wireframe = true
                            const angle = Math.PI * Math.random()
                            // mesh.rotation = v3(0, Math.PI / 2, 0)
                            mesh.rotation = v3(0, angle, 0)

                            GameWorlds.addEntity(world, {
                                id,
                                mesh,
                                type: 'aoe'
                            })
                            const animationTicks = 8
                            const startTick = tick
                            const endTickCount = tick.tickCount + animationTicks
                            entity.animation = (tick) => {
                                const scale = Maths.lerp(1, 0, (endTickCount - tick.tickCount) / animationTicks)
                                mesh.scaling = v3(scale, scale, scale)
                                if (tick.tickCount - startTick.tickCount > animationTicks) {
                                    GameWorlds.removeEntity(world, id)
                                    delete entity.animation
                                }
                            }
                        }

                        popBubble({ world, bubble })
                    })

                // entity.cooldownTicks = fireRateTicks
                // fireAtTarget({ from: mesh.position, target: closest.mesh.position, world })
            })
    }
}
