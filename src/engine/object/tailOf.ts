import { isUndefined } from "./isUndefined";

export const tailOf = <O>(obj: O[]) => {
  if (isUndefined(obj)) {
    return undefined;
  }
  return obj.slice(1);
};
