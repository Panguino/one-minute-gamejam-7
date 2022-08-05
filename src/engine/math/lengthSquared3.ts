import { toVec3 } from "./toVec3";
import { Point3 } from "./type/Point";


export function lengthSquared3(p: Point3): number {
  const [x, y, z] = toVec3(p);
  return x * x + y * y + z * z;
}
