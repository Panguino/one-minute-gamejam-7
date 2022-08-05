export function lerp(v0: number, v1: number, amount: number) {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return v0 + (v1 - v0) * amount;
}
