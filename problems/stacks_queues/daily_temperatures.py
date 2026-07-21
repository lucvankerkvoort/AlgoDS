"""
LeetCode 739. Daily Temperatures

For each day, find how many days you'd have to wait for a warmer
temperature. If none exists, put 0.

Example:
    [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]

Approach: monotonic decreasing stack of indices. When the current
temperature is higher than the temperature at the index on top of the
stack, that day's "wait" is resolved -- pop it and record the distance.

Time:  O(n), each index is pushed and popped at most once
Space: O(n)
"""

from typing import List


def daily_temperatures(temperatures: List[int]) -> List[int]:
    answer = [0] * len(temperatures)
    stack = []  # indices with decreasing temperatures
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            prev = stack.pop()
            answer[prev] = i - prev
        stack.append(i)
    return answer


if __name__ == "__main__":
    assert daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]) == [1, 1, 4, 2, 1, 1, 0, 0]
    assert daily_temperatures([30, 40, 50, 60]) == [1, 1, 1, 0]
    assert daily_temperatures([30, 60, 90]) == [1, 1, 0]
    print("All tests passed.")
