import { Point0 } from "./type/Point";


export function isPoint0(maybe: unknown): maybe is Point0 {
  return typeof maybe === "number";
}
