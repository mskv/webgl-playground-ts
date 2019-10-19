import { drawSystemRun } from "./drawSystem";
import { stateInit } from "./state";

export const main = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Missing canvas element");
  }

  const state = stateInit(canvas);

  drawSystemRun(state);
};
