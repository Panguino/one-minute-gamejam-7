import { Point2, toVec2 } from "@mjtdev/math";
import { Vector } from "matter-js";


export const toMatterVector = (point: Point2): Vector => {
  const [x, y] = toVec2(point);
  return Vector.create(x, y);
};
