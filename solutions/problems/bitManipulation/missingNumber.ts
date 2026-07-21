/**
 * Approach: XOR-ing 0..n with every array element leaves only the
 * missing number, since every present value cancels with its counterpart
 * in the index sequence. (A sum-based approach works too, but XOR avoids
 * overflow concerns in other languages.) Time: O(n). Space: O(1).
 */

export function missingNumber(nums: number[]): number {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }
  return result;
}
