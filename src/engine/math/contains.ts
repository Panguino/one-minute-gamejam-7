import { toVec } from "./toVec";
import { Point } from "./type/Point";


export const contains = (point: Point, needle: number): boolean => {
  const values = toVec(point);
  return values.find((v) => v === needle) !== undefined;
};
