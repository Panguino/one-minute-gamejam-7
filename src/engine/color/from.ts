import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";


export const from = (color: ColorLike) => {
  return builder({ color });
};
