"""
LeetCode 215. Kth Largest Element in an Array

Return the kth largest element (not the kth distinct one) in an unsorted
array.

Example:
    [3,2,1,5,6,4], k = 2 -> 5

Approach: maintain a min-heap of size k as we scan the array. After
processing all elements, the heap's smallest element (its root) is the
kth largest overall.

Time:  O(n log k)
Space: O(k)
"""

import heapq
from typing import List


def find_kth_largest(nums: List[int], k: int) -> int:
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    return heap[0]


if __name__ == "__main__":
    assert find_kth_largest([3, 2, 1, 5, 6, 4], 2) == 5
    assert find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) == 4
    assert find_kth_largest([1], 1) == 1
    print("All tests passed.")
