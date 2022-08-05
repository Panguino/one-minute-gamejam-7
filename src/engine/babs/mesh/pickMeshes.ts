import { AbstractMesh, Camera, Scene } from "babylonjs";

export const pickMeshes = (
  scene: Scene,
  x: number,
  y: number,
  options: Partial<{
    camera: Camera;
    predicate: (mesh: AbstractMesh) => boolean;
  }> = {}
) => {
  const {
    predicate = (mesh: AbstractMesh) => mesh.isPickable,
    camera = scene.activeCamera,
  } = options;
  return scene.multiPick(x, y, predicate, camera);
};
