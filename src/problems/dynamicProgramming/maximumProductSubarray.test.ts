import { maxProduct } from "./maximumProductSubarray";

test("finds max product of a contiguous subarray", () => {
  expect(maxProduct([2, 3, -2, 4])).toBe(6);
  expect(maxProduct([-2, 0, -1])).toBe(0);
  expect(maxProduct([-2, 3, -4])).toBe(24);
});
