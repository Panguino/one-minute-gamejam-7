import { isUndefined } from "./isUndefined";
import { isIterable } from "./type/isIterable";

export const toMany = <T>(obj: T | T[] | Iterable<T>): T[] => {
  if (isUndefined(obj)) {
    return [];
  }
  if (isIterable(obj)) {
    return Array.from(obj);
  }
  return Array.isArray(obj) ? obj : [obj];
};
