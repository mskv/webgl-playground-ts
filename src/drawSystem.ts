import { cubeMesh, perspectiveProjection, perspectiveProjectionMatrix, transform, transformMatrix } from "./3d";
import {
  assertKind,
  cameraEntity,
  CameraEntity,
  EntityId,
  EntityKind,
  nextId,
  ofKindCurr,
  simpleObjectEntity,
} from "./entity";
import { mat4Inverse, mat4Product, mat4Transpose, radFromDeg, vec3, Vec3, vec3Normalize } from "./math";
import {
  Program,
  programInit,
  programSetAttributeNormal,
  programSetAttributePosition,
  programSetIndices,
  programSetUniformLightDirection,
  programSetUniformModelToProjection,
  programSetUniformModelToViewInverseTranspose,
  programUse,
} from "./program";
import { State } from "./state";
import { assert, defined } from "./utils";

export type DrawSystem = {
  gl: WebGL2RenderingContext;
  program: Program;
  activeCameraId: EntityId | null;
  lightDirection: Vec3;
};

export const drawSystemInit = (canvas: HTMLCanvasElement): DrawSystem => {
  const gl = canvas.getContext("webgl2");
  if (!gl) {
    throw new Error("WebGL2 not supported");
  }

  resizeCanvas(gl.canvas as HTMLCanvasElement);

  gl.enable(gl.DEPTH_TEST);

  const program = programInit(gl);

  return {
    gl,
    program,
    activeCameraId: null,
    lightDirection: vec3Normalize(vec3(1.0, -2.0, -1.0)),
  };
};

export const drawSystemRun = (state: State, _time: number): void => {
  const gl = state.drawSystem.gl,
    canvas = gl.canvas as HTMLCanvasElement,
    program = state.drawSystem.program;

  if (!defined(state.drawSystem.activeCameraId)) {
    return;
  }

  const activeCameraEntity = state.entities.get(state.drawSystem.activeCameraId);
  if (!assert(activeCameraEntity, "Missing active camera") || !assertKind(EntityKind.Camera, activeCameraEntity)) {
    return;
  }

  resizeCanvas(canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  updateCameraProjectionMatrixMut(activeCameraEntity, canvas);

  const worldToView = mat4Inverse(transformMatrix(activeCameraEntity.transform));
  const viewToProjection = perspectiveProjectionMatrix(activeCameraEntity.projection);

  const entities = Array.from(state.entities.values());
  const simpleObjects = entities.filter(ofKindCurr(EntityKind.SimpleObject));

  for (const simpleObject of simpleObjects) {
    programSetAttributePosition(program, simpleObject.mesh.positions);
    programSetAttributeNormal(program, simpleObject.mesh.normals);
    programSetIndices(program, simpleObject.mesh.indices);

    const modelToWorld = transformMatrix(simpleObject.transform);
    const modelToView = mat4Product(worldToView, modelToWorld);
    const modelToProjection = mat4Product(viewToProjection, modelToView);
    const modelToViewInverseTranspose = mat4Transpose(mat4Inverse(modelToView));

    programUse(program);

    programSetUniformModelToProjection(program, modelToProjection);
    programSetUniformModelToViewInverseTranspose(program, modelToViewInverseTranspose);
    programSetUniformLightDirection(program, state.drawSystem.lightDirection);

    gl.drawElements(gl.TRIANGLES, simpleObject.mesh.indices.length, gl.UNSIGNED_SHORT, 0);
  }
};

const resizeCanvas = (canvas: HTMLCanvasElement): void => {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
};

const updateCameraProjectionMatrixMut = (camera: CameraEntity, canvas: HTMLCanvasElement): void => {
  camera.projection = perspectiveProjection(
    camera.projection.nearZ,
    camera.projection.farZ,
    camera.projection.fovY,
    canvas.width / canvas.height,
  );
};

export const initMainCameraMut = (state: State): void => {
  const gl = state.drawSystem.gl;

  const mainCameraEntity = cameraEntity(
    nextId(),
    transform(vec3(-10, -15, 0), vec3(radFromDeg(0), radFromDeg(-10), radFromDeg(0)), vec3(1, 1, 1)),
    perspectiveProjection(0.1, 50000, radFromDeg(90), gl.canvas.width / gl.canvas.height),
  );

  state.drawSystem.activeCameraId = mainCameraEntity.id;
  state.entities.set(mainCameraEntity.id, mainCameraEntity);
};

export const initBasicObjMut = (state: State): void => {
  const basicObjEntity = simpleObjectEntity(
    nextId(),
    transform(vec3(0, 0, -50), vec3(radFromDeg(45), radFromDeg(0), radFromDeg(0)), vec3(2, 2, 2)),
    cubeMesh(10),
  );

  state.entities.set(basicObjEntity.id, basicObjEntity);
};
