import { isUndefined } from "@mjtdev/object";
import { PickingInfo } from "babylonjs";

export const findClosestPick = (picks: PickingInfo[]) => {
  if (isUndefined(picks)) {
    return undefined;
  }
  picks.sort((a, b) => {
    return a.distance - b.distance;
  });
  return picks[0];
};
