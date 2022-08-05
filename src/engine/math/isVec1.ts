import { Vec1 } from "./type/Vec";

export function isVec1(maybe: unknown): maybe is Vec1 {
  return Array.isArray(maybe) && maybe.length > 0;
}
