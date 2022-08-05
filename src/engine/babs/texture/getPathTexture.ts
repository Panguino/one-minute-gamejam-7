import { Scene, Texture } from 'babylonjs';
import { getTexture } from './getTexture';
import { samplingModeNumber } from './samplingModeNumber';
import { PathTextureOptions } from './Textures';
import { updateTexture } from './updateTexture';


export const getPathTexture = (scene: Scene, name: string, options: PathTextureOptions) => {
  const texture = getTexture(scene, name, () => {
    const { src, generateMipMaps = true, samplingMode = 'linearNearest' } = options;
    const texture = new Texture(src, scene, {
      samplingMode: samplingModeNumber(samplingMode)
    });
    texture.name = name;
    return texture;
  });

  updateTexture(texture, options);
  return texture;
};
