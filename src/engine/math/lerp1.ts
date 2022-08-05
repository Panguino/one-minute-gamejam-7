import { Point1 } from "./type/Point";
import { xOf } from "./xOf";
import { lerp } from "./lerp";


export const lerp1 = (a: Point1, b: Point1, alpha: number): Point1 => {
  return [lerp(xOf(a), xOf(b), alpha)];
};
