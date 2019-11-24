import { EntityId, EntityKind } from "./entity";
import {
  Mat4,
  mat4,
  mat4FromEulerRotation,
  mat4FromScaleVec,
  mat4FromTranslationVec,
  mat4Product,
  Vec3,
  vec3,
} from "./math";

// CameraEntity

export class CameraEntity {
  public readonly kind = EntityKind.Camera;
  constructor(public id: EntityId, public transform: Transform, public projection: PerspectiveProjection) {}
}

export const cameraEntity = (id: EntityId, transform: Transform, projection: PerspectiveProjection) =>
  new CameraEntity(id, transform, projection);

// SimpleObjectEntity

export class SimpleObjectEntity {
  public readonly kind = EntityKind.SimpleObject;
  constructor(public id: EntityId, public transform: Transform, public mesh: Mesh) {}
}

export const simpleObjectEntity = (id: EntityId, transform: Transform, mesh: Mesh) =>
  new SimpleObjectEntity(id, transform, mesh);

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
    // [v1x, v1y, v1z, v2x, ...]
    public vertices: number[],
    // [t0v1, t0v2, t0v3, t1v1, ...]
    public indices: number[],
  ) {}
}

export const mesh = (vertices: number[], indices: number[]): Mesh => new Mesh(vertices, indices);

export const cubeMesh = (sideLength: number): Mesh => {
  const v0 = vec3(0, 0, 0),
    v1 = vec3(sideLength, 0, 0),
    v2 = vec3(0, sideLength, 0),
    v3 = vec3(sideLength, sideLength, 0),
    v4 = vec3(0, 0, sideLength),
    v5 = vec3(sideLength, 0, sideLength),
    v6 = vec3(0, sideLength, sideLength),
    v7 = vec3(sideLength, sideLength, sideLength);

  // prettier-ignore
  const vertices = [
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

  return mesh(vertices, indices);
};
