"""
LeetCode 53. Maximum Subarray

Find the contiguous subarray with the largest sum and return that sum
(Kadane's algorithm).

Example:
    [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> 6  ([4, -1, 2, 1])

Approach: at each index, decide whether to extend the previous subarray or
start fresh at the current element, keeping a running best.

Time:  O(n)
Space: O(1)
"""

from typing import List


def max_subarray(nums: List[int]) -> int:
    best = nums[0]
    current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        best = max(best, current)
    return best


if __name__ == "__main__":
    assert max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
    assert max_subarray([1]) == 1
    assert max_subarray([5, 4, -1, 7, 8]) == 23
    assert max_subarray([-1]) == -1
    print("All tests passed.")
