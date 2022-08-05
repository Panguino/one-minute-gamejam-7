import { SoundCtx } from './type/SoundCtx';


export function playAudio({ ctx, track }: { ctx: SoundCtx; track: string }) {
    const player = ctx.players[track]
    player.start()
    return player
}
