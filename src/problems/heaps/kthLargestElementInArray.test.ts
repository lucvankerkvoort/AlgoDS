import { findKthLargest } from "./kthLargestElementInArray";

test("finds the kth largest element", () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  expect(findKthLargest([1], 1)).toBe(1);
});
