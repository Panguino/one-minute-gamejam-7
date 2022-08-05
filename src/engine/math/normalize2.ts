import { divide2 } from "./divide2";
import { length2 } from "./length2";
import { Point2 } from "./type/Point";


export function normalize2(p: Point2): Point2 {
  const length = length2(p);
  if (length === 1) {
    return p;
  }
  return divide2(p, [length, length]);
}
