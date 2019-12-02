import { DrawSystem, drawSystemInit, initBasicObjMut, initMainCameraMut } from "./drawSystem";
import { Entity, EntityId } from "./entity";
import { PhysicsSystem, physicsSystemInit } from "./physicsSystem";

export type State = {
  entities: Map<EntityId, Entity>;
  drawSystem: DrawSystem;
  physicsSystem: PhysicsSystem;
};

export const stateInit = (canvas: HTMLCanvasElement): State => {
  const drawSystem = drawSystemInit(canvas);
  const physicsSystem = physicsSystemInit();

  const state: State = {
    entities: new Map(),
    drawSystem,
    physicsSystem,
  };

  initMainCameraMut(state);
  initBasicObjMut(state);

  return state;
};
