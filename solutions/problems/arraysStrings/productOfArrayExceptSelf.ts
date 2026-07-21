/**
 * Approach: prefix products from the left, then fold in suffix products
 * from the right in a second pass, reusing the output array as the
 * prefix array. Time: O(n). Space: O(1) extra.
 */

export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  // Normalize -0 to 0 (e.g. from 1 * 0 * -3): both compare equal with ===
  // but a strict deep-equality check (like Jest's toEqual) distinguishes them.
  return answer.map((x) => x + 0);
}
