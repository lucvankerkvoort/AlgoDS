/**
 * Approach: binary search comparing the middle element to the rightmost
 * element. If nums[mid] > nums[hi], the minimum must be to the right of
 * mid; otherwise the minimum is at mid or to its left.
 * Time: O(log n). Space: O(1).
 */

export function findMin(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[hi]) lo = mid + 1;
    else hi = mid;
  }
  return nums[lo];
}
