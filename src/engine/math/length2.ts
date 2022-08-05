import { Point2 } from "./type/Point";
import { lengthSquared2 } from "./lengthSquared2";


export function length2(p: Point2): number {
  return Math.sqrt(lengthSquared2(p));
}
