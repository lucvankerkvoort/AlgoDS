import { binarySearch } from "./binarySearch";

test("finds a target in a sorted array", () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  expect(binarySearch([], 1)).toBe(-1);
  expect(binarySearch([5], 5)).toBe(0);
});
