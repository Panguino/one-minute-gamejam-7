import { Point } from "./type/Point";
import { isPoint1 } from "./isPoint1";
import { isPoint0 } from "./isPoint0";


export function isPoint(maybe: unknown): maybe is Point {
  return isPoint0(maybe) || isPoint1(maybe);
}
