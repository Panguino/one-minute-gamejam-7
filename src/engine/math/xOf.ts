import { isPointObject1 } from "./isPointObject1";
import { Point } from "./type/Point";


export function xOf(point: Point): number {
  if (typeof point === "number") {
    return point;
  }
  return isPointObject1(point) ? point.x : point[0];
}
