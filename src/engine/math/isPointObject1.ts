import { isObject } from "./isObject";
import { PointObject1 } from "./type/PointObject";


export function isPointObject1(maybe: unknown): maybe is PointObject1 {
  return isObject(maybe) && typeof maybe["x"] === "number";
}
