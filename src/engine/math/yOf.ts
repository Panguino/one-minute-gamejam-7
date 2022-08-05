import { isPoint2 } from "./isPoint2";
import { isPointObject2 } from "./isPointObject2";
import { Point } from "./type/Point";


export function yOf(point: Point): number {
  if (isPoint2(point)) {
    return isPointObject2(point) ? point.y : point[1];
  }
  return undefined;
}
