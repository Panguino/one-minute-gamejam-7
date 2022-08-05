export type EngineOptions = Partial<{
  enableSleeping: boolean;
  gravity: Partial<{
    scale: number;
    x: number;
    y: number;
  }>;
}>;
