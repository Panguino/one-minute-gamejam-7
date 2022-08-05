import { isObject } from "./isObject";
import { PointObject3 } from "./type/PointObject";


export function isPointObject3(maybe: unknown): maybe is PointObject3 {
  return (
    isObject(maybe) &&
    typeof maybe["x"] === "number" &&
    typeof maybe["y"] === "number" &&
    typeof maybe["z"] === "number"
  );
}
