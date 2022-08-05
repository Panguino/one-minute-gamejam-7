import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { lerp } from "./lerp";


export const lerp2 = (a: Point2, b: Point2, alpha: number): Point2 => {
  return [lerp(xOf(a), xOf(b), alpha), lerp(yOf(a), yOf(b), alpha)];
};
