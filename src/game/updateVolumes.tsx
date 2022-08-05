import { SoundCtx } from '../engine/sound/type/SoundCtx';
import { MUSIC_SOURCES } from './MUSIC_SOURCES';
import { SFX_SOURCES } from './SFX_SOURCES';


export const updateVolumes = ({
    musicVolume, sfxVolume, ctx, minDecibels = -20, maxDecibels = 30
}: {
    ctx: SoundCtx;
    sfxVolume: number;
    musicVolume: number;
    maxDecibels?: number;
    minDecibels?: number;
}) => {
    MUSIC_SOURCES.forEach((track) => {
        if (musicVolume === 0) {
            ctx.volumes[track].mute = true;
            return;
        }
        const volume = minDecibels + (musicVolume / 100) * maxDecibels;
        ctx.volumes[track].mute = false;
        ctx.volumes[track].volume.value = volume;
    });
    SFX_SOURCES.forEach((sfx) => {
        if (sfxVolume === 0) {
            ctx.volumes[sfx].mute = true;
            return;
        }
        const volume = minDecibels + (sfxVolume / 100) * maxDecibels;
        ctx.volumes[sfx].mute = false;
        ctx.volumes[sfx].volume.value = volume;
    });
};
