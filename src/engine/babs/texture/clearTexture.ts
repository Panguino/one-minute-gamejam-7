import { DynamicTexture } from "babylonjs";
import { drawOnTexture } from "./drawOnTexture";


export const clearTexture = (texture: DynamicTexture) => {
  drawOnTexture(texture, (ctx, size) => {
    const { width, height } = size;
    ctx.clearRect(0, 0, width, height);
  });
};
