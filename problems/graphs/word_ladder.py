"""
LeetCode 127. Word Ladder

Given a `begin_word`, `end_word`, and a word list, find the length of the
shortest transformation sequence from begin_word to end_word, changing
one letter at a time, where every intermediate word must be in the word
list. Return 0 if no such sequence exists.

Approach: BFS over the implicit graph where an edge connects two words
that differ by exactly one letter. BFS guarantees the first time we reach
end_word is via a shortest path. To generate neighbors efficiently we try
swapping every position to every letter a-z rather than comparing against
every other word.

Time:  O(n * L * 26), n = number of words, L = word length
Space: O(n * L)
"""

from collections import deque
from typing import List


def ladder_length(begin_word: str, end_word: str, word_list: List[str]) -> int:
    words = set(word_list)
    if end_word not in words:
        return 0

    queue = deque([(begin_word, 1)])
    visited = {begin_word}

    while queue:
        word, steps = queue.popleft()
        if word == end_word:
            return steps
        for i in range(len(word)):
            for ch in "abcdefghijklmnopqrstuvwxyz":
                if ch == word[i]:
                    continue
                candidate = word[:i] + ch + word[i + 1:]
                if candidate in words and candidate not in visited:
                    visited.add(candidate)
                    queue.append((candidate, steps + 1))

    return 0


if __name__ == "__main__":
    assert ladder_length("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) == 5
    assert ladder_length("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) == 0
    assert ladder_length("a", "c", ["a", "b", "c"]) == 2
    print("All tests passed.")
