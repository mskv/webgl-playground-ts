import {
  mat4,
  mat4Format,
  mat4FromEulerRotation,
  mat4FromScaleVec,
  mat4FromTranslationVec,
  mat4Product,
  quat,
  quatProduct,
  radFromDeg,
  vec3,
  vec4,
  vec4Format,
  vec4Transform,
} from "./math";

test("mat4Product", () => {
  // 5, 7, 9, 10,
  // 2, 3, 3, 8,
  // 8, 10, 2, 3,
  // 3, 3, 4, 8
  const m1 = mat4([5, 2, 8, 3, 7, 3, 10, 3, 9, 3, 2, 4, 10, 8, 3, 8]);
  // 3, 10, 12, 18,
  // 12, 1, 4, 9,
  // 9, 10, 12, 2,
  // 3, 12, 4, 10
  const m2 = mat4([3, 12, 9, 3, 10, 1, 10, 12, 12, 4, 12, 4, 18, 9, 2, 10]);
  // 210, 267, 236, 271,
  // 93, 149, 104, 149,
  // 171, 146, 172, 268,
  // 105, 169, 128, 169
  const expected = mat4([210, 93, 171, 105, 267, 149, 146, 169, 236, 104, 172, 128, 271, 149, 268, 169]);

  const product = mat4Product(m1, m2);

  expect(product).toEqual(expected);
});

test("vec4Trasform", () => {
  // 5, 7, 9, 10,
  // 2, 3, 3, 8,
  // 8, 10, 2, 3,
  // 0, 0, 0, 1
  const m = mat4([5, 2, 8, 0, 7, 3, 10, 0, 9, 3, 2, 0, 10, 8, 3, 1]);
  // 3,
  // 12,
  // 9,
  // 1
  const v = vec4(3, 12, 9, 1);
  // 210,
  // 93,
  // 171,
  // 105
  const expected = vec4(190, 77, 165, 1);

  const transformed = vec4Transform(m, v);

  expect(transformed).toEqual(expected);
});

test("mat4FromEulerRotation", () => {
  const euler = vec3(1.57, 5.12, 9.57);
  const expected = mat4([
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
  const scale = mat4FromScaleVec(vec3(3, 2, 1));
  const rotate = mat4FromEulerRotation(vec3(Math.PI / 2, 0, (Math.PI * 2) / 3));
  const translate = mat4FromTranslationVec(vec3(1, 2, 3));
  const transformation = mat4Product(translate, mat4Product(rotate, scale));

  const vec = vec4(1, 1, 1, 1);
  const expected = vec4(-2.23205, 1, 4.59808);
  const transformed = vec4Transform(transformation, vec);

  expect(vec4Format(transformed)).toEqual(vec4Format(expected));
});

test("quatProduct", () => {
  const expected = quat(vec3(1, 1, 1), radFromDeg(120));
  const q1 = quat(vec3(1, 0, 0), radFromDeg(90));
  const q2 = quat(vec3(0, 1, 0), radFromDeg(90));
  const prod = quatProduct(q1, q2);
  expect(vec4Format(prod)).toEqual(vec4Format(expected));
});
