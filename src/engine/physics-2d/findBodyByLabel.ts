import { Composite, World } from "matter-js";

export const findBodyByLabel = (world: World, label: string) => {
  return Composite.allBodies(world).find((body) => {
    return body?.label === label;
  });
};
