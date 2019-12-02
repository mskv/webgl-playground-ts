import { EntityKind, ofKindCurr } from "./entity";
import { vec3Add, vec3MulScalar } from "./math";
import { State } from "./state";

const PHYSICS_FPS = 60;
const PHYSICS_FRAME_LENGTH_S = 1 / PHYSICS_FPS;
const PHYSICS_FRAME_LENGTH_MS = PHYSICS_FRAME_LENGTH_S * 1000;

type FrameInfo = {
  count: number;
  start: number;
};

export type PhysicsSystem = {
  frame: FrameInfo;
};

export const physicsSystemInit = (): PhysicsSystem => {
  const frame = { count: 0, start: 0 };

  return { frame };
};

export const physicsSystemRun = (state: State, time: number): void => {
  const frame = state.physicsSystem.frame;

  while (isFrameComplete(frame, time)) {
    simulate(state);
    advanceFrameMut(frame);
  }
};

const isFrameComplete = (frame: FrameInfo, time: number): boolean => time - frame.start >= PHYSICS_FRAME_LENGTH_MS;

const advanceFrameMut = (frame: FrameInfo): void => {
  frame.count += 1;
  frame.start += PHYSICS_FRAME_LENGTH_MS;
};

const simulate = (state: State) => {
  const entities = Array.from(state.entities.values());
  const simpleObjects = entities.filter(ofKindCurr(EntityKind.SimpleObject));

  for (const simpleObject of simpleObjects) {
    const movement = simpleObject.movement,
      transform = simpleObject.transform;

    movement.speed = vec3Add(movement.speed, vec3MulScalar(movement.dSpeed, PHYSICS_FRAME_LENGTH_S));
    movement.rotation = vec3Add(movement.rotation, vec3MulScalar(movement.dRotation, PHYSICS_FRAME_LENGTH_S));

    transform.position = vec3Add(transform.position, vec3MulScalar(movement.speed, PHYSICS_FRAME_LENGTH_S));
    transform.rotation = vec3Add(transform.rotation, vec3MulScalar(movement.rotation, PHYSICS_FRAME_LENGTH_S));
  }
};
