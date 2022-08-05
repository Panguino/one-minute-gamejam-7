import { Composite, World } from "matter-js";

export const allBodies = (world: World) => {
  return Composite.allBodies(world);
};
