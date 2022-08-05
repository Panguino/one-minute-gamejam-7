export type PointObject =
  | PointObject1
  | PointObject2
  | PointObject3
  | PointObject4;

export type PointObject1 = {
  x: number;
};

export type PointObject2 = PointObject1 & {
  y: number;
};

export type PointObject3 = PointObject2 & {
  z: number;
};

export type PointObject4 = PointObject3 & {
  w: number;
};
