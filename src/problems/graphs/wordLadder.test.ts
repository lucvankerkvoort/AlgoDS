import { ladderLength } from "./wordLadder";

test("finds shortest transformation sequence length", () => {
  expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toBe(5);
  expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
  expect(ladderLength("a", "c", ["a", "b", "c"])).toBe(2);
});
