"""
LeetCode 295. Find Median from Data Stream

Design a structure that supports adding numbers one at a time and
efficiently retrieving the median of all numbers added so far.

Approach: two heaps splitting the stream at the median. `low` is a max-heap
(negated values, since Python only has min-heaps) holding the smaller
half; `high` is a min-heap holding the larger half. Keep them balanced in
size (differ by at most 1) after every insert, so the median is either the
top of the larger heap, or the average of both tops when they're equal
size.

Time:  O(log n) per add, O(1) per find_median
Space: O(n)
"""

import heapq


class MedianFinder:
    def __init__(self):
        self.low = []   # max-heap via negation: largest of the small half
        self.high = []  # min-heap: smallest of the large half

    def add_num(self, num: int) -> None:
        heapq.heappush(self.low, -num)
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.high) > len(self.low):
            heapq.heappush(self.low, -heapq.heappop(self.high))

    def find_median(self) -> float:
        if len(self.low) > len(self.high):
            return -self.low[0]
        return (-self.low[0] + self.high[0]) / 2


if __name__ == "__main__":
    mf = MedianFinder()
    mf.add_num(1)
    mf.add_num(2)
    assert mf.find_median() == 1.5
    mf.add_num(3)
    assert mf.find_median() == 2
    print("All tests passed.")
