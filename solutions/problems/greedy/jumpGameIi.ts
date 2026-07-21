/**
 * Approach: greedy BFS-by-levels. Track the current jump's reachable
 * boundary and the farthest reachable with one more jump. When we reach
 * the current boundary, we're forced to take another jump, so increment
 * the count and advance the boundary to the farthest seen.
 * Time: O(n). Space: O(1).
 */

export function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps += 1;
      currentEnd = farthest;
    }
  }
  return jumps;
}
