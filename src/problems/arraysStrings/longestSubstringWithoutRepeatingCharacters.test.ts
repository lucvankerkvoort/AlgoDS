import { lengthOfLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters";

test("finds the longest run without repeats", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("")).toBe(0);
});
