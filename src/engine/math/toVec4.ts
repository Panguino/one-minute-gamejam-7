import { isValue } from "./isValue";
import { Point } from "./type/Point";
import { Vec4 } from "./type/Vec";
import { wOf } from "./wOf";
import { zOf } from "./zOf";
import { yOf } from "./yOf";
import { xOf } from "./xOf";


export function toVec4(source: Point): Vec4 {
  if (!isValue(source)) {
    return undefined;
  }
  return [xOf(source), yOf(source), zOf(source), wOf(source)];
}
