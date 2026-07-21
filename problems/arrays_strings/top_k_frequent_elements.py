"""
LeetCode 347. Top K Frequent Elements

Return the k most frequent elements in `nums` (any order).

Example:
    nums = [1,1,1,2,2,3], k = 2 -> [1, 2]

Approach: bucket sort by frequency. Frequencies range from 1..n, so create
n+1 buckets (index = frequency) and read off the top k from the highest
buckets down. This beats a full sort, which would be O(n log n).

Time:  O(n)
Space: O(n)
"""

from collections import Counter
from typing import List


def top_k_frequent(nums: List[int], k: int) -> List[int]:
    counts = Counter(nums)
    n = len(nums)
    buckets = [[] for _ in range(n + 1)]
    for num, freq in counts.items():
        buckets[freq].append(num)

    result = []
    for freq in range(n, 0, -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result
    return result


if __name__ == "__main__":
    assert sorted(top_k_frequent([1, 1, 1, 2, 2, 3], 2)) == [1, 2]
    assert top_k_frequent([1], 1) == [1]
    print("All tests passed.")
