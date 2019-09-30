import { Mat4, mat4product, Vec4, vec4transform } from "./math";

test("mat4product", () => {
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

  const product = mat4product(m1, m2);

  expect(product).toEqual(expected);
});

test("vec4trasform", () => {
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

  const transformed = vec4transform(m, v);

  expect(transformed).toEqual(expected);
});
