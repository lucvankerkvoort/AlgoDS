"""
LeetCode 238. Product of Array Except Self

Return an array `answer` where answer[i] is the product of all elements of
`nums` except nums[i], without using division, in O(n).

Example:
    [1, 2, 3, 4] -> [24, 12, 8, 6]

Approach: prefix products from the left, then fold in suffix products from
the right in a second pass, reusing the output array as the prefix array.

Time:  O(n)
Space: O(1) extra (output array doesn't count)
"""

from typing import List


def product_except_self(nums: List[int]) -> List[int]:
    n = len(nums)
    answer = [1] * n

    prefix = 1
    for i in range(n):
        answer[i] = prefix
        prefix *= nums[i]

    suffix = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]

    return answer


if __name__ == "__main__":
    assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
    assert product_except_self([-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]
    print("All tests passed.")
