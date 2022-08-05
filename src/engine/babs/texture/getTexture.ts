import { BaseTexture, Scene } from "babylonjs";
import { isDefined } from "@mjtdev/object";

export const getTexture = <T extends BaseTexture>(
  scene: Scene,
  name: string,
  producer: () => T
) => {
  const texture = scene.getTextureByName(name);
  if (isDefined(texture)) {
    return texture as T;
  }
  return producer();
};
