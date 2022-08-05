import { isUndefined } from "@mjtdev/object";
import { Composite, World } from "matter-js";
import { findBodyByLabel } from "./findBodyByLabel";

export const removeBody = (world: World, id: string) => {
  const body = findBodyByLabel(world, id);
  if (isUndefined(body)) {
    return;
  }

  Composite.remove(world, body);
};
