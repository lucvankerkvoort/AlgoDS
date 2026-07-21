/**
 * Approach: ways(n) = ways(n-1) + ways(n-2), since the last move was
 * either a 1-step or a 2-step. Iterate bottom-up keeping only the last
 * two values. Time: O(n). Space: O(1).
 */

export function climbStairs(n: number): number {
  if (n <= 2) return n;
  let prev2 = 1;
  let prev1 = 2;
  for (let i = 3; i <= n; i++) {
    [prev2, prev1] = [prev1, prev1 + prev2];
  }
  return prev1;
}
