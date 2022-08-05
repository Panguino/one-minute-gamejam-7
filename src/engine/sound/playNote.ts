import { Asserts } from '@mjtdev/assert'
import { isDefined, isUndefined } from '@mjtdev/object'
import { Instrument } from './Instrument'
import { SoundCtx } from './type/SoundCtx'
import { SoundDuration } from './type/SoundDuration'
import { SoundFrequency } from './type/SoundFrequency'

export const playNote = ({
    ctx,
    note = 'C4',
    duration = '8n',
    instrument = 'synth',
    voice = 'normal'
}: {
    ctx: SoundCtx
    instrument?: Instrument
    voice?: string
    note?: SoundFrequency
    duration?: SoundDuration
}) => {
    switch (instrument) {
        case 'sampler': {
            const sampler = ctx.samplers[voice]
            if (isUndefined(sampler)) {
                console.warn(`No Sampler Available for voice: ${voice}`, ctx)
                return
            }
            if (isDefined(duration)) {
                return sampler.triggerAttackRelease(note, duration)
            }
            return sampler.triggerAttack(note)
        }
        case 'synth': {
            // const synth = ctx.synths.pop();
            const synth = ctx.synths[voice]
            if (isUndefined(synth)) {
                console.warn(`No Synth Availablef for voice: ${voice}`, ctx)
                return
            }

            if (isDefined(duration)) {
                return synth.triggerAttackRelease(note, duration)
            }
            return synth.triggerAttack(note)
        }

        default: {
            Asserts.assertUnreachable(instrument, `Unknown instrument: ${instrument}`)
        }
    }
}
