import { Vec } from "./type/Vec";


export function isVec(maybe: unknown): maybe is Vec {
  return Array.isArray(maybe);
}
