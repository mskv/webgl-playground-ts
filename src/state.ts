import { DrawSystem, drawSystemInit, initBasicObjMut, initMainCameraMut } from "./drawSystem";
import { Entity, EntityId } from "./entity";

export type State = {
  entities: Map<EntityId, Entity>;
  drawSystem: DrawSystem;
};

export const stateInit = (canvas: HTMLCanvasElement): State => {
  const drawSystem = drawSystemInit(canvas);

  const state: State = {
    entities: new Map(),
    drawSystem,
  };

  initMainCameraMut(state);
  initBasicObjMut(state);

  return state;
};
