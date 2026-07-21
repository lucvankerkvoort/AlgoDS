"""
LeetCode 139. Word Break

Given a string `s` and a dictionary of words, determine if `s` can be
segmented into a space-separated sequence of dictionary words.

Approach: DP over string prefixes. dp[i] = True iff s[:i] can be segmented.
dp[0] = True (empty prefix). For each end index i, check every split point
j < i: if dp[j] is True and s[j:i] is a dictionary word, then dp[i] is
True.

Time:  O(n^2) (n^3 if substring hashing isn't O(1), but Python string
       slicing + set lookup makes this effectively O(n^2 * avg_word_len))
Space: O(n)
"""

from typing import List


def word_break(s: str, word_dict: List[str]) -> bool:
    words = set(word_dict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[n]


if __name__ == "__main__":
    assert word_break("leetcode", ["leet", "code"]) is True
    assert word_break("applepenapple", ["apple", "pen"]) is True
    assert word_break("catsandog", ["cats", "dog", "sand", "and", "cat"]) is False
    print("All tests passed.")
