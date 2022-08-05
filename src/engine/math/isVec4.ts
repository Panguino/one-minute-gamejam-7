import { Vec4 } from "./type/Vec";


export function isVec4(maybe: unknown): maybe is Vec4 {
  return Array.isArray(maybe) && maybe.length > 3;
}
