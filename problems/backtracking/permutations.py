"""
LeetCode 46. Permutations

Return all possible permutations of a list of distinct integers.

Approach: backtracking -- swap each remaining element into the current
position, recurse on the rest, then swap back (undo) before trying the
next candidate. This avoids extra membership-tracking structures.

Time:  O(n * n!)
Space: O(n) recursion depth, O(n!) for the output
"""

from typing import List


def permute(nums: List[int]) -> List[List[int]]:
    result = []
    n = len(nums)

    def backtrack(start):
        if start == n:
            result.append(nums[:])
            return
        for i in range(start, n):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]

    backtrack(0)
    return result


if __name__ == "__main__":
    result = permute([1, 2, 3])
    assert sorted(result) == sorted([
        [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1],
    ])
    assert permute([0]) == [[0]]
    print("All tests passed.")
