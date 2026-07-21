/**
 * Approach: track the minimum price seen so far while scanning left to
 * right; at each day, the best possible profit is price - minSoFar.
 * Time: O(n). Space: O(1).
 */

export function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let best = 0;
  for (let i = 1; i < prices.length; i++) {
    best = Math.max(best, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return best;
}
