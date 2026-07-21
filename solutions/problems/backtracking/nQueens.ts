/**
 * Approach: backtracking row by row, placing one queen per row. Track
 * occupied columns and both diagonals (r - c and r + c are each constant
 * along a diagonal) in sets for O(1) conflict checks.
 * Time: O(n!) worst case. Space: O(n).
 */

export function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const cols = new Set<number>();
  const diag1 = new Set<number>(); // r - c
  const diag2 = new Set<number>(); // r + c
  const placement = new Array(n).fill(-1); // placement[row] = col

  const backtrack = (row: number) => {
    if (row === n) {
      const board: string[] = [];
      for (let r = 0; r < n; r++) {
        const line = new Array(n).fill(".");
        line[placement[r]] = "Q";
        board.push(line.join(""));
      }
      result.push(board);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      placement[row] = col;

      backtrack(row + 1);

      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };

  backtrack(0);
  return result;
}
