"""
LeetCode 51. N-Queens

Place n queens on an n x n chessboard so that no two attack each other,
and return all distinct solutions as board layouts.

Approach: backtracking row by row, placing one queen per row. Track
occupied columns and both diagonals (r - c and r + c are each constant
along a diagonal) in sets for O(1) conflict checks.

Time:  O(n!) worst case
Space: O(n) recursion depth and tracking sets
"""

from typing import List


def solve_n_queens(n: int) -> List[List[str]]:
    result = []
    cols = set()
    diag1 = set()  # r - c
    diag2 = set()  # r + c
    placement = [-1] * n  # placement[row] = col

    def backtrack(row):
        if row == n:
            board = []
            for r in range(n):
                line = ["."] * n
                line[placement[r]] = "Q"
                board.append("".join(line))
            result.append(board)
            return
        for col in range(n):
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
            cols.add(col)
            diag1.add(row - col)
            diag2.add(row + col)
            placement[row] = col

            backtrack(row + 1)

            cols.remove(col)
            diag1.remove(row - col)
            diag2.remove(row + col)

    backtrack(0)
    return result


if __name__ == "__main__":
    assert len(solve_n_queens(4)) == 2
    assert len(solve_n_queens(1)) == 1
    assert len(solve_n_queens(8)) == 92
    print("All tests passed.")
