import { isDefined } from "@mjtdev/object";
import { World, Body } from "matter-js";
import { findBodyByLabel } from "./findBodyByLabel";
import { PhysicsBody } from "./type/PhysicsTypes";

export const getBody = (
  world: World,
  id: string,
  producer: () => PhysicsBody
): PhysicsBody => {
  const body = findBodyByLabel(world, id);
  if (isDefined(body)) {
    return body;
  }
  return producer();
};
