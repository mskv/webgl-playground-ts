import { formatMultiline } from "./utils";

// Vec4
export class Vec4 {
  constructor(public x: number, public y: number, public z: number, public w: number = 1) {}
}

export const vec4format = (v: Vec4): string =>
  formatMultiline(`
    [ ${v.x},
      ${v.y},
      ${v.z},
      ${v.w} ]
`);
export const vec4fromArray = (arr: number[]): Vec4 => new Vec4(arr[0], arr[1], arr[2], arr[3]);
export const vec4toArray = (v: Vec4): number[] => [v.x, v.y, v.z, v.w];
export const vec4dot = (v1: Vec4, v2: Vec4): number => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
export const vec4transform = (m: Mat4, v: Vec4): Vec4 => {
  const e = m.elements,
    x = v.x,
    y = v.y,
    z = v.z,
    w = v.w;

  return new Vec4(
    e[0] * x + e[4] * y + e[8] * z + e[12] * w,
    e[1] * x + e[5] * y + e[9] * z + e[13] * w,
    e[2] * x + e[6] * y + e[10] * z + e[14] * w,
    e[3] * x + e[7] * y + e[11] * z + e[15] * w,
  );
};

// Mat4
export class Mat4 {
  constructor(public elements: number[]) {}
}

export const mat4format = (m: Mat4): string =>
  formatMultiline(`
    [ ${m.elements[0]}, ${m.elements[4]}, ${m.elements[8]}, ${m.elements[12]},
      ${m.elements[1]}, ${m.elements[5]}, ${m.elements[9]}, ${m.elements[13]},
      ${m.elements[2]}, ${m.elements[6]}, ${m.elements[10]}, ${m.elements[14]},
      ${m.elements[3]}, ${m.elements[7]}, ${m.elements[11]}, ${m.elements[15]} ]
`);
export const mat4product = (m1: Mat4, m2: Mat4): Mat4 => {
  const e1 = m1.elements,
    e2 = m2.elements;
  const resultElements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 4; i++) {
    const ii = i * 4;
    for (let j = 0; j < 4; j++) {
      resultElements[ii + j] =
        e1[j] * e2[ii] + e1[j + 4] * e2[ii + 1] + e1[j + 8] * e2[ii + 2] + e1[j + 12] * e2[ii + 3];
    }
  }

  return new Mat4(resultElements);
};
