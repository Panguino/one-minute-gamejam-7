import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { lerp } from "./lerp";


export const lerp3 = (a: Point3, b: Point3, alpha: number): Point3 => {
  return [
    lerp(xOf(a), xOf(b), alpha),
    lerp(yOf(a), yOf(b), alpha),
    lerp(zOf(a), zOf(b), alpha),
  ];
};
