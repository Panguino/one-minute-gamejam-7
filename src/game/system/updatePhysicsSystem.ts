import { Physics } from '../../engine/physics-2d'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'

export const updatePhysicsSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { physicsEngine } = world
        Physics.update(physicsEngine, tick.deltaMs, tick.lastDeltaMs)
    }
}
