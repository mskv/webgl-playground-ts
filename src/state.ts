import { Mesh, PerspectiveProjection, Transform } from "./3d";
import { DrawSystem, drawSystemInit, initBasicObjMut, initMainCameraMut } from "./drawSystem";
import { Storage, storageInit } from "./storage";

export type State = {
  store: Store;
  drawSystem: DrawSystem;
};

type Store = {
  transforms: Storage<Transform>;
  meshes: Storage<Mesh>;
  perspectiveProjections: Storage<PerspectiveProjection>;
};

export const stateInit = (canvas: HTMLCanvasElement): State => {
  const store: Store = {
    transforms: storageInit<Transform>(),
    meshes: storageInit<Mesh>(),
    perspectiveProjections: storageInit<PerspectiveProjection>(),
  };

  const drawSystem = drawSystemInit(canvas);

  const state: State = {
    store,
    drawSystem,
  };

  initMainCameraMut(state);
  initBasicObjMut(state);

  return state;
};
