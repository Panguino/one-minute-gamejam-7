import { isVec3 } from "./isVec3";
import { Point3 } from "./type/Point";
import { isPointObject3 } from "./isPointObject3";


export function isPoint3(maybe: unknown): maybe is Point3 {
  return isPointObject3(maybe) || isVec3(maybe);
}
