import { validTree } from "./graphValidTree";

test("validates tree structure via edge count and connectivity", () => {
  expect(
    validTree(5, [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ])
  ).toBe(true);
  expect(
    validTree(5, [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 3],
      [1, 4],
    ])
  ).toBe(false);
  expect(validTree(1, [])).toBe(true);
  expect(validTree(2, [])).toBe(false);
});
