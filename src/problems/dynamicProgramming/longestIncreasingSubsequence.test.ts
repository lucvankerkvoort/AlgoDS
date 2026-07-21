import { lengthOfLIS } from "./longestIncreasingSubsequence";

test("finds length of the longest increasing subsequence", () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  expect(lengthOfLIS([7, 7, 7, 7])).toBe(1);
});
