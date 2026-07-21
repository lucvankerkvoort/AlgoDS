"""
LeetCode 981. Time Based Key-Value Store

Design a store that maps a key to multiple values, each stamped with a
timestamp. get(key, timestamp) should return the value set at the largest
recorded timestamp <= the given timestamp.

Approach: for each key, keep a list of (timestamp, value) pairs. `set`
calls arrive in strictly increasing timestamp order per the problem's
constraints, so appending keeps each key's list sorted -- letting `get`
binary search for the rightmost timestamp <= the query.

Time:  O(1) amortized for set, O(log n) for get
Space: O(n)
"""

import bisect
from collections import defaultdict


class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)  # key -> [(timestamp, value), ...]

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        entries = self.store.get(key)
        if not entries:
            return ""
        i = bisect.bisect_right(entries, (timestamp, chr(0x10FFFF)))
        return entries[i - 1][1] if i > 0 else ""


if __name__ == "__main__":
    tm = TimeMap()
    tm.set("foo", "bar", 1)
    assert tm.get("foo", 1) == "bar"
    assert tm.get("foo", 3) == "bar"
    tm.set("foo", "bar2", 4)
    assert tm.get("foo", 4) == "bar2"
    assert tm.get("foo", 5) == "bar2"
    assert tm.get("foo", 0) == ""
    assert tm.get("missing", 1) == ""
    print("All tests passed.")
