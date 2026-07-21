"""
LeetCode 79. Word Search

Given a 2D grid of letters and a word, determine if the word can be
constructed from letters of sequentially adjacent cells (horizontally or
vertically), using each cell at most once.

Approach: DFS/backtracking from every cell matching the word's first
letter. Mark cells visited on the current path (temporarily overwrite, or
track a visited set) and unmark on backtrack.

Time:  O(rows * cols * 4^L), L = word length
Space: O(L) recursion depth
"""

from typing import List


def exist(board: List[List[str]], word: str) -> bool:
    rows, cols = len(board), len(board[0])

    def backtrack(r, c, i):
        if i == len(word):
            return True
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[i]:
            return False

        temp, board[r][c] = board[r][c], "#"
        found = (
            backtrack(r + 1, c, i + 1)
            or backtrack(r - 1, c, i + 1)
            or backtrack(r, c + 1, i + 1)
            or backtrack(r, c - 1, i + 1)
        )
        board[r][c] = temp
        return found

    for r in range(rows):
        for c in range(cols):
            if backtrack(r, c, 0):
                return True
    return False


if __name__ == "__main__":
    board = [
        list("ABCE"),
        list("SFCS"),
        list("ADEE"),
    ]
    assert exist(board, "ABCCED") is True
    assert exist(board, "SEE") is True
    assert exist(board, "ABCB") is False
    print("All tests passed.")
