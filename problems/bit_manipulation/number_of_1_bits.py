"""
LeetCode 191. Number of 1 Bits

Count the number of set bits (population count) in an unsigned integer.

Approach: Brian Kernighan's trick -- `n & (n - 1)` clears the lowest set
bit. Repeating this and counting iterations until n is 0 gives the
popcount directly (loops only as many times as there are set bits, not
the bit width).

Time:  O(k), k = number of set bits
Space: O(1)
"""


def hamming_weight(n: int) -> int:
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count


if __name__ == "__main__":
    assert hamming_weight(0b00000000000000000000000000001011) == 3
    assert hamming_weight(0b00000000000000000000000010000000) == 1
    assert hamming_weight(0) == 0
    print("All tests passed.")
