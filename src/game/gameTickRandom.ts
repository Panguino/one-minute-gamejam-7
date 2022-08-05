import { Noises } from '../engine/noise';
import { Tick } from '../engine/tick';
import { GameWorld } from './GameWorld';


export const gameTickRandom = (world: GameWorld, tick: Tick) => {
  const { seed } = world;
  const { tickCount } = tick;
  return Noises.noiseStream(seed + tickCount);
};
