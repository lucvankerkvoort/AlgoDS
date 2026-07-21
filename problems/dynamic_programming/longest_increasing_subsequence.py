"""
LeetCode 300. Longest Increasing Subsequence

Return the length of the longest strictly increasing subsequence.

Example:
    [10,9,2,5,3,7,101,18] -> 4  ([2,3,7,101])

Approach: patience-sorting / binary search. Maintain `tails`, where
tails[k] is the smallest possible tail value of any increasing subsequence
of length k+1 found so far. For each number, binary search for its
insertion point in `tails` (leftmost position where tails[i] >= num) and
either extend `tails` or replace that entry -- the final length of `tails`
is the LIS length. (`tails` is not itself a valid subsequence, only its
length is meaningful.)

Time:  O(n log n)
Space: O(n)
"""

import bisect
from typing import List


def length_of_lis(nums: List[int]) -> int:
    tails = []
    for num in nums:
        pos = bisect.bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)


if __name__ == "__main__":
    assert length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
    assert length_of_lis([0, 1, 0, 3, 2, 3]) == 4
    assert length_of_lis([7, 7, 7, 7]) == 1
    print("All tests passed.")
