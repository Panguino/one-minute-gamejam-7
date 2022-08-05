import { start } from "tone";

export const ready = async () => {
  await start();
  return true;
};
