import { AnimationRequestFunction } from "./AnimationRequestFunction";
import { Ticker } from "./Ticker";

export type TickLoopConfig = {
  ticksPerSecond?: number;
  ticker?: Ticker | Ticker[];
  running?: boolean;
  errorHandler?: (error: unknown) => void;
  request?: AnimationRequestFunction;
};
