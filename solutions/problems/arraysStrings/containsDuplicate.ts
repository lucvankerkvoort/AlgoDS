/** Approach: a Set naturally deduplicates; compare its size to the array's. */

export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
