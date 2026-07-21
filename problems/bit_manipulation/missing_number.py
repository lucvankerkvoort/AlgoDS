"""
LeetCode 268. Missing Number

Given an array containing n distinct numbers from [0, n], find the one
missing number.

Approach: the XOR of 0..n XORed with every array element leaves only the
missing number, since every present value cancels with its counterpart
in the index sequence. (A sum-based approach, expected_sum - actual_sum,
works too but risks overflow in other languages; XOR avoids that.)

Time:  O(n)
Space: O(1)
"""

from typing import List


def missing_number(nums: List[int]) -> int:
    result = len(nums)
    for i, num in enumerate(nums):
        result ^= i ^ num
    return result


if __name__ == "__main__":
    assert missing_number([3, 0, 1]) == 2
    assert missing_number([0, 1]) == 2
    assert missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8
    print("All tests passed.")
