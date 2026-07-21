import { wordBreak } from "./wordBreak";

test("determines whether a string can be segmented into dictionary words", () => {
  expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
});
