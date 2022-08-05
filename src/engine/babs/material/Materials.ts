import { getMaterial } from "./getMaterial";
import { MaterialTypeMap } from "./MaterialTypeMap";
import { updateMaterial } from "./updateMaterial";
import { updateStandardMaterial } from "./updateStandardMaterial";

export type MaterialOptions = Partial<{
  type: keyof MaterialTypeMap;
}>;

export type StandardMaterialOptions = Partial<
  MaterialOptions & {
    diffuseTexture: string;
    emissiveTexture: string;
    ambientTexture: string;
    opacityTexture: string;
    diffuseColor: string;
    alpha: number;
    specularColor: string;
    ambientColor: string;
    emissiveColor: string;
  }
>;
export type PbrMaterialOptions = Partial<{}>;
export type AllMaterialOptions = StandardMaterialOptions & PbrMaterialOptions;

export const Materials = {
  getMaterial,
  updateMaterial,
  updateStandardMaterial,
};
