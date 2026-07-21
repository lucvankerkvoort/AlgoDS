/**
 * Approach (Kadane's): at each index, decide whether to extend the
 * previous subarray or start fresh at the current element, keeping a
 * running best. Time: O(n). Space: O(1).
 */

export function maxSubArray(nums: number[]): number {
  let best = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}
