import { numIslands } from "./numberOfIslands";

test("counts connected land masses", () => {
  const grid1 = [
    "11110".split(""),
    "11010".split(""),
    "11000".split(""),
    "00000".split(""),
  ];
  expect(numIslands(grid1)).toBe(1);

  const grid2 = [
    "11000".split(""),
    "11000".split(""),
    "00100".split(""),
    "00011".split(""),
  ];
  expect(numIslands(grid2)).toBe(3);
});
