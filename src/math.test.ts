import {
  Mat4,
  mat4Format,
  mat4FromEulerRotation,
  mat4FromScaleVec,
  mat4FromTranslationVec,
  mat4Product,
  Vec3,
  Vec4,
  vec4Format,
  vec4Transform,
} from "./math";

test("mat4Product", () => {
  // 5, 7, 9, 10,
  // 2, 3, 3, 8,
  // 8, 10, 2, 3,
  // 3, 3, 4, 8
  const m1 = new Mat4([5, 2, 8, 3, 7, 3, 10, 3, 9, 3, 2, 4, 10, 8, 3, 8]);
  // 3, 10, 12, 18,
  // 12, 1, 4, 9,
  // 9, 10, 12, 2,
  // 3, 12, 4, 10
  const m2 = new Mat4([3, 12, 9, 3, 10, 1, 10, 12, 12, 4, 12, 4, 18, 9, 2, 10]);
  // 210, 267, 236, 271,
  // 93, 149, 104, 149,
  // 171, 146, 172, 268,
  // 105, 169, 128, 169
  const expected = new Mat4([210, 93, 171, 105, 267, 149, 146, 169, 236, 104, 172, 128, 271, 149, 268, 169]);

  const product = mat4Product(m1, m2);

  expect(product).toEqual(expected);
});

test("vec4Trasform", () => {
  // 5, 7, 9, 10,
  // 2, 3, 3, 8,
  // 8, 10, 2, 3,
  // 3, 3, 4, 8
  const m = new Mat4([5, 2, 8, 3, 7, 3, 10, 3, 9, 3, 2, 4, 10, 8, 3, 8]);
  // 3,
  // 12,
  // 9,
  // 3
  const v = new Vec4(3, 12, 9, 3);
  // 210,
  // 93,
  // 171,
  // 105
  const expected = new Vec4(210, 93, 171, 105);

  const transformed = vec4Transform(m, v);

  expect(transformed).toEqual(expected);
});

test("mat4FromEulerRotation", () => {
  const euler = new Vec3(1.57, 5.12, 9.57);
  const expected = new Mat4([
    -0.39224,
    0.90829,
    -0.14544,
    0,
    0.05737,
    -0.13364,
    -0.98937,
    0,
    -0.91807,
    -0.39642,
    0.00032,
    0,
    0,
    0,
    0,
    1,
  ]);
  const matrix = mat4FromEulerRotation(euler);

  expect(mat4Format(matrix)).toEqual(mat4Format(expected));
});

test("transformation", () => {
  const scale = mat4FromScaleVec(new Vec3(3, 2, 1));
  const rotate = mat4FromEulerRotation(new Vec3(Math.PI / 2, 0, (Math.PI * 2) / 3));
  const translate = mat4FromTranslationVec(new Vec3(1, 2, 3));
  const transformation = mat4Product(translate, mat4Product(rotate, scale));

  const vec = new Vec4(1, 1, 1, 1);
  const expected = new Vec4(-2.23205, 1, 4.59808);
  const transformed = vec4Transform(transformation, vec);

  expect(vec4Format(transformed)).toEqual(vec4Format(expected));
});
