import { divide3 } from "./divide3";
import { length3 } from "./length3";
import { Point3 } from "./type/Point";


export function normalize3(p: Point3): Point3 {
  const length = length3(p);
  if (length === 1) {
    return p;
  }
  return divide3(p, [length, length, length]);
}
