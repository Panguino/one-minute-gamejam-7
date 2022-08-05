import { ColorLike, ColorModel } from "./ColorTypes";
import { builder } from "./builder";

export function toCss(color: ColorLike, model?: ColorModel): string {
  return builder({ color, model }).hsl().string();
}
