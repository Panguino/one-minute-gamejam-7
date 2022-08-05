import { Engine, EngineOptions } from "babylonjs";
import { createCanvas } from "./createCanvas";

export const createEngine = (
  options: EngineOptions & {
    antialias?: boolean;
    width?: number;
    height?: number;
    canvas?: HTMLCanvasElement | OffscreenCanvas;
  } = {
    // preserveDrawingBuffer: true,
    // stencil: true,
    // antialias: true,
    width: 320,
    height: 320,
  }
) => {
  const {
    width,
    height,
    antialias,
    canvas = createCanvas({ width, height }),
  } = options;
  const engine = new Engine(canvas, antialias, options);
  engine.loadingScreen = undefined;
  engine.hideLoadingUI();
  return engine;
};
