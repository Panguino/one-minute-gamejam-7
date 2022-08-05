import { length2 } from "./length2";
import { subtract2 } from "./subtract2";
import { Point2 } from "./type/Point";

export function distance2(a: Point2, b: Point2): number {
  return length2(subtract2(a, b));
}


