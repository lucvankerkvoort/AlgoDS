import { search } from "./searchInRotatedSortedArray";

test("finds target in a rotated sorted array", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  expect(search([1], 0)).toBe(-1);
  expect(search([1], 1)).toBe(0);
});
