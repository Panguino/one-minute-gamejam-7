import { Point2, Point3, toVec3 } from "@mjtdev/math";
import { Vector3 } from "babylonjs";

export function v3(
  xOrPosition: number | Point3 | Point2 = 0,
  y: number = 0,
  z: number = 0
) {
  if (typeof xOrPosition === "number") {
    return new Vector3(xOrPosition, y, z);
  }

  const [xx = 0, yy = 0, zz = 0] = toVec3(xOrPosition as Point3);
  return new Vector3(xx, yy, zz);
}
