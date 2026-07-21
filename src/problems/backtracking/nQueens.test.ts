import { solveNQueens } from "./nQueens";

test("counts distinct N-Queens solutions", () => {
  expect(solveNQueens(4).length).toBe(2);
  expect(solveNQueens(1).length).toBe(1);
  expect(solveNQueens(8).length).toBe(92);
});
