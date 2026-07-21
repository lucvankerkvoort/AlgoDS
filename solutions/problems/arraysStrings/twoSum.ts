/**
 * Approach: one pass with a hash map from value -> index. For each number,
 * check whether its complement (target - num) has already been seen.
 * Time: O(n). Space: O(n).
 */

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement)!, i];
    seen.set(nums[i], i);
  }
  throw new Error("no two sum solution");
}
