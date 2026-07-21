/**
 * Approach: DFS/backtracking from every cell matching the word's first
 * letter. Mark cells visited on the current path (temporarily overwrite)
 * and restore on backtrack.
 * Time: O(rows * cols * 4^L), L = word length. Space: O(L).
 */

export function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const backtrack = (r: number, c: number, i: number): boolean => {
    if (i === word.length) return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) return false;

    const temp = board[r][c];
    board[r][c] = "#";
    const found =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1);
    board[r][c] = temp;
    return found;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) return true;
    }
  }
  return false;
}
