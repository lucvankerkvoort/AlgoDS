/**
 * Approach: two pointers starting at both ends. The area is limited by
 * the shorter line, so always move the pointer at the shorter line
 * inward -- moving the taller one can never improve the result.
 * Time: O(n). Space: O(1).
 */

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;
  while (left < right) {
    const width = right - left;
    best = Math.max(best, width * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left += 1;
    else right -= 1;
  }
  return best;
}
