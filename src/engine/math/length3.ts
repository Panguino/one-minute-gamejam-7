import { Point3 } from "./type/Point";
import { lengthSquared3 } from "./lengthSquared3";


export function length3(p: Point3): number {
  return Math.sqrt(lengthSquared3(p));
}
