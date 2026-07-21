/**
 * Approach: two pointers from both ends, tracking the max height seen so
 * far from the left and from the right. Water trapped above index i is
 * min(leftMax, rightMax) - height[i]; always advance the side with the
 * smaller max, since that side's water level is already determined.
 * Time: O(n). Space: O(1).
 */

export function trap(height: number[]): number {
  if (height.length === 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left += 1;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right -= 1;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }
  return water;
}
