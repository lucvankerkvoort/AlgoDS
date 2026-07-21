"""
LeetCode 217. Contains Duplicate

Return True if any value appears at least twice in the array.

Approach: a set naturally deduplicates; compare its size to the array's.

Time:  O(n)
Space: O(n)
"""

from typing import List


def contains_duplicate(nums: List[int]) -> bool:
    return len(set(nums)) != len(nums)


if __name__ == "__main__":
    assert contains_duplicate([1, 2, 3, 1]) is True
    assert contains_duplicate([1, 2, 3, 4]) is False
    assert contains_duplicate([]) is False
    print("All tests passed.")
