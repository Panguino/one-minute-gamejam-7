import { Body, Composite, World } from "matter-js";
import { toMatterVector } from "./toMatterVector";

export const addBody = (world: World, body: Body) => {
  Composite.add(world, body);
  body.velocity = toMatterVector([0, 0]);
  body.angularVelocity = 0;
};
