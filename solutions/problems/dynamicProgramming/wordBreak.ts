/**
 * Approach: DP over string prefixes. dp[i] = true iff s.slice(0, i) can
 * be segmented. dp[0] = true (empty prefix). For each end index i, check
 * every split point j < i: if dp[j] is true and s.slice(j, i) is a
 * dictionary word, then dp[i] is true.
 * Time: O(n^2 * avg word length). Space: O(n).
 */

export function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
