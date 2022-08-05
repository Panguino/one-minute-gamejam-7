import { isUndefined } from "@mjtdev/object";
import { Scene } from "babylonjs";

export const destroyTexture = (scene: Scene, name: string) => {
  const tex = scene.getTextureByName(name);
  if (isUndefined(tex)) {
    return;
  }
  tex.dispose();
  scene.removeTexture(tex);
};
