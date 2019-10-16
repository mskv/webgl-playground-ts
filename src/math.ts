import { formatMultiline } from "./utils";

// Vec3
export class Vec3 {
  constructor(public x: number, public y: number, public z: number) {}
}

export const vec3 = (x: number, y: number, z: number): Vec3 => new Vec3(x, y, z);
export const vec3Format = (v: Vec3): string =>
  formatMultiline(`
    [ ${v.x.toFixed(5)},
      ${v.y.toFixed(5)},
      ${v.z.toFixed(5)} ]
`);
export const vec3FromArray = (arr: number[]): Vec3 => vec3(arr[0], arr[1], arr[2]);
export const vec3ToArray = (v: Vec3): number[] => [v.x, v.y, v.z];
export const vec3Dot = (v1: Vec3, v2: Vec3): number => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
export const vec3Transform = (m: Mat4, v: Vec3): Vec3 => {
  const e = m.elements,
    x = v.x,
    y = v.y,
    z = v.z;

  const result = vec3(e[0] * x + e[4] * y + e[8] * z, e[1] * x + e[5] * y + e[9] * z, e[2] * x + e[6] * y + e[10] * z);
  const w = e[3] * x + e[7] * y + e[11] * z + e[15];

  if (w === 1) {
    return result;
  } else {
    result.x = result.x / w;
    result.y = result.y / w;
    result.z = result.z / w;
    return result;
  }
};

// Vec4
export class Vec4 {
  constructor(public x: number, public y: number, public z: number, public w: number = 1) {}
}

export const vec4 = (x: number, y: number, z: number, w: number = 1): Vec4 => new Vec4(x, y, z, w);
export const vec4Format = (v: Vec4): string =>
  formatMultiline(`
    [ ${v.x.toFixed(5)},
      ${v.y.toFixed(5)},
      ${v.z.toFixed(5)},
      ${v.w.toFixed(5)} ]
`);
export const vec4FromArray = (arr: number[]): Vec4 => vec4(arr[0], arr[1], arr[2], arr[3]);
export const vec4ToArray = (v: Vec4): number[] => [v.x, v.y, v.z, v.w];
export const vec4Dot = (v1: Vec4, v2: Vec4): number => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
export const vec4Transform = (m: Mat4, v: Vec4): Vec4 => {
  const e = m.elements,
    x = v.x,
    y = v.y,
    z = v.z,
    w = v.w;

  const result = vec4(
    e[0] * x + e[4] * y + e[8] * z + e[12] * w,
    e[1] * x + e[5] * y + e[9] * z + e[13] * w,
    e[2] * x + e[6] * y + e[10] * z + e[14] * w,
    e[3] * x + e[7] * y + e[11] * z + e[15] * w,
  );

  if (result.w === 1) {
    return result;
  } else {
    result.x = result.x / result.w;
    result.y = result.y / result.w;
    result.z = result.z / result.w;
    result.w = 1;
    return result;
  }
};

// Mat4
export class Mat4 {
  constructor(public elements: number[]) {}
}

export const mat4 = (elements: number[]): Mat4 => new Mat4(elements);
export const mat4Format = (m: Mat4): string => {
  const elsTruncated = m.elements.map((element) => element.toFixed(5));

  return formatMultiline(`
    [ ${elsTruncated[0]}, ${elsTruncated[4]}, ${elsTruncated[8]}, ${elsTruncated[12]},
      ${elsTruncated[1]}, ${elsTruncated[5]}, ${elsTruncated[9]}, ${elsTruncated[13]},
      ${elsTruncated[2]}, ${elsTruncated[6]}, ${elsTruncated[10]}, ${elsTruncated[14]},
      ${elsTruncated[3]}, ${elsTruncated[7]}, ${elsTruncated[11]}, ${elsTruncated[15]} ]
  `);
};
export const mat4Product = (m1: Mat4, m2: Mat4): Mat4 => {
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

  return mat4(resultElements);
};
export const mat4Transpose = (m: Mat4): Mat4 => {
  const e = m.elements;

  return mat4([e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]]);
};

export const mat4FromEulerRotation = (euler: Vec3): Mat4 => {
  const x = euler.x,
    y = euler.y,
    z = euler.z,
    sinX = Math.sin(x),
    cosX = Math.cos(x),
    sinY = Math.sin(y),
    cosY = Math.cos(y),
    sinZ = Math.sin(z),
    cosZ = Math.cos(z);

  // prettier-ignore
  return mat4([
    cosY * cosZ,
    cosX * sinZ + cosZ * sinX * sinY,
    sinX * sinZ - cosX * cosZ * sinY,
    0,
    -cosY * sinZ,
    cosX * cosZ - sinX * sinY * sinZ,
    cosZ * sinX + cosX * sinY * sinZ,
    0,
    sinY,
    -cosY * sinX,
    cosX * cosY,
    0,
    0,
    0,
    0,
    1,
  ]);
};

export const mat4FromTranslationVec = (translation: Vec3): Mat4 => {
  const x = translation.x,
    y = translation.y,
    z = translation.z;

  return mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
};

export const mat4FromScaleVec = (scale: Vec3): Mat4 => {
  const x = scale.x,
    y = scale.y,
    z = scale.z;

  return mat4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
};

export const mat4Determinant = (m: Mat4): number => {
  // https://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/fourD/index.htm
  const e = m.elements;

  // prettier-ignore
  return e[12] * e[9] * e[6] * e[3] - e[8] * e[13] * e[6] * e[3] -
    e[12] * e[5] * e[10] * e[3] + e[4] * e[13] * e[10] * e[3] +
    e[8] * e[5] * e[14] * e[3] - e[4] * e[9] * e[14] * e[3] -
    e[12] * e[9] * e[2] * e[7] + e[8] * e[13] * e[2] * e[7] +
    e[12] * e[1] * e[10] * e[7] - e[0] * e[13] * e[10] * e[7] -
    e[8] * e[1] * e[14] * e[7] + e[0] * e[9] * e[14] * e[7] +
    e[12] * e[5] * e[2] * e[11] - e[4] * e[13] * e[2] * e[11] -
    e[12] * e[1] * e[6] * e[11] + e[0] * e[13] * e[6] * e[11] +
    e[4] * e[1] * e[14] * e[11] - e[0] * e[5] * e[14] * e[11] -
    e[8] * e[5] * e[2] * e[15] + e[4] * e[9] * e[2] * e[15] +
    e[8] * e[1] * e[6] * e[15] - e[0] * e[9] * e[6] * e[15] -
    e[4] * e[1] * e[10] * e[15] + e[0] * e[5] * e[10] * e[15];
};

export const mat4Inverse = (m: Mat4): Mat4 => {
  // http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
  const e = m.elements,
    det = mat4Determinant(m),
    detInv = 1 / det;

  // tslint:disable:max-line-length
  // prettier-ignore
  return mat4([
    e[9] * e[14] * e[7] - e[13] * e[10] * e[7] + e[13] * e[6] * e[11] - e[5] * e[14] * e[11] - e[9] * e[6] * e[15] + e[5] * e[10] * e[15] * detInv,
    e[13] * e[10] * e[3] - e[9] * e[14] * e[3] - e[13] * e[2] * e[11] + e[1] * e[14] * e[11] + e[9] * e[2] * e[15] - e[1] * e[10] * e[15] * detInv,
    e[5] * e[14] * e[3] - e[13] * e[6] * e[3] + e[13] * e[2] * e[7] - e[1] * e[14] * e[7] - e[5] * e[2] * e[15] + e[1] * e[6] * e[15] * detInv,
    e[9] * e[6] * e[3] - e[5] * e[10] * e[3] - e[9] * e[2] * e[7] + e[1] * e[10] * e[7] + e[5] * e[2] * e[11] - e[1] * e[6] * e[11] * detInv,
    e[12] * e[10] * e[7] - e[8] * e[14] * e[7] - e[12] * e[6] * e[11] + e[4] * e[14] * e[11] + e[8] * e[6] * e[15] - e[4] * e[10] * e[15] * detInv,
    e[8] * e[14] * e[3] - e[12] * e[10] * e[3] + e[12] * e[2] * e[11] - e[0] * e[14] * e[11] - e[8] * e[2] * e[15] + e[0] * e[10] * e[15] * detInv,
    e[12] * e[6] * e[3] - e[4] * e[14] * e[3] - e[12] * e[2] * e[7] + e[0] * e[14] * e[7] + e[4] * e[2] * e[15] - e[0] * e[6] * e[15] * detInv,
    e[4] * e[10] * e[3] - e[8] * e[6] * e[3] + e[8] * e[2] * e[7] - e[0] * e[10] * e[7] - e[4] * e[2] * e[11] + e[0] * e[6] * e[11] * detInv,
    e[8] * e[13] * e[7] - e[12] * e[9] * e[7] + e[12] * e[5] * e[11] - e[4] * e[13] * e[11] - e[8] * e[5] * e[15] + e[4] * e[9] * e[15] * detInv,
    e[12] * e[9] * e[3] - e[8] * e[13] * e[3] - e[12] * e[1] * e[11] + e[0] * e[13] * e[11] + e[8] * e[1] * e[15] - e[0] * e[9] * e[15] * detInv,
    e[4] * e[13] * e[3] - e[12] * e[5] * e[3] + e[12] * e[1] * e[7] - e[0] * e[13] * e[7] - e[4] * e[1] * e[15] + e[0] * e[5] * e[15] * detInv,
    e[8] * e[5] * e[3] - e[4] * e[9] * e[3] - e[8] * e[1] * e[7] + e[0] * e[9] * e[7] + e[4] * e[1] * e[11] - e[0] * e[5] * e[11] * detInv,
    e[12] * e[9] * e[6] - e[8] * e[13] * e[6] - e[12] * e[5] * e[10] + e[4] * e[13] * e[10] + e[8] * e[5] * e[14] - e[4] * e[9] * e[14] * detInv,
    e[8] * e[13] * e[2] - e[12] * e[9] * e[2] + e[12] * e[1] * e[10] - e[0] * e[13] * e[10] - e[8] * e[1] * e[14] + e[0] * e[9] * e[14] * detInv,
    e[12] * e[5] * e[2] - e[4] * e[13] * e[2] - e[12] * e[1] * e[6] + e[0] * e[13] * e[6] + e[4] * e[1] * e[14] - e[0] * e[5] * e[14] * detInv,
    e[4] * e[9] * e[2] - e[8] * e[5] * e[2] + e[8] * e[1] * e[6] - e[0] * e[9] * e[6] - e[4] * e[1] * e[10] + e[0] * e[5] * e[10] * detInv,
  ]);
  // tslint:enable:max-line-length
};

// Misc
export const radFromDeg = (deg: number): number => (deg / 180) * Math.PI;
