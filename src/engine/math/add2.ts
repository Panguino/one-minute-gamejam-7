import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";


export function add2(a: Point2, b: Point2): Point2 {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return [xOf(a) + xOf(b), yOf(a) + yOf(b)];
}
