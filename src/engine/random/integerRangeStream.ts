import { NextRandom, Randoms } from ".";

export const integerRangeStream = (
  random: NextRandom
): ((max?: number, min?: number) => number) => {
  return (max = 1, min = 0) => {
    return Randoms.randomInteger({
      random,
      minMax: [min, max],
    });
  };
};
