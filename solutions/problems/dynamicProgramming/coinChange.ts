/**
 * Approach: bottom-up DP. dp[a] = fewest coins to make amount a. Base
 * case dp[0] = 0. For each amount, try every coin and take the best
 * (1 + dp[a - coin]) over all coins that fit.
 * Time: O(amount * coins.length). Space: O(amount).
 */

export function coinChange(coins: number[], amount: number): number {
  const INF = Infinity;
  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a) dp[a] = Math.min(dp[a], dp[a - coin] + 1);
    }
  }

  return dp[amount] === INF ? -1 : dp[amount];
}
