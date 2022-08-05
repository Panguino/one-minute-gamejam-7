export const isUndefined = (obj: unknown) => {
  return obj === undefined || obj === null || Number.isNaN(obj);
};
