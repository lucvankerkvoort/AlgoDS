import { missingNumber } from "./missingNumber";

test("finds the missing number in [0, n]", () => {
  expect(missingNumber([3, 0, 1])).toBe(2);
  expect(missingNumber([0, 1])).toBe(2);
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});
