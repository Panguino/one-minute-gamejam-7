import { isValue } from "./isValue";


export function isNotValue(maybe: unknown): boolean {
  return !isValue(maybe);
}
