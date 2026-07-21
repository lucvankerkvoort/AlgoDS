"""
LeetCode 55. Jump Game

`nums[i]` is the max jump length from index i. Starting at index 0,
determine if you can reach the last index.

Approach: greedy (equivalent to a simplified DP) -- track the furthest
index reachable so far. Scan left to right; if the current index is
already beyond the furthest reachable point, it's unreachable, so bail
out. Otherwise extend the reachable frontier.

Time:  O(n)
Space: O(1)
"""

from typing import List


def can_jump(nums: List[int]) -> bool:
    farthest = 0
    for i, num in enumerate(nums):
        if i > farthest:
            return False
        farthest = max(farthest, i + num)
    return True


if __name__ == "__main__":
    assert can_jump([2, 3, 1, 1, 4]) is True
    assert can_jump([3, 2, 1, 0, 4]) is False
    assert can_jump([0]) is True
    print("All tests passed.")
