/**
 * Approach: backtracking -- swap each remaining element into the current
 * position, recurse on the rest, then swap back before trying the next
 * candidate. Avoids extra membership-tracking structures.
 * Time: O(n * n!). Space: O(n) recursion depth.
 */

export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  const arr = [...nums];

  const backtrack = (start: number) => {
    if (start === n) {
      result.push([...arr]);
      return;
    }
    for (let i = start; i < n; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  };

  backtrack(0);
  return result;
}
