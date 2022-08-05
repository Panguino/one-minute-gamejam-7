import { noiseUnit } from ".";
import { SerializableNoiseState } from "./type/SerializableNoiseState";

export const serializableNoiseStream = (
  state: Partial<SerializableNoiseState>
): (() => number) => {
  const sab = new ArrayBuffer(8);
  const typedArray = new Uint32Array(sab);
  const { seed = 0, distance = 0 } = state;
  Atomics.store(typedArray, 0, Math.round(seed + distance));
  return () => {
    Atomics.add(typedArray, 0, 1);
    state.distance = Atomics.load(typedArray, 0);
    return noiseUnit(state.distance);
  };
};
