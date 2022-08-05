import { DynamicTexture, Scene } from "babylonjs";
import { getTexture } from "./getTexture";
import { DynamicTextureOptions } from "./Textures";
import { TEXTURE_SAMPLING_MODES } from "./TEXTURE_SAMPLING_MODES";
import { updateTexture } from "./updateTexture";

export const getDynamicTexture = (
  scene: Scene,
  name: string,
  options: DynamicTextureOptions = {}
) => {
  const texture = getTexture(scene, name, () => {
    const {
      generateMipMaps = true,
      samplingMode = "linearNearest",
      width = 1024,
      height = 1024,
    } = options;
    return new DynamicTexture(
      name,
      {
        width,
        height,
      },
      scene,
      generateMipMaps,
      TEXTURE_SAMPLING_MODES[samplingMode]
    );
  });
  updateTexture(texture, options);
  return texture;
};
