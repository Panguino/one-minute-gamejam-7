import { noiseStream } from ".";

export const noiseRange = (
  seed: number = 0
): ((max?: number, min?: number) => number) => {
  const random = seed === undefined ? (x = 0.5) => x : noiseStream(seed);
  return (max = 1, min = 0) => {
    return min + random() * (max - min);
  };
};
