export const isArrayLike = <T>(maybe: unknown): maybe is ArrayLike<T> => {
  const straw = maybe as ArrayLike<T>;
  return typeof straw === "object" && typeof straw.length === "number";
};
