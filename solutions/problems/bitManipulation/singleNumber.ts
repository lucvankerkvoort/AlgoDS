/**
 * Approach: XOR every element together. a ^ a === 0 and a ^ 0 === a, and
 * XOR is commutative/associative, so every paired value cancels out,
 * leaving just the unpaired one. Time: O(n). Space: O(1).
 */

export function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b, 0);
}
