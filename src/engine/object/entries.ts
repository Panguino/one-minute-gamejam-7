export const entries = <O extends object, K extends keyof O, V = O[K]>(
  obj: O
): [K, V][] => {
  return Object.entries(obj) as [K, V][];
};
