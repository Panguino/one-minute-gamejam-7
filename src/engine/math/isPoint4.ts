import { isVec4 } from "./isVec4";
import { Point4 } from "./type/Point";
import { isPointObject4 } from "./isPointObject4";


export function isPoint4(maybe: unknown): maybe is Point4 {
  return isPointObject4(maybe) || isVec4(maybe);
}
