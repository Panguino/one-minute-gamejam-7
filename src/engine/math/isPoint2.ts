import { isVec2 } from "./isVec2";
import { Point2 } from "./type/Point";
import { isPointObject2 } from "./isPointObject2";


export function isPoint2(maybe: unknown): maybe is Point2 {
  return isPointObject2(maybe) || isVec2(maybe);
}
