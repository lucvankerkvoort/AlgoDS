/**
 * Approach: 2D DP. dp[i][j] = LCS length of text1[:i] and text2[:j]. If
 * the last characters match, extend the diagonal (dp[i-1][j-1] + 1);
 * otherwise take the best of dropping a character from either string.
 * Time: O(m * n). Space: O(m * n).
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
