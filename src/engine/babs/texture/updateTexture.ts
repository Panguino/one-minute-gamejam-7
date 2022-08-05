import { iff } from "@mjtdev/object";
import { BaseTexture, DynamicTexture } from "babylonjs";
import { AllTextureOptions } from "./Textures";

export const updateTexture = (
  texture: BaseTexture,
  options: AllTextureOptions
) => {
  const { hasAlpha } = options;
  iff(hasAlpha, (value) => {
    texture.hasAlpha = value;
  });

  if (texture instanceof DynamicTexture) {
    texture.update();
  }
};
