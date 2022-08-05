import { Vec3 } from "./type/Vec";


export function isVec3(maybe: unknown): maybe is Vec3 {
  return Array.isArray(maybe) && maybe.length > 2;
}
