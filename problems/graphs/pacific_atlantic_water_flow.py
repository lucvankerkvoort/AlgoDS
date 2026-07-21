"""
LeetCode 417. Pacific Atlantic Water Flow

Given a grid of heights, water can flow from a cell to a 4-directional
neighbor with height <= current height. The Pacific touches the top/left
edges, the Atlantic the bottom/right edges. Return all cells from which
water can reach both oceans.

Approach: reverse the flow. Run DFS/BFS from every Pacific-adjacent border
cell going "uphill" (neighbor height >= current), marking reachability;
do the same from every Atlantic-adjacent border cell. The answer is the
intersection of the two reachable sets.

Time:  O(rows * cols)
Space: O(rows * cols)
"""

from typing import List


def pacific_atlantic(heights: List[List[int]]) -> List[List[int]]:
    if not heights or not heights[0]:
        return []
    rows, cols = len(heights), len(heights[0])

    def bfs(starts):
        visited = set(starts)
        stack = list(starts)
        while stack:
            r, c = stack.pop()
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited:
                    if heights[nr][nc] >= heights[r][c]:
                        visited.add((nr, nc))
                        stack.append((nr, nc))
        return visited

    pacific_starts = [(0, c) for c in range(cols)] + [(r, 0) for r in range(rows)]
    atlantic_starts = [(rows - 1, c) for c in range(cols)] + [(r, cols - 1) for r in range(rows)]

    pacific_reach = bfs(pacific_starts)
    atlantic_reach = bfs(atlantic_starts)

    return [list(cell) for cell in (pacific_reach & atlantic_reach)]


if __name__ == "__main__":
    heights = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ]
    result = {tuple(cell) for cell in pacific_atlantic(heights)}
    expected = {(0, 4), (1, 3), (1, 4), (2, 2), (3, 0), (3, 1), (4, 0)}
    assert result == expected
    print("All tests passed.")
