import { isUndefined } from "@mjtdev/object";
import { Scene } from "babylonjs";

export const destroyMesh = (
  scene: Scene,
  name: string,
  options: Partial<{
    recurse: boolean;
    disposeMaterials: boolean;
    disposeTextures: boolean;
  }> = {}
) => {
  const {
    recurse = true,
    disposeMaterials = false,
    disposeTextures = false,
  } = options;
  const mesh = scene.getMeshByName(name);
  if (isUndefined(mesh)) {
    return;
  }
  mesh.dispose(!recurse, false);
  if (disposeMaterials) {
    const material = mesh.material;
    material.name = `DISPOSED-${material.name}`;
    material?.dispose(true, disposeTextures);
    scene.removeMaterial(material);
  }
  scene.removeMesh(mesh);
};
