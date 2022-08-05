import { Color3 } from 'babylonjs'
import { Colors } from "@/engine/color";

export const c3 = (color: string) => {
  const hex = Colors.builder({ color }).hex();
  return Color3.FromHexString(hex);
};


