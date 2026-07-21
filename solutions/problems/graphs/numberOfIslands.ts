/**
 * Approach: scan every cell; whenever an unvisited land cell is found,
 * flood fill it (DFS), sinking the whole island by marking cells
 * visited, and count that as one island.
 * Time: O(rows * cols). Space: O(rows * cols) worst case for recursion.
 */

export function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

  const sink = (r: number, c: number) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (visited[r][c] || grid[r][c] === "0") return;
    visited[r][c] = true;
    sink(r + 1, c);
    sink(r - 1, c);
    sink(r, c + 1);
    sink(r, c - 1);
  };

  let islands = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visited[r][c]) {
        islands += 1;
        sink(r, c);
      }
    }
  }
  return islands;
}
