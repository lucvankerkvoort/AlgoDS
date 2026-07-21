"""
LeetCode 39. Combination Sum

Given distinct candidates and a target, return all unique combinations
where the chosen numbers sum to target. The same number may be reused
unlimited times.

Approach: backtracking over sorted candidates. At each step, either reuse
the same index (to allow repeats) or move forward; prune as soon as the
running sum exceeds target, and stop exploring once candidates are too
large (since they're sorted).

Time:  O(n^(target / min_candidate)) worst case (exponential, bounded by target)
Space: O(target / min_candidate) recursion depth
"""

from typing import List


def combination_sum(candidates: List[int], target: int) -> List[List[int]]:
    candidates.sort()
    result = []
    path = []

    def backtrack(start, remaining):
        if remaining == 0:
            result.append(path[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                break
            path.append(candidates[i])
            backtrack(i, remaining - candidates[i])  # same index => reuse allowed
            path.pop()

    backtrack(0, target)
    return result


if __name__ == "__main__":
    result = combination_sum([2, 3, 6, 7], 7)
    assert sorted(map(tuple, result)) == sorted(map(tuple, [[2, 2, 3], [7]]))

    result2 = combination_sum([2, 3, 5], 8)
    assert sorted(map(tuple, result2)) == sorted(map(tuple, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]))
    print("All tests passed.")
