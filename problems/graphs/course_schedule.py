"""
LeetCode 207. Course Schedule

Given `numCourses` and prerequisite pairs [a, b] (must take b before a),
determine if it's possible to finish all courses -- i.e. whether the
prerequisite graph is a DAG (no cycles).

Approach: Kahn's algorithm (BFS topological sort). Compute in-degrees,
start a queue with all zero-in-degree nodes, and repeatedly remove them
while decrementing their neighbors' in-degrees. If every node gets
processed, there's no cycle.

Time:  O(V + E)
Space: O(V + E)
"""

from collections import deque
from typing import List


def can_finish(num_courses: int, prerequisites: List[List[int]]) -> bool:
    graph = [[] for _ in range(num_courses)]
    in_degree = [0] * num_courses
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        in_degree[course] += 1

    queue = deque(c for c in range(num_courses) if in_degree[c] == 0)
    visited = 0
    while queue:
        node = queue.popleft()
        visited += 1
        for nxt in graph[node]:
            in_degree[nxt] -= 1
            if in_degree[nxt] == 0:
                queue.append(nxt)

    return visited == num_courses


if __name__ == "__main__":
    assert can_finish(2, [[1, 0]]) is True
    assert can_finish(2, [[1, 0], [0, 1]]) is False
    assert can_finish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]) is True
    print("All tests passed.")
