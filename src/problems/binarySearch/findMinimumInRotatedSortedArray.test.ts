import { findMin } from "./findMinimumInRotatedSortedArray";

test("finds the minimum in a rotated sorted array", () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  expect(findMin([11, 13, 15, 17])).toBe(11);
  expect(findMin([1])).toBe(1);
});
