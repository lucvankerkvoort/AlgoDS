"""
LeetCode 338. Counting Bits

For every number from 0 to n, return the count of set bits, as an array.

Approach: DP building on smaller results. `i >> 1` drops the lowest bit,
and `i & 1` tells us whether that dropped bit was 1. So
bits(i) = bits(i >> 1) + (i & 1).

Time:  O(n)
Space: O(n) (output array)
"""

from typing import List


def count_bits(n: int) -> List[int]:
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp


if __name__ == "__main__":
    assert count_bits(2) == [0, 1, 1]
    assert count_bits(5) == [0, 1, 1, 2, 1, 2]
    assert count_bits(0) == [0]
    print("All tests passed.")
