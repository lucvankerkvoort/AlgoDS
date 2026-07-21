/**
 * Approach: sort the array, fix the smallest element of each triplet,
 * then two-pointer the remainder to find pairs summing to its negation.
 * Skip duplicate values at every position to keep results unique.
 * Time: O(n^2). Space: O(1) extra (ignoring sort's space).
 */

export function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = sorted.length;
  const result: number[][] = [];

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] > 0) break;

    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const total = sorted[i] + sorted[left] + sorted[right];
      if (total < 0) {
        left += 1;
      } else if (total > 0) {
        right -= 1;
      } else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left += 1;
        right -= 1;
        while (left < right && sorted[left] === sorted[left - 1]) left += 1;
        while (left < right && sorted[right] === sorted[right + 1]) right -= 1;
      }
    }
  }

  return result;
}
