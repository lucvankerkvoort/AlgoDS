"""
LeetCode 3. Longest Substring Without Repeating Characters

Return the length of the longest substring without repeating characters.

Example:
    "abcabcbb" -> 3  ("abc")

Approach: sliding window with a hash map of char -> last seen index. Expand
the right edge; whenever a repeat is seen inside the current window, jump
the left edge past its previous occurrence.

Time:  O(n)
Space: O(min(n, alphabet size))
"""


def length_of_longest_substring(s: str) -> int:
    last_seen = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best


if __name__ == "__main__":
    assert length_of_longest_substring("abcabcbb") == 3
    assert length_of_longest_substring("bbbbb") == 1
    assert length_of_longest_substring("pwwkew") == 3
    assert length_of_longest_substring("") == 0
    print("All tests passed.")
