import { isValue } from "./isValue";
import { Point2 } from "./type/Point";
import { Vec2 } from "./type/Vec";
import { yOf } from "./yOf";
import { xOf } from "./xOf";


export function toVec2(point: Point2): Vec2 {
  if (!isValue(point)) {
    return undefined;
  }
  return [xOf(point), yOf(point)];
}
