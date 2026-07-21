/**
 * Approach: DP where dp[r][c] = dp[r-1][c] + dp[r][c-1] (paths arrive
 * from above or from the left). The first row/column each have exactly
 * one path. Rolled into a single row of length n to save space.
 * Time: O(m * n). Space: O(n).
 */

export function uniquePaths(m: number, n: number): number {
  const row = new Array(n).fill(1);
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      row[c] += row[c - 1];
    }
  }
  return row[n - 1];
}
