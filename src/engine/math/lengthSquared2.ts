import { toVec2 } from "./toVec2";
import { Point2 } from "./type/Point";


export function lengthSquared2(p: Point2): number {
  const [x, y] = toVec2(p);
  return x * x + y * y;
}
