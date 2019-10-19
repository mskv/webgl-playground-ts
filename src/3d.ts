import { Mat4, mat4, mat4FromEulerRotation, mat4FromScaleVec, mat4FromTranslationVec, mat4Product, Vec3 } from "./math";

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
  constructor(public geometry: number[]) {}
}

export const mesh = (geometry: number[]): Mesh => new Mesh(geometry);
