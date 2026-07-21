/**
 * Approach: modified binary search. At each step, at least one half is
 * guaranteed to be normally sorted. Determine which half is sorted by
 * comparing nums[lo] and nums[mid], then check whether target falls
 * within that sorted half's range to decide which side to search next.
 * Time: O(log n). Space: O(1).
 */

export function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;

    if (nums[lo] <= nums[mid]) {
      // left half is sorted
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      // right half is sorted
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}
