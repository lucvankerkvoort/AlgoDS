/**
 * Approach: greedy -- track the furthest index reachable so far. Scan
 * left to right; if the current index is already beyond the furthest
 * reachable point, it's unreachable, so bail out. Otherwise extend the
 * reachable frontier. Time: O(n). Space: O(1).
 */

export function canJump(nums: number[]): boolean {
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
}
