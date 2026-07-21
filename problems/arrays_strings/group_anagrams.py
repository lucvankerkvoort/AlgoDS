"""
LeetCode 49. Group Anagrams

Given an array of strings, group the anagrams together (any order).

Example:
    ["eat","tea","tan","ate","nat","bat"]
    -> [["eat","tea","ate"], ["tan","nat"], ["bat"]]

Approach: anagrams share the same sorted-character signature (or the same
26-letter count signature). Bucket words by that signature in a hash map.

Time:  O(n * k log k), n = number of strings, k = max string length
Space: O(n * k)
"""

from collections import defaultdict
from typing import List


def group_anagrams(strs: List[str]) -> List[List[str]]:
    buckets = defaultdict(list)
    for s in strs:
        key = "".join(sorted(s))
        buckets[key].append(s)
    return list(buckets.values())


if __name__ == "__main__":
    result = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    groups = sorted([sorted(g) for g in result])
    assert groups == sorted([sorted(g) for g in [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]])
    assert group_anagrams([""]) == [[""]]
    assert group_anagrams(["a"]) == [["a"]]
    print("All tests passed.")
