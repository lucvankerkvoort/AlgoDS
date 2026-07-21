"""
LeetCode 62. Unique Paths

A robot starts at the top-left of an m x n grid and can only move down or
right. Count the distinct paths to the bottom-right corner.

Approach: DP where dp[r][c] = dp[r-1][c] + dp[r][c-1] (paths arrive from
above or from the left). The first row and first column each have exactly
one path. Rolled into a single row of length n to save space.

Time:  O(m * n)
Space: O(n)
"""


def unique_paths(m: int, n: int) -> int:
    row = [1] * n
    for _ in range(1, m):
        for c in range(1, n):
            row[c] += row[c - 1]
    return row[-1]


if __name__ == "__main__":
    assert unique_paths(3, 7) == 28
    assert unique_paths(3, 2) == 3
    assert unique_paths(1, 1) == 1
    print("All tests passed.")
