
export function isIterable<T>(maybe: unknown): maybe is Iterable<T> {
  const straw = maybe as Iterable<T>;
  return (
    typeof straw === "object" && typeof straw[Symbol.iterator] === "function"
  );
}
