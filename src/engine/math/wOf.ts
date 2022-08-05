import { isPoint4 } from "./isPoint4";
import { isPointObject4 } from "./isPointObject4";
import { Point } from "./type/Point";


export function wOf(point: Point): number {
  if (isPoint4(point)) {
    return isPointObject4(point) ? point.w : point[3];
  }
  return undefined;
}
