import { isAnagram } from "./validAnagram";

test("checks whether two strings are anagrams", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
  expect(isAnagram("", "")).toBe(true);
});
