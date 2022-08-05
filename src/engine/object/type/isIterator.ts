export const isIterator = <T>(maybe: unknown): maybe is Iterator<T> => {
  const straw = maybe as Iterator<T>;
  return typeof straw === "object" && typeof straw["next"] === "function";
};


