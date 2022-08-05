import { Engine } from "matter-js";

export const update = (
  engine: Engine,
  deltaMs: number,
  lastDeltaMs: number = 0
) => {
  const correction = lastDeltaMs === 0 ? undefined : deltaMs / lastDeltaMs;
  Engine.update(engine, deltaMs, correction);
};
