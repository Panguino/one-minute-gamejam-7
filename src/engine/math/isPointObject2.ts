import { isObject } from "./isObject";
import { PointObject2 } from "./type/PointObject";


export function isPointObject2(maybe: unknown): maybe is PointObject2 {
  return (
    isObject(maybe) &&
    typeof maybe["x"] === "number" &&
    typeof maybe["y"] === "number"
  );
}
