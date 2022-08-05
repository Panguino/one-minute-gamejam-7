import { World } from "matter-js";
import { addBody } from "./addBody";
import { BODY_PRODUCERS } from "./BODY_PRODUCERS";
import { getBody } from "./getBody";
import { BodySpec } from "./type/BodySpec";
import { BodyType } from "./type/BodyType";
import { PhysicsBody } from "./type/PhysicsTypes";
import { updateBody } from "./updateBody";

export const getBodyType = (
  world: World,
  type: BodyType,
  id: string,
  options: BodySpec
): PhysicsBody => {
  const body = getBody(world, id, () => {
    return BODY_PRODUCERS[type](options);
  });
  body.label = id;
  updateBody(body, options);
  addBody(world, body);
  return body;
};
