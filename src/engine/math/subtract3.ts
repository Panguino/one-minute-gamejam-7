import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export function subtract3(a: Point3, b: Point3): Point3 {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return [xOf(a) - xOf(b), yOf(a) - yOf(b), zOf(a) - zOf(b)];
}
