import { Vec2 } from "./type/Vec";

export function isVec2(maybe: unknown): maybe is Vec2 {
  return Array.isArray(maybe) && maybe.length > 1;
}
