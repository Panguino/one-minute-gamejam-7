import { isUndefined } from "./isUndefined";


export const isDefined = (obj: unknown) => {
  return !isUndefined(obj);
};


