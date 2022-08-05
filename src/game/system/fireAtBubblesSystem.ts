import { Maths } from '../../engine/math'
import { first, isUndefined } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { entityToPosition2 } from '../calculation/entityToPosition2'
import { GameWorld } from '../GameWorld'
import { fireAtTarget } from './fireAtTarget'
import { sortEntitiesByDistanceFromTarget } from './sortEntitiesByDistanceFromTarget'

export const fireAtBubblesSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { entities } = world

        const bubblePositions = entities.filter((e) => e.type === 'bubble').filter((e) => !(e.invulnerable ?? false))

        entities
            .filter((e) => e.type === 'tower' && e.attack === 'fire')
            .forEach((entity) => {
                const { mesh, range = 0, cooldownTicks = 0, fireRateTicks = 30, projectileLifetimeTicks = 60 } = entity

                entity.cooldownTicks -= 1
                if (entity.cooldownTicks > 0) {
                    return
                }

                const bubblesWithinRange = bubblePositions.sort((a, b) => sortEntitiesByDistanceFromTarget(a, b, mesh.position))

                const closest = first(bubblesWithinRange)
                if (isUndefined(closest)) {
                    return
                }
                if (Maths.distance2(entityToPosition2(closest), entityToPosition2(entity)) > range) {
                    return
                }

                entity.cooldownTicks = fireRateTicks
                fireAtTarget({ from: mesh.position, target: closest.mesh.position, world, lifetime: projectileLifetimeTicks, tick })
            })
    }
}
