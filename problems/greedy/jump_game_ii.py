"""
LeetCode 45. Jump Game II

`nums[i]` is the max jump length from index i. Return the minimum number
of jumps to reach the last index (guaranteed reachable).

Approach: greedy BFS-by-levels. Track the current jump's reachable
boundary and the farthest reachable with one more jump. When we reach the
current boundary, we're forced to take another jump, so increment the
count and advance the boundary to the farthest seen.

Time:  O(n)
Space: O(1)
"""

from typing import List


def jump(nums: List[int]) -> int:
    jumps = 0
    current_end = 0
    farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest
    return jumps


if __name__ == "__main__":
    assert jump([2, 3, 1, 1, 4]) == 2
    assert jump([2, 3, 0, 1, 4]) == 2
    assert jump([0]) == 0
    print("All tests passed.")
