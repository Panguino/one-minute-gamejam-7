import { isObject } from "./isObject";
import { PointObject4 } from "./type/PointObject";


export function isPointObject4(maybe: unknown): maybe is PointObject4 {
  return (
    isObject(maybe) &&
    typeof maybe["x"] === "number" &&
    typeof maybe["y"] === "number" &&
    typeof maybe["z"] === "number" &&
    typeof maybe["w"] === "number"
  );
}
