import { longestCommonSubsequence } from "./longestCommonSubsequence";

test("finds length of the longest common subsequence", () => {
  expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
  expect(longestCommonSubsequence("abc", "abc")).toBe(3);
  expect(longestCommonSubsequence("abc", "def")).toBe(0);
});
