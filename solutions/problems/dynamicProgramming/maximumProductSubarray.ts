/**
 * Approach: like Kadane's for sums, but a negative number can flip the
 * smallest product into the largest. Track both a running max and
 * running min ending at each index; swap them before updating whenever
 * the current number is negative. Time: O(n). Space: O(1).
 */

export function maxProduct(nums: number[]): number {
  let best = nums[0];
  let curMax = nums[0];
  let curMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) [curMax, curMin] = [curMin, curMax];
    curMax = Math.max(num, curMax * num);
    curMin = Math.min(num, curMin * num);
    best = Math.max(best, curMax);
  }
  return best;
}
