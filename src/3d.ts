import { Mat4, mat4 } from "./math";

export const perspectiveProjectionMatrix = (nearZ: number, farZ: number, fovY: number, aspectRatioXY: number): Mat4 => {
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

export class Mesh {
  constructor(public geometry: number[]) {}
}

export const mesh = (geometry: number[]): Mesh => new Mesh(geometry);
