
export function isValue(maybe: unknown): boolean {
  return maybe !== undefined && maybe !== null && !Number.isNaN(maybe);
}
