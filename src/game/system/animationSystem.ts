import { isDefined } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'

// The worlds simplist animation system :)
export const animationSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { entities } = world
        entities
            .filter((e) => isDefined(e.animation))
            .forEach((entity) => {
                entity.animation(tick)
            })
    }
}
