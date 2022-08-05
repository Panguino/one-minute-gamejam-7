import { Destination } from "tone";
import { SoundCtx } from "./type/SoundCtx";


export const setVolume = (ctx: SoundCtx) => {

  Destination.volume.rampTo(-20);
}