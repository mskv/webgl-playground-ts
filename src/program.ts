import { Mat4, Vec3, vec3ToArray } from "./math";

const vertexShaderSource = `#version 300 es
uniform mat4 u_modelToProjection;
uniform mat4 u_modelToViewInverseTranspose;

in vec4 in_position;
in vec3 in_normal;

out vec3 v_normal;

void main() {
  gl_Position = u_modelToProjection * in_position;
  v_normal = mat3(u_modelToViewInverseTranspose) * in_normal;
}
`;

const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform vec3 u_lightDirection;

in vec3 v_normal;

out vec4 out_color;

void main() {
  float lightContribution = dot(normalize(v_normal), -1.0 * u_lightDirection);

  out_color = vec4(1.0, 0.0, 0.0, 1.0);
  out_color.rgb *= lightContribution;
}
`;

// Program

export type Program = {
  gl: WebGL2RenderingContext;
  program: WebGLProgram;

  positionBuffer: WebGLBuffer;
  normalBuffer: WebGLBuffer;
  indexBuffer: WebGLBuffer;

  u_modelToProjection: WebGLUniformLocation;
  u_modelToViewInverseTranspose: WebGLUniformLocation;
  u_lightDirection: WebGLUniformLocation;

  in_position: number;
  in_normal: number;
};

export const programInit = (gl: WebGL2RenderingContext): Program => {
  const vertexShader = createWebGLShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createWebGLShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createWebGLProgram(gl, vertexShader, fragmentShader);

  const positionBuffer = gl.createBuffer()!;
  const normalBuffer = gl.createBuffer()!;
  const indexBuffer = gl.createBuffer()!;

  const u_modelToProjection = gl.getUniformLocation(program, "u_modelToProjection")!;
  const u_modelToViewInverseTranspose = gl.getUniformLocation(program, "u_modelToViewInverseTranspose")!;
  const u_lightDirection = gl.getUniformLocation(program, "u_lightDirection")!;

  const in_position = gl.getAttribLocation(program, "in_position");
  const in_normal = gl.getAttribLocation(program, "in_normal");
  gl.enableVertexAttribArray(in_position);
  gl.enableVertexAttribArray(in_normal);

  return {
    gl,
    program,
    positionBuffer,
    normalBuffer,
    indexBuffer,
    u_modelToProjection,
    u_modelToViewInverseTranspose,
    u_lightDirection,
    in_position,
    in_normal,
  };
};

export const programUse = (program: Program): void => {
  program.gl.useProgram(program.program);
};

export const programSetUniformModelToProjection = (program: Program, modelToProjection: Mat4): void => {
  const gl = program.gl,
    u_modelToProjection = program.u_modelToProjection;

  gl.uniformMatrix4fv(u_modelToProjection, false, modelToProjection.elements);
};

export const programSetUniformModelToViewInverseTranspose = (
  program: Program,
  modelToViewInverseTranspose: Mat4,
): void => {
  const gl = program.gl,
    u_modelToViewInverseTranspose = program.u_modelToViewInverseTranspose;

  gl.uniformMatrix4fv(u_modelToViewInverseTranspose, false, modelToViewInverseTranspose.elements);
};

export const programSetUniformLightDirection = (program: Program, lightDirection: Vec3): void => {
  const gl = program.gl,
    u_lightDirection = program.u_lightDirection;

  gl.uniform3fv(u_lightDirection, vec3ToArray(lightDirection));
};

export const programSetAttributePosition = (program: Program, positions: number[]): void => {
  const gl = program.gl,
    positionBuffer = program.positionBuffer,
    in_position = program.in_position;

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(in_position, 3, gl.FLOAT, false, 0, 0);
};

export const programSetAttributeNormal = (program: Program, normals: number[]): void => {
  const gl = program.gl,
    normalBuffer = program.normalBuffer,
    in_normal = program.in_normal;

  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(in_normal, 3, gl.FLOAT, false, 0, 0);
};

export const programSetIndices = (program: Program, indices: number[]): void => {
  const gl = program.gl,
    indexBuffer = program.indexBuffer;

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
};

const createWebGLProgram = (
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

const createWebGLShader = (gl: WebGL2RenderingContext, type: GLenum, source: string): WebGLShader => {
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
