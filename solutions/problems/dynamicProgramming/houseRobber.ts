/**
 * Approach: rolling DP. prev1 = best up to the previous house, prev2 =
 * best up to two houses back. At each house, take the better of skipping
 * it (prev1) or robbing it (its value + prev2). Time: O(n). Space: O(1).
 */

export function rob(nums: number[]): number {
  let prev2 = 0;
  let prev1 = 0;
  for (const num of nums) {
    [prev2, prev1] = [prev1, Math.max(prev1, prev2 + num)];
  }
  return prev1;
}
