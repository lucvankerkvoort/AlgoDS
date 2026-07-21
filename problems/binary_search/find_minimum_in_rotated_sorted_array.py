"""
LeetCode 153. Find Minimum in Rotated Sorted Array

A sorted array (distinct values) has been rotated at an unknown pivot.
Find the minimum element in O(log n).

Approach: binary search comparing the middle element to the rightmost
element. If nums[mid] > nums[hi], the minimum must be to the right of mid
(the rotation point is in [mid+1, hi]); otherwise the minimum is at mid or
to its left.

Time:  O(log n)
Space: O(1)
"""

from typing import List


def find_min(nums: List[int]) -> int:
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        else:
            hi = mid
    return nums[lo]


if __name__ == "__main__":
    assert find_min([3, 4, 5, 1, 2]) == 1
    assert find_min([4, 5, 6, 7, 0, 1, 2]) == 0
    assert find_min([11, 13, 15, 17]) == 11
    assert find_min([1]) == 1
    print("All tests passed.")
