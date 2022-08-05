import { Synth, Sampler, Player, Volume } from 'tone'

export type SoundCtx = {
    synths: { [k in string]: Synth }
    samplers: { [k in string]: Sampler }
    players: { [k in string]: Player }
    volumes: { [k in string]: Volume }
}
