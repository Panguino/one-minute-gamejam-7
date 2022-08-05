import { isVec } from "./isVec";
import { Point } from "./type/Point";
import { Vec } from "./type/Vec";
import { isPoint4 } from "./isPoint4";
import { isPoint3 } from "./isPoint3";
import { isPoint2 } from "./isPoint2";
import { isPoint1 } from "./isPoint1";
import { isPoint0 } from "./isPoint0";
import { toVec4 } from "./toVec4";
import { toVec3 } from "./toVec3";
import { toVec2 } from "./toVec2";
import { toVec1 } from "./toVec1";
import { toVec0 } from "./toVec0";


export function toVec(point: Point): Vec {
  if (isVec(point)) {
    return point;
  }
  if (isPoint4(point)) {
    return toVec4(point);
  }
  if (isPoint3(point)) {
    return toVec3(point);
  }
  if (isPoint2(point)) {
    return toVec2(point);
  }
  if (isPoint1(point)) {
    return toVec1(point);
  }
  if (isPoint0(point)) {
    return toVec0(point);
  }
  return undefined;
}
