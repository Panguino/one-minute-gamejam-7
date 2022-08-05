import { isVec1 } from "./isVec1";
import { Point1 } from "./type/Point";
import { isPointObject1 } from "./isPointObject1";


export function isPoint1(maybe: unknown): maybe is Point1 {
  return isPointObject1(maybe) || isVec1(maybe);
}
