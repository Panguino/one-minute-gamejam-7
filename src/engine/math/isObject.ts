import { isValue } from "./isValue";


export function isObject(maybe: unknown): maybe is {
  [k in string | number]: any;
} {
  return isValue(maybe) && typeof maybe === "object";
}
