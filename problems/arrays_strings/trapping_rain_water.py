"""
LeetCode 42. Trapping Rain Water

Given elevation heights, compute how much water is trapped after raining.

Example:
    [0,1,0,2,1,0,1,3,2,1,2,1] -> 6

Approach: two pointers from both ends, tracking the max height seen so far
from the left and from the right. Water trapped above index i is
min(left_max, right_max) - height[i]; always advance the side with the
smaller max, since that side's water level is already determined.

Time:  O(n)
Space: O(1)
"""

from typing import List


def trap(height: List[int]) -> int:
    if not height:
        return 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    water = 0
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            water += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            water += right_max - height[right]
    return water


if __name__ == "__main__":
    assert trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6
    assert trap([4, 2, 0, 3, 2, 5]) == 9
    assert trap([]) == 0
    print("All tests passed.")
