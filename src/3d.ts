import {
  Mat4,
  mat4,
  mat4FromEulerRotation,
  mat4FromScaleVec,
  mat4FromTranslationVec,
  mat4Product,
  Vec3,
  vec3,
  vec3Add,
  vec3Cross,
  vec3Normalize,
  vec3Sub,
} from "./math";

// Transform

export class Transform {
  constructor(public position: Vec3, public rotation: Vec3, public scale: Vec3) {}
}

export const transform = (position: Vec3, rotation: Vec3, scale: Vec3) => new Transform(position, rotation, scale);

export const transformMatrix = (transform: Transform): Mat4 => {
  const translation = mat4FromTranslationVec(transform.position);
  const rotation = mat4FromEulerRotation(transform.rotation);
  const scale = mat4FromScaleVec(transform.scale);

  return mat4Product(translation, mat4Product(rotation, scale));
};

// PerspectiveProjection

export class PerspectiveProjection {
  constructor(public nearZ: number, public farZ: number, public fovY: number, public aspectRatioXY: number) {}
}

export const perspectiveProjection = (nearZ: number, farZ: number, fovY: number, aspectRatioXY: number) =>
  new PerspectiveProjection(nearZ, farZ, fovY, aspectRatioXY);

export const perspectiveProjectionMatrix = (projection: PerspectiveProjection): Mat4 => {
  const nearZ = projection.nearZ,
    farZ = projection.farZ,
    fovY = projection.fovY,
    aspectRatioXY = projection.aspectRatioXY;

  const tanFovYHalfAngle = Math.tan(fovY / 2);

  // (1 / (tanFovYHalfAngle * aspectRatioXY)) 0 0 0
  // 0 (1 / tanFovYHalfAngle) 0 0
  // 0 0 -(farZ / (farZ - nearZ)) -((farZ * nearZ) / (farZ - nearZ))
  // 0 0 -1 0
  return mat4([
    1.0 / (tanFovYHalfAngle * aspectRatioXY),
    0,
    0,
    0,
    0,
    1.0 / tanFovYHalfAngle,
    0,
    0,
    0,
    0,
    -(farZ / (farZ - nearZ)),
    -1,
    0,
    0,
    -((farZ * nearZ) / (farZ - nearZ)),
    0,
  ]);
};

// Mesh

export class Mesh {
  constructor(
    // [p1x, p1y, p1z, p2x, ...]
    public positions: number[],
    // [n1x, n1y, n1z, n2x, ...]
    public normals: number[],
    // [t0v1, t0v2, t0v3, t1v1, ...]
    public indices: number[],
  ) {}
}

export const mesh = (positions: number[], normals: number[], indices: number[]): Mesh =>
  new Mesh(positions, normals, indices);

export const cubeMesh = (sideLength: number): Mesh => {
  const v0 = vec3(0, 0, 0),
    v1 = vec3(sideLength, 0, 0),
    v2 = vec3(0, sideLength, 0),
    v3 = vec3(sideLength, sideLength, 0),
    v4 = vec3(0, 0, sideLength),
    v5 = vec3(sideLength, 0, sideLength),
    v6 = vec3(0, sideLength, sideLength),
    v7 = vec3(sideLength, sideLength, sideLength),
    farN = vec3Normalize(vec3Cross(vec3Sub(v2, v0), vec3Sub(v1, v0))),
    leftN = vec3Normalize(vec3Cross(vec3Sub(v4, v0), vec3Sub(v2, v0))),
    rightN = vec3Normalize(vec3Cross(vec3Sub(v1, v5), vec3Sub(v7, v5))),
    bottomN = vec3Normalize(vec3Cross(vec3Sub(v1, v0), vec3Sub(v4, v0))),
    topN = vec3Normalize(vec3Cross(vec3Sub(v6, v2), vec3Sub(v3, v2))),
    nearN = vec3Normalize(vec3Cross(vec3Sub(v5, v4), vec3Sub(v6, v4))),
    n0 = vec3Normalize(vec3Add(vec3Add(farN, leftN), bottomN)),
    n1 = vec3Normalize(vec3Add(vec3Add(farN, rightN), bottomN)),
    n2 = vec3Normalize(vec3Add(vec3Add(farN, leftN), topN)),
    n3 = vec3Normalize(vec3Add(vec3Add(farN, rightN), topN)),
    n4 = vec3Normalize(vec3Add(vec3Add(nearN, leftN), bottomN)),
    n5 = vec3Normalize(vec3Add(vec3Add(nearN, rightN), bottomN)),
    n6 = vec3Normalize(vec3Add(vec3Add(nearN, leftN), topN)),
    n7 = vec3Normalize(vec3Add(vec3Add(nearN, rightN), topN));

  // prettier-ignore
  const positions = [
    v0.x, v0.y, v0.z,
    v1.x, v1.y, v1.z,
    v2.x, v2.y, v2.z,
    v3.x, v3.y, v3.z,
    v4.x, v4.y, v4.z,
    v5.x, v5.y, v5.z,
    v6.x, v6.y, v6.z,
    v7.x, v7.y, v7.z,
  ];

  // prettier-ignore
  const normals = [
    n0.x, n0.y, n0.z,
    n1.x, n1.y, n1.z,
    n2.x, n2.y, n2.z,
    n3.x, n3.y, n3.z,
    n4.x, n4.y, n4.z,
    n5.x, n5.y, n5.z,
    n6.x, n6.y, n6.z,
    n7.x, n7.y, n7.z,
  ];

  // prettier-ignore
  const indices = [
    // far
    0, 1, 2,
    1, 2, 3,
    // left
    0, 2, 4,
    2, 4, 6,
    // right
    1, 3, 5,
    3, 5, 7,
    // bottom
    0, 1, 4,
    1, 4, 5,
    // top
    2, 3, 6,
    3, 6, 7,
    // near
    4, 5, 6,
    5, 6, 7,
  ];

  return mesh(positions, normals, indices);
};
