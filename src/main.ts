const vertexShaderSource = `#version 300 es
in vec4 in_position;

void main() {
  gl_Position = in_position;
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

  const inPositionLocation = gl.getAttribLocation(program, "in_position");
  const positionBuffer = gl.createBuffer();

  // Resize and clear
  resizeCanvas(canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Fill position buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [0, 0, 0, 0.5, 0.7, 0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Pass position buffer as position input
  gl.enableVertexAttribArray(inPositionLocation);
  gl.vertexAttribPointer(inPositionLocation, 2, gl.FLOAT, false, 0, 0);

  // Draw
  gl.drawArrays(gl.TRIANGLES, 0, 3);
};
