import { toVec3 } from '../../engine/math'
import { Tick } from '../../engine/tick'
import useGeneralState from '../../state/generalState'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { popBubble } from './popBubble'

export const bubbleReachedTopSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { unitsTall, entities } = world
        const WAVE_TOP = -(unitsTall / 2) * 1.1
        entities
            .filter((e) => e.type === 'bubble')
            .forEach((entity) => {
                const { mesh, id } = entity
                const [x, y, z] = toVec3(mesh.position)
                if (z > WAVE_TOP) {
                    return
                }
                popBubble({ world, bubble: entity, sound: false })

                GameWorlds.removeEntity(world, id)
            })
    }
}
