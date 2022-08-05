import { isPoint3 } from "./isPoint3";
import { isPointObject3 } from "./isPointObject3";
import { Point } from "./type/Point";


export function zOf(point: Point): number {
  if (isPoint3(point)) {
    return isPointObject3(point) ? point.z : point[2];
  }
  return undefined;
}
