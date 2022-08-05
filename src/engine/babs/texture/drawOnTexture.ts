import { DynamicTexture, ICanvasRenderingContext } from "babylonjs";


export const drawOnTexture = (
  texture: DynamicTexture,
  render: (
    ctx: ICanvasRenderingContext,
    size: { width: number; height: number; }
  ) => void
) => {
  const size = texture.getSize();
  const ctx = texture.getContext();
  render(ctx, size);
  texture.update();
};
