"""
LeetCode 152. Maximum Product Subarray

Find the contiguous subarray with the largest product and return that
product.

Approach: like Kadane's for sums, but a negative number can flip the
smallest product into the largest. Track both a running max and running
min ending at each index; swap them before updating whenever the current
number is negative.

Time:  O(n)
Space: O(1)
"""

from typing import List


def max_product(nums: List[int]) -> int:
    best = cur_max = cur_min = nums[0]
    for num in nums[1:]:
        if num < 0:
            cur_max, cur_min = cur_min, cur_max
        cur_max = max(num, cur_max * num)
        cur_min = min(num, cur_min * num)
        best = max(best, cur_max)
    return best


if __name__ == "__main__":
    assert max_product([2, 3, -2, 4]) == 6
    assert max_product([-2, 0, -1]) == 0
    assert max_product([-2, 3, -4]) == 24
    print("All tests passed.")
