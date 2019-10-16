import { mesh, perspectiveProjectionMatrix } from "./3d";
import {
  mat4FromEulerRotation,
  mat4FromScaleVec,
  mat4FromTranslationVec,
  mat4Inverse,
  mat4Product,
  radFromDeg,
  vec3,
} from "./math";

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

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
};

export const main = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Missing canvas element");
  }

  const gl = canvas.getContext("webgl2");
  if (!gl) {
    throw new Error("WebGL2 not supported");
  }

  // Setup
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = createProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(program);

  const uProjectionLocation = gl.getUniformLocation(program, "u_projection");

  const inPositionLocation = gl.getAttribLocation(program, "in_position");
  const positionBuffer = gl.createBuffer();

  // Resize and clear
  resizeCanvas(canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Fill position buffer
  // prettier-ignore
  const objMesh = mesh([
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
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objMesh.geometry), gl.STATIC_DRAW);

  // Pass position buffer as position input
  gl.enableVertexAttribArray(inPositionLocation);
  gl.vertexAttribPointer(inPositionLocation, 3, gl.FLOAT, false, 0, 0);

  // Fill projection matrix
  const objPos = mat4FromTranslationVec(vec3(0, 0, -50));
  const objRot = mat4FromEulerRotation(vec3(radFromDeg(0), radFromDeg(0), radFromDeg(0)));
  const objScale = mat4FromScaleVec(vec3(0.2, 0.2, 0.2));
  const objTransformation = mat4Product(objPos, mat4Product(objRot, objScale));
  const cameraPos = mat4FromTranslationVec(vec3(0, 0, 0));
  const cameraRot = mat4FromEulerRotation(vec3(radFromDeg(0), radFromDeg(0), radFromDeg(0)));
  const cameraTransformation = mat4Inverse(mat4Product(cameraPos, cameraRot));
  const cameraSpace = mat4Product(cameraTransformation, objTransformation);
  const projection = perspectiveProjectionMatrix(0.1, 500000000, radFromDeg(90), gl.canvas.width / gl.canvas.height);
  const objProjected = mat4Product(projection, cameraSpace);
  gl.uniformMatrix4fv(uProjectionLocation, false, objProjected.elements);

  // Draw
  gl.drawArrays(gl.TRIANGLES, 0, 16 * 6);
};
