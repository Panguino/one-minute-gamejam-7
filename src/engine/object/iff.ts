import { isDefined } from "./isDefined";

export const iff = <T, R>(value: T, mapper: (v: T) => R): R => {
  if (isDefined(value)) {
    return mapper(value);
  }
  return undefined;
};


