"""
LeetCode 78. Subsets

Return all possible subsets (the power set) of a set of distinct integers.

Example:
    [1,2,3] -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] (any order)

Approach: backtracking -- at each index, either include or exclude the
current number, recursing on the rest. Equivalently: build every subset by
choosing a starting index and extending it with every later element.

Time:  O(n * 2^n) to build and copy all subsets
Space: O(n) recursion depth, O(2^n) for the output
"""

from typing import List


def subsets(nums: List[int]) -> List[List[int]]:
    result = []
    path = []

    def backtrack(start):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1)
            path.pop()

    backtrack(0)
    return result


if __name__ == "__main__":
    result = subsets([1, 2, 3])
    expected = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
    assert sorted(result) == expected
    assert subsets([]) == [[]]
    print("All tests passed.")
