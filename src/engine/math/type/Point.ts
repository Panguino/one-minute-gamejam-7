import {
  PointObject,
  PointObject1,
  PointObject2,
  PointObject3,
  PointObject4
} from "./PointObject";
import { Vec, Vec1, Vec2, Vec3, Vec4 } from "./Vec";


export type Point = Point0 | (PointObject | Vec);
export type Point0 = Point1 | number;
export type Point1 = Point2 | (PointObject1 | Vec1);
export type Point2 = Point3 | (PointObject2 | Vec2);
export type Point3 = Point4 | (PointObject3 | Vec3);
export type Point4 = PointObject4 | Vec4;
