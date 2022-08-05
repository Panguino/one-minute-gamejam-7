import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { contains } from "./contains";


export function divide3(a: Point3, b: Point3): Point3 {
  if (b === undefined || contains(b, 0)) {
    return undefined;
  }
  if (a === undefined) {
    return undefined;
  }
  return [xOf(a) / xOf(b), yOf(a) / yOf(b), zOf(a) / zOf(b)];
}
