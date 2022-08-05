import { createSoundCtx } from './createSoundCtx'
import { SoundSetup } from './type/SoundSetup'

export type SoundSetupSpec = {
    sampleMap?: Record<string, string>
    audioMap?: Record<string, string>
}

export const setupSound = async (spec: Partial<SoundSetupSpec> = {}): Promise<SoundSetup> => {
    // const clock = new Clock()
    return {
        ctx: await createSoundCtx(spec)

        // clock
    }
}
