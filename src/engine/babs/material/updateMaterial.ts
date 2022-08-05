import { Material, Scene, StandardMaterial } from "babylonjs";
import { AllMaterialOptions } from "./Materials";
import { updateStandardMaterial } from "./updateStandardMaterial";

export const updateMaterial = (
  scene: Scene,
  material: Material,
  options: AllMaterialOptions
) => {
  if (material instanceof StandardMaterial) {
    updateStandardMaterial(scene, material, options);
  }
};
