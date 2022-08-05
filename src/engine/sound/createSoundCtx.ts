import { Destination, loaded, Sampler, Synth, Player, Volume } from 'tone'
import { Objects } from '../object/Objects'
import { SoundSetupSpec } from './setupSound'
import { SoundCtx } from './type/SoundCtx'

export const MAX_SYNTHS = 32
export const MAX_SAMPLERS = 32

export const createSoundCtx = async (spec: Partial<SoundSetupSpec> = {}): Promise<SoundCtx> => {
    const { sampleMap = {}, audioMap = {} } = spec

    const synths = {
        normal: new Synth().toDestination()
    }

    const volumes: Record<string, Volume> = {}

    const samplers = Objects.fromEntries(
        Objects.entries(sampleMap).map(([key, url]) => {
            const volume = new Volume().toDestination()
            volume.mute = true
            const sampler = new Sampler({
                urls: {
                    C4: url
                },
                onload: () => {
                    // console.log("LOADED SAMPLES", sampleMap);
                },
                onerror: (error) => {
                    console.error(error)
                    console.error('ERROR LOADING SAMPLES', sampleMap)
                }
            }).connect(volume)
            volumes[key] = volume
            return [key, sampler]
        })
    )

    const players = Objects.fromEntries(
        Objects.entries(audioMap).map((entry) => {
            const [key, url] = entry
            const volume = new Volume(12).toDestination()
            volume.mute = true
            const player = new Player(url).connect(volume)
            volumes[key] = volume
            return [key, player]
        })
    )

    const ctx: SoundCtx = {
        synths,
        samplers,
        players,
        volumes
    }
    Destination.volume.rampTo(-20)
    await loaded()
    return ctx
}
