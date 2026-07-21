"""
LeetCode 621. Task Scheduler

Given tasks (letters) and a cooldown `n` between two same-type tasks,
return the minimum number of time units (including idle slots) to finish
all tasks.

Example:
    tasks = ["A","A","A","B","B","B"], n = 2 -> 8
    (A B idle A B idle A B)

Approach: the most frequent task dictates the schedule's shape. If
`max_freq` is the highest count and `max_count` is how many tasks share
it, we need at least (max_freq - 1) full cooldown "chunks" of size (n+1),
plus one slot per task tied for most frequent at the very end. That lower
bound can never be beaten, and it's always achievable by round-robining
the remaining tasks into the idle slots, so the answer is
max(len(tasks), (max_freq - 1) * (n + 1) + max_count).

Time:  O(n_tasks) for counting
Space: O(1) (bounded alphabet)
"""

from collections import Counter
from typing import List


def least_interval(tasks: List[str], n: int) -> int:
    counts = Counter(tasks)
    max_freq = max(counts.values())
    max_count = sum(1 for c in counts.values() if c == max_freq)
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)


if __name__ == "__main__":
    assert least_interval(["A", "A", "A", "B", "B", "B"], 2) == 8
    assert least_interval(["A", "A", "A", "B", "B", "B"], 0) == 6
    assert least_interval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2) == 16
    print("All tests passed.")
