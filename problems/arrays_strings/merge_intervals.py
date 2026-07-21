"""
LeetCode 56. Merge Intervals

Given a list of intervals, merge all overlapping intervals.

Example:
    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]

Approach: sort by start; walk left to right, merging into the last interval
in the result whenever the current interval's start is <= its end.

Time:  O(n log n)
Space: O(n)
"""

from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    if not intervals:
        return []
    intervals = sorted(intervals, key=lambda iv: iv[0])
    result = [intervals[0][:]]
    for start, end in intervals[1:]:
        if start <= result[-1][1]:
            result[-1][1] = max(result[-1][1], end)
        else:
            result.append([start, end])
    return result


if __name__ == "__main__":
    assert merge([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]
    assert merge([[1, 4], [4, 5]]) == [[1, 5]]
    assert merge([]) == []
    print("All tests passed.")
