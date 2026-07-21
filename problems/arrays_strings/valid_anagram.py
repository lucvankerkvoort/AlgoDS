"""
LeetCode 242. Valid Anagram

Return True if `t` is an anagram of `s` (same letters, same counts).

Approach: compare character-frequency counts. Equal-length strings are
anagrams iff their Counters match.

Time:  O(n)
Space: O(1) (bounded alphabet)
"""

from collections import Counter


def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    return Counter(s) == Counter(t)


if __name__ == "__main__":
    assert is_anagram("anagram", "nagaram") is True
    assert is_anagram("rat", "car") is False
    assert is_anagram("", "") is True
    print("All tests passed.")
