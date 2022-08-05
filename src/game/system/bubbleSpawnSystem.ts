import { Randoms } from '../../engine/random'
import { Tick } from '../../engine/tick'
import { default as generalState, default as useGeneralState } from '../../state/generalState'
import { GameWorld } from '../GameWorld'
import { createBubble } from './createBubble'

export const bubbleSpawnSystem = ({ world }: { world: GameWorld }) => {
    return async (tick: Tick) => {
        const { scene, unitsWide, unitsTall, entities, physicsEngine, physicsScale } = world

        const { gamePhase, endPhase } = generalState.getState()
        // console.log(`gp: ${gamePhase} ep: ${endPhase}`)
        if (!gamePhase && !endPhase) {
            return
        }

        const { maxBubbles } = useGeneralState.getState()

        // TODO spawn rate for bubbles
        if (entities.filter((e) => e.type === 'bubble' && !(e?.invulnerable ?? false)).length > maxBubbles) {
            return
        }
        if (Math.random() < 0.9) {
            return
        }
        const boardWidth = 7
        const x = Math.random() * boardWidth - boardWidth / 2
        const y = unitsTall / 2
        createBubble({ world, bubbleSize: Randoms.pickRandom([1, 2]), x, y })
    }
}
