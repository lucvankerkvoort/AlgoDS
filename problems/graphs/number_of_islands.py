"""
LeetCode 200. Number of Islands

Given a 2D grid of '1' (land) and '0' (water), count the number of islands
(connected groups of land, 4-directionally).

Approach: scan every cell; whenever an unvisited land cell is found, flood
fill it (DFS/BFS), sinking the whole island by marking cells visited, and
count that as one island.

Time:  O(rows * cols)
Space: O(rows * cols) worst case for the recursion stack
"""

from typing import List


def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    visited = [[False] * cols for _ in range(rows)]

    def sink(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if visited[r][c] or grid[r][c] == "0":
            return
        visited[r][c] = True
        sink(r + 1, c)
        sink(r - 1, c)
        sink(r, c + 1)
        sink(r, c - 1)

    islands = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1" and not visited[r][c]:
                islands += 1
                sink(r, c)
    return islands


if __name__ == "__main__":
    grid1 = [
        list("11110"),
        list("11010"),
        list("11000"),
        list("00000"),
    ]
    assert num_islands(grid1) == 1

    grid2 = [
        list("11000"),
        list("11000"),
        list("00100"),
        list("00011"),
    ]
    assert num_islands(grid2) == 3
    print("All tests passed.")
