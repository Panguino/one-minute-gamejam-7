import { Sounds } from '../engine/sound'
import { SoundCtx } from '../engine/sound/type/SoundCtx'
import { MUSIC_SOURCES } from './MUSIC_SOURCES'
import { Player } from 'tone'
import { Randoms } from '../engine/random'

/**
 * Loop music in random order.
 * Allow destruction of music when React component goes away
 */

export const playMusic = (ctx: SoundCtx): (() => void) => {
    const STATE = {
        player: undefined as Player,
        destroyed: false
    }

    STATE.player = Sounds.playAudio({ ctx, track: Randoms.pickRandom(MUSIC_SOURCES) })
    STATE.player.onstop = () => {
        if (STATE.destroyed) {
            return
        }
        STATE.player = Sounds.playAudio({ ctx, track: Randoms.pickRandom(MUSIC_SOURCES) })
    }

    return () => {
        STATE.player.stop()
        STATE.destroyed = true
    }
}
