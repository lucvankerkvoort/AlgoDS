"""
LeetCode 1. Two Sum

Given an array of integers `nums` and an integer `target`, return indices
of the two numbers such that they add up to `target`. Assume exactly one
solution, and you may not use the same element twice.

Example:
    nums = [2, 7, 11, 15], target = 9 -> [0, 1]  (2 + 7 == 9)

Approach: one pass with a hash map from value -> index. For each number,
check whether its complement (target - num) has already been seen.

Time:  O(n)
Space: O(n)
"""

from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    raise ValueError("no two sum solution")


if __name__ == "__main__":
    assert sorted(two_sum([2, 7, 11, 15], 9)) == [0, 1]
    assert sorted(two_sum([3, 2, 4], 6)) == [1, 2]
    assert sorted(two_sum([3, 3], 6)) == [0, 1]
    print("All tests passed.")
