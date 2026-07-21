"""
LeetCode 33. Search in Rotated Sorted Array

A sorted array has been rotated at an unknown pivot. Find the index of
`target` in O(log n), or return -1.

Example:
    [4,5,6,7,0,1,2], target = 0 -> 4

Approach: modified binary search. At each step, at least one half
(lo..mid or mid..hi) is guaranteed to be normally sorted. Determine which
half is sorted by comparing nums[lo] and nums[mid], then check whether
target falls within that sorted half's range to decide which side to
search next.

Time:  O(log n)
Space: O(1)
"""

from typing import List


def search(nums: List[int], target: int) -> int:
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:  # left half is sorted
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:  # right half is sorted
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1


if __name__ == "__main__":
    assert search([4, 5, 6, 7, 0, 1, 2], 0) == 4
    assert search([4, 5, 6, 7, 0, 1, 2], 3) == -1
    assert search([1], 0) == -1
    assert search([1], 1) == 0
    print("All tests passed.")
