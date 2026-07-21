import { exist } from "./wordSearch";

test("finds a word constructed from adjacent cells", () => {
  const board = ["ABCE".split(""), "SFCS".split(""), "ADEE".split("")];
  expect(exist(board, "ABCCED")).toBe(true);
  expect(exist(board, "SEE")).toBe(true);
  expect(exist(board, "ABCB")).toBe(false);
});
