import { Randoms } from '../../engine/random'
import { Sounds } from '../../engine/sound'
import { GameWorld } from '../GameWorld'
import { GameWorlds } from '../GameWorlds'
import { SFX_SOURCES } from '../SFX_SOURCES'
import { GameEntity } from '../GameEntity'
import useGeneralState from '../../state/generalState'
import { createBubble } from './createBubble'
import { toVec3 } from '../../engine/math'
import { times } from '../../engine/object'

export const popBubble = ({ world, bubble, sound = true }: { world: GameWorld; bubble: GameEntity; sound?: boolean }) => {
    const { soundCtx } = world
    if (sound) {
        const sfx = Randoms.pickRandom(SFX_SOURCES.filter((sfx) => /bubble_pop/.test(sfx)))
        Sounds.playNote({ ctx: soundCtx, instrument: 'sampler', voice: sfx })
    }
    GameWorlds.removeEntity(world, bubble.id)
    const { addMoney, bubbleRewardMoney, bubbleRewardScore, addScore } = useGeneralState.getState()
    addMoney(bubbleRewardMoney)
    addScore(bubbleRewardScore)

    const { bubbleSize } = bubble
    const random = Math.random

    if (bubbleSize > 1) {
        const [x, _, z] = toVec3(bubble.mesh.position)
        const { maxMiniBubbles, miniBubbleWiggle: wiggle } = useGeneralState.getState()
        const miniBubbleCount = Math.floor(Math.random() * maxMiniBubbles)
        times(miniBubbleCount, () => {
            const xr = random() * 2 * wiggle - wiggle + x
            const zr = random() * 2 * wiggle - wiggle + z
            createBubble({ world, bubbleSize: bubbleSize - 1, x: xr, y: zr })
        })
    }
    if (bubbleSize === 1) {
        const [x, _, z] = toVec3(bubble.mesh.position)
        const { maxMiniBubbles, miniBubbleWiggle: wiggle, bubbleDustSize } = useGeneralState.getState()
        const miniBubbleCount = Math.floor(Math.random() * maxMiniBubbles)
        times(miniBubbleCount, () => {
            const xr = random() * 2 * wiggle - wiggle + x
            const zr = random() * 2 * wiggle - wiggle + z
            createBubble({ world, bubbleSize: bubbleDustSize, x: xr, y: zr, invulnerable: true })
        })
    }
}
