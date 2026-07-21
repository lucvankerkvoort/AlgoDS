import { minDistance } from "./editDistance";

test("computes Levenshtein distance", () => {
  expect(minDistance("horse", "ros")).toBe(3);
  expect(minDistance("intention", "execution")).toBe(5);
  expect(minDistance("", "")).toBe(0);
  expect(minDistance("abc", "")).toBe(3);
});
