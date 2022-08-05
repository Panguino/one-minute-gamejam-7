import { Tick } from "./Tick";
import { Ticker } from "./Ticker";


export type TickState = Tick & {
  tickers: Ticker[];
  running: boolean;
  abort: boolean
};
