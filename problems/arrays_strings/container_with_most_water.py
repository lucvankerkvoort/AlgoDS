"""
LeetCode 11. Container With Most Water

`height[i]` is the height of a vertical line at position i. Choose two
lines that, together with the x-axis, form a container holding the most
water. Return that max area.

Example:
    [1,8,6,2,5,4,8,3,7] -> 49

Approach: two pointers starting at both ends. The area is limited by the
shorter line, so always move the pointer at the shorter line inward --
moving the taller one can never improve the result.

Time:  O(n)
Space: O(1)
"""

from typing import List


def max_area(height: List[int]) -> int:
    left, right = 0, len(height) - 1
    best = 0
    while left < right:
        width = right - left
        best = max(best, width * min(height[left], height[right]))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return best


if __name__ == "__main__":
    assert max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert max_area([1, 1]) == 1
    print("All tests passed.")
