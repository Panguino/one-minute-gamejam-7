import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { entityDistance2 } from '../calculation/entityDistance2'
import { popBubble } from './popBubble'

export const projectileHitsBubbleSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { entities, soundCtx } = world
        // if projectile is within/touches a bubble then pop it

        const bubbles = entities.filter((e) => e.type === 'bubble')
        entities
            .filter((e) => e.type === 'projectile')
            .forEach((projectile) => {
                const collided = bubbles.filter((bubble) => {
                    const { collisionRadius = 1 } = bubble
                    return entityDistance2(bubble, projectile) <= collisionRadius
                })

                // TODO popped bubble (score, sound, etc) for now just destroy

                collided.forEach((bubble) => {
                    popBubble({ world, bubble, sound: true })
                    GameWorlds.removeEntity(world, projectile.id)
                })
            })
    }
}
