import { isValue } from "./isValue";
import { Point3 } from "./type/Point";
import { Vec3 } from "./type/Vec";
import { zOf } from "./zOf";
import { yOf } from "./yOf";
import { xOf } from "./xOf";


export function toVec3(point: Point3): Vec3 {
  if (!isValue(point)) {
    return undefined;
  }
  return [xOf(point), yOf(point), zOf(point)];
}
