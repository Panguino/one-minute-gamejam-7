import { InstancedMesh, Mesh, Scene } from "babylonjs";
import { isDefined } from "@mjtdev/object";

export const getMesh = <T extends Mesh | InstancedMesh>(
  scene: Scene,
  name: string,
  producer: () => T = () => undefined
): T => {
  const meshMaybe = scene.getMeshByName(name);
  if (isDefined(meshMaybe)) {
    return meshMaybe as T;
  }
  return producer();
};


