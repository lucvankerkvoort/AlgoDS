"""
LeetCode 704. Binary Search

Classic binary search on a sorted array: return the index of `target`, or
-1 if not present.

Time:  O(log n)
Space: O(1)
"""

from typing import List


def binary_search(nums: List[int], target: int) -> int:
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


if __name__ == "__main__":
    assert binary_search([-1, 0, 3, 5, 9, 12], 9) == 4
    assert binary_search([-1, 0, 3, 5, 9, 12], 2) == -1
    assert binary_search([], 1) == -1
    assert binary_search([5], 5) == 0
    print("All tests passed.")
