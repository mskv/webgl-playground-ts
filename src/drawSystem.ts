import { mesh, perspectiveProjection, perspectiveProjectionMatrix, transform, transformMatrix } from "./3d";
import { EntityId, nextId } from "./entity";
import { mat4Inverse, mat4Product, radFromDeg, vec3 } from "./math";
import { State } from "./state";
import { storageGetExpect, storageSetMut, storageVals } from "./storage";

const vertexShaderSource = `#version 300 es
uniform mat4 u_projection;

in vec4 in_position;

void main() {
  gl_Position = u_projection * in_position;
}
`;

const fragmentShaderSource = `#version 300 es
precision mediump float;

out vec4 out_color;

void main() {
  out_color = vec4(1, 0, 0, 1);
}
`;

export type DrawSystem = {
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;
  program: WebGLProgram;
  activeCameraId: EntityId | null;
};

export const drawSystemInit = (canvas: HTMLCanvasElement): DrawSystem => {
  const gl = canvas.getContext("webgl2");
  if (!gl) {
    throw new Error("WebGL2 not supported");
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createProgram(gl, vertexShader, fragmentShader);

  return {
    canvas,
    gl,
    program,
    activeCameraId: null,
  };
};

export const drawSystemRun = (state: State): void => {
  const gl = state.drawSystem.gl,
    canvas = state.drawSystem.canvas,
    program = state.drawSystem.program;

  resizeCanvas(canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);
  const positionBuffer = gl.createBuffer();
  const uProjectionLocation = gl.getUniformLocation(program, "u_projection");
  const inPositionLocation = gl.getAttribLocation(program, "in_position");

  if (state.drawSystem.activeCameraId === null) {
    return;
  }

  const activeCameraTransform = storageGetExpect(state.store.transforms, state.drawSystem.activeCameraId);
  const worldToCameraSpace = mat4Inverse(transformMatrix(activeCameraTransform));

  const activeCameraProjection = storageGetExpect(state.store.perspectiveProjections, state.drawSystem.activeCameraId);
  const worldToProjectionSpace = mat4Product(perspectiveProjectionMatrix(activeCameraProjection), worldToCameraSpace);

  for (const [entryId, mesh] of storageVals(state.store.meshes)) {
    const meshTransform = storageGetExpect(state.store.transforms, entryId);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.geometry), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(inPositionLocation);
    gl.vertexAttribPointer(inPositionLocation, 3, gl.FLOAT, false, 0, 0);

    const meshToWorldSpace = transformMatrix(meshTransform);
    const meshToProjectionSpace = mat4Product(worldToProjectionSpace, meshToWorldSpace);
    gl.uniformMatrix4fv(uProjectionLocation, false, meshToProjectionSpace.elements);

    gl.drawArrays(gl.TRIANGLES, 0, 16 * 6);
  }
};

export const initMainCameraMut = (state: State): void => {
  const gl = state.drawSystem.gl;

  const mainCameraId = nextId();
  const mainCameraProjection = perspectiveProjection(0.1, 50000, radFromDeg(90), gl.canvas.width / gl.canvas.height);
  const mainCameraTransform = transform(
    vec3(0, 0, 0),
    vec3(radFromDeg(0), radFromDeg(0), radFromDeg(0)),
    vec3(1, 1, 1),
  );

  state.drawSystem.activeCameraId = mainCameraId;
  storageSetMut(state.store.perspectiveProjections, mainCameraId, mainCameraProjection);
  storageSetMut(state.store.transforms, mainCameraId, mainCameraTransform);
};

const createProgram = (
  gl: WebGL2RenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader,
): WebGLProgram => {
  const program = gl.createProgram();
  if (!program) {
    throw new Error("Unable to create program");
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (linkStatus) {
    return program;
  } else {
    // tslint:disable-next-line:no-console
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    throw new Error("Unable to link program");
  }
};

const createShader = (gl: WebGL2RenderingContext, type: GLenum, source: string): WebGLShader => {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error("Unable to create shader");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const compileStatus = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (compileStatus) {
    return shader;
  } else {
    // tslint:disable-next-line:no-console
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    throw new Error("Unable to compile shader");
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

export const initBasicObjMut = (state: State): void => {
  const basicObjId = nextId();
  // prettier-ignore
  const basicObjMesh = mesh([
    // left column front
    0, 0, 0,
    30, 0, 0,
    0, 150, 0,
    0, 150, 0,
    30, 0, 0,
    30, 150, 0,

    // top rung front
    30, 0, 0,
    100, 0, 0,
    30, 30, 0,
    30, 30, 0,
    100, 0, 0,
    100, 30, 0,

    // middle rung front
    30, 60, 0,
    67, 60, 0,
    30, 90, 0,
    30, 90, 0,
    67, 60, 0,
    67, 90, 0,

    // left column back
    0, 0, 30,
    30, 0, 30,
    0, 150, 30,
    0, 150, 30,
    30, 0, 30,
    30, 150, 30,

    // top rung back
    30, 0, 30,
    100, 0, 30,
    30, 30, 30,
    30, 30, 30,
    100, 0, 30,
    100, 30, 30,

    // middle rung back
    30, 60, 30,
    67, 60, 30,
    30, 90, 30,
    30, 90, 30,
    67, 60, 30,
    67, 90, 30,

    // top
    0, 0, 0,
    100, 0, 0,
    100, 0, 30,
    0, 0, 0,
    100, 0, 30,
    0, 0, 30,

    // top rung right
    100, 0, 0,
    100, 30, 0,
    100, 30, 30,
    100, 0, 0,
    100, 30, 30,
    100, 0, 30,

    // under top rung
    30, 30, 0,
    30, 30, 30,
    100, 30, 30,
    30, 30, 0,
    100, 30, 30,
    100, 30, 0,

    // between top rung and middle
    30, 30, 0,
    30, 30, 30,
    30, 60, 30,
    30, 30, 0,
    30, 60, 30,
    30, 60, 0,

    // top of middle rung
    30, 60, 0,
    30, 60, 30,
    67, 60, 30,
    30, 60, 0,
    67, 60, 30,
    67, 60, 0,

    // right of middle rung
    67, 60, 0,
    67, 60, 30,
    67, 90, 30,
    67, 60, 0,
    67, 90, 30,
    67, 90, 0,

    // bottom of middle rung.
    30, 90, 0,
    30, 90, 30,
    67, 90, 30,
    30, 90, 0,
    67, 90, 30,
    67, 90, 0,

    // right of bottom
    30, 90, 0,
    30, 90, 30,
    30, 150, 30,
    30, 90, 0,
    30, 150, 30,
    30, 150, 0,

    // bottom
    0, 150, 0,
    0, 150, 30,
    30, 150, 30,
    0, 150, 0,
    30, 150, 30,
    30, 150, 0,

    // left side
    0, 0, 0,
    0, 0, 30,
    0, 150, 30,
    0, 0, 0,
    0, 150, 30,
    0, 150, 0,
  ]);
  const basicObjTransform = transform(
    vec3(0, 0, -50),
    vec3(radFromDeg(0), radFromDeg(0), radFromDeg(0)),
    vec3(0.2, 0.2, 0.2),
  );
  storageSetMut(state.store.meshes, basicObjId, basicObjMesh);
  storageSetMut(state.store.transforms, basicObjId, basicObjTransform);
};
