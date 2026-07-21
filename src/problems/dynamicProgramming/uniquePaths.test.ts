import { uniquePaths } from "./uniquePaths";

test("counts distinct down/right paths through a grid", () => {
  expect(uniquePaths(3, 7)).toBe(28);
  expect(uniquePaths(3, 2)).toBe(3);
  expect(uniquePaths(1, 1)).toBe(1);
});
