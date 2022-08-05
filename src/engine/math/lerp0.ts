import { Point0 } from "./type/Point";
import { xOf } from "./xOf";
import { lerp } from "./lerp";


export const lerp0 = (a: Point0, b: Point0, alpha: number): Point0 => {
  return lerp(xOf(a), xOf(b), alpha);
};
