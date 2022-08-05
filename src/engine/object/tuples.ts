export type Tuple0 = [];
export type Tuple1<A> = [A];
export type Tuple2<A, B> = [A, B];
export type Tuple3<A, B, C> = [A, B, C];
export type Tuple4<A, B, C, D> = [A, B, C, D];
export type Tuple5<A, B, C, D, E> = [A, B, C, D, E];

export const tuple0 = (): [] => {
  return [];
};

export const tuple1 = <A>(a: A): Tuple1<A> => {
  return [a];
};

export const tuple2 = <A, B>(a: A, b: B): Tuple2<A, B> => {
  return [a, b];
};

export const tuple3 = <A, B, C>(a: A, b: B, c: C): Tuple3<A, B, C> => {
  return [a, b, c];
};

export const tuple4 = <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  d: D
): Tuple4<A, B, C, D> => {
  return [a, b, c, d];
};

export const tuple5 = <A, B, C, D, E>(
  a: A,
  b: B,
  c: C,
  d: D,
  e: E
): Tuple5<A, B, C, D, E> => {
  return [a, b, c, d, e];
};
