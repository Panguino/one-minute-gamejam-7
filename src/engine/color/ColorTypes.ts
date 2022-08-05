import QixColor from "color";

export type ColorLike = ColorBuilder | string | Color3 | Color4;

export type ColorModel = "rgb" | "rgba" | "hsl" | "hsla";

export type Color3 = [number, number, number];
export type Color4 = [number, number, number, number];
export type ColorBuilder = QixColor;

export type ColorOperation =
  | "darken"
  | "lighten"
  | "random"
  | "rotateHue"
  | "opacity"
  | "desaturate"
  | "saturate"
  | "color";

export type ColorSpec = Partial<
  {
    [k in ColorOperation]: number | string;
  }
>;
