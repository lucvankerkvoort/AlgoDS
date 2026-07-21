/**
 * Approach: DP building on smaller results. `i >> 1` drops the lowest
 * bit, and `i & 1` tells us whether that dropped bit was 1, so
 * bits(i) = bits(i >> 1) + (i & 1). Time: O(n). Space: O(n).
 */

export function countBits(n: number): number[] {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}
