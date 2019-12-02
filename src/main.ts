import { drawSystemRun } from "./drawSystem";
import { physicsSystemRun } from "./physicsSystem";
import { State, stateInit } from "./state";

let state: State;

const loop = (time: number): void => {
  physicsSystemRun(state, time);
  drawSystemRun(state, time);

  requestAnimationFrame(loop);
};

export const main = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Missing canvas element");
  }

  state = stateInit(canvas);

  requestAnimationFrame(loop);
};
