import { bisect } from "./utils";

const compareNumbers = (n1: number, n2: number) => (n1 > n2 ? 1 : n1 < n2 ? -1 : 0);

describe("bisect", () => {
  test("when no items", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [] as any;
    expect(bisect(arr, compareFn)).toEqual(null);
  });

  test("when one searched item", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 6 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });

  test("when one not searched item", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 5 }] as any;
    expect(bisect(arr, compareFn)).toEqual(null);
  });

  test("when two not searched items", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 5 }, { id: 7 }] as any;
    expect(bisect(arr, compareFn)).toEqual(null);
  });

  test("when two items first fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 6 }, { id: 7 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });

  test("when two items last fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 5 }, { id: 6 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });

  test("when many items none fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 1 }, { id: 2 }, { id: 5 }, { id: 7 }, { id: 9 }] as any;
    expect(bisect(arr, compareFn)).toEqual(null);
  });

  test("when many items first fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 6 }, { id: 7 }, { id: 9 }, { id: 11 }, { id: 12 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });

  test("when many items last fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: -1 }, { id: 1 }, { id: 2 }, { id: 5 }, { id: 6 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });

  test("when many items mid fits", () => {
    const compareFn = (item: any) => compareNumbers(item.id, 6);
    const arr = [{ id: 1 }, { id: 2 }, { id: 6 }, { id: 7 }, { id: 9 }] as any;
    expect(bisect(arr, compareFn)).toEqual({ id: 6 });
  });
});
