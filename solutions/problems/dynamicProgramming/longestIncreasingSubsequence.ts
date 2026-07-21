/**
 * Approach: patience-sorting. Maintain `tails`, where tails[k] is the
 * smallest possible tail value of any increasing subsequence of length
 * k+1 found so far. For each number, binary search for its insertion
 * point (leftmost position where tails[i] >= num) and either extend
 * `tails` or replace that entry -- the final length of `tails` is the
 * LIS length. Time: O(n log n). Space: O(n).
 */

export function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const num of nums) {
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < num) lo = mid + 1;
      else hi = mid;
    }
    if (lo === tails.length) tails.push(num);
    else tails[lo] = num;
  }

  return tails.length;
}
