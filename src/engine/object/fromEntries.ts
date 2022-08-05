import { isDefined } from "./isDefined";

export const fromEntries = <K extends string, V>(
  entries: [K, V][]
): { [k in K]: V } => {
  return Object.fromEntries(entries) as { [k in K]: V };
};

export const fromEntriesToMultimap = <K extends string, V>(
  entries: [K, V][]
): { [k in K]: V[] } => {
  const keys = Array.from(new Set(entries.map((e) => e[0])));
  const result = fromEntries(keys.map((k) => [k, [] as V[]]));

  entries.forEach((entry) => {
    const [key, value] = entry;
    if (isDefined(value)) {
      const valueContainer = result[key];
      valueContainer.push(value);
    }
  });
  return result;

};
