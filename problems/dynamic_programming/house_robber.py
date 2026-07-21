"""
LeetCode 198. House Robber

Houses are in a row, each with some money. You can't rob two adjacent
houses. Maximize the total amount robbed.

Approach: at each house, decide to skip it (carry forward the best from
before) or rob it (its value + best up to two houses back). Track just the
last two running bests (rolling DP) instead of a full array.

Time:  O(n)
Space: O(1)
"""

from typing import List


def rob(nums: List[int]) -> int:
    prev2, prev1 = 0, 0  # best up to i-2, best up to i-1
    for num in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + num)
    return prev1


if __name__ == "__main__":
    assert rob([1, 2, 3, 1]) == 4
    assert rob([2, 7, 9, 3, 1]) == 12
    assert rob([]) == 0
    assert rob([5]) == 5
    print("All tests passed.")
