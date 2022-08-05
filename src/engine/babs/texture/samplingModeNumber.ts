import { TEXTURE_SAMPLING_MODES } from "./TEXTURE_SAMPLING_MODES";
import { TextureSamplingModeMap } from "./Textures";


export const samplingModeNumber = (
  name: keyof TextureSamplingModeMap
): number => {
  return TEXTURE_SAMPLING_MODES[name];
};
