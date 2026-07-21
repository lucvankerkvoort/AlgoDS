/**
 * Approach: backtracking -- at each index, either include or exclude the
 * current number, recursing on the rest. Equivalently: record every
 * subset reachable by choosing a starting index and extending it with
 * every later element. Time: O(n * 2^n). Space: O(n) recursion depth.
 */

export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const backtrack = (start: number) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(0);
  return result;
}
