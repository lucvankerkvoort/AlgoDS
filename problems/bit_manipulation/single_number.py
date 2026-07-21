"""
LeetCode 136. Single Number

Every element appears twice except one; find that single element in
linear time and constant extra space.

Approach: XOR every element together. a ^ a == 0 and a ^ 0 == a, and XOR
is commutative/associative, so every paired value cancels out, leaving
just the unpaired one.

Time:  O(n)
Space: O(1)
"""

from functools import reduce
from typing import List


def single_number(nums: List[int]) -> int:
    return reduce(lambda a, b: a ^ b, nums, 0)


if __name__ == "__main__":
    assert single_number([2, 2, 1]) == 1
    assert single_number([4, 1, 2, 1, 2]) == 4
    assert single_number([1]) == 1
    print("All tests passed.")
