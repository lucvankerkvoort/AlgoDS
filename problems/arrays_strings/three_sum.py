"""
LeetCode 15. 3Sum

Find all unique triplets [nums[i], nums[j], nums[k]] (i != j != k) that
sum to zero.

Example:
    [-1, 0, 1, 2, -1, -4] -> [[-1, -1, 2], [-1, 0, 1]]

Approach: sort the array, fix the smallest element of each triplet, then
use the two-pointer technique on the remainder to find pairs summing to
its negation. Skip duplicate values at every position to keep results unique.

Time:  O(n^2)
Space: O(1) extra beyond the output (ignoring sort's space)
"""

from typing import List


def three_sum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    n = len(nums)
    result = []

    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        if nums[i] > 0:
            break  # smallest element positive => no triplet can sum to 0

        left, right = i + 1, n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1

    return result


if __name__ == "__main__":
    result = three_sum([-1, 0, 1, 2, -1, -4])
    assert sorted(map(tuple, result)) == sorted(map(tuple, [[-1, -1, 2], [-1, 0, 1]]))
    assert three_sum([0, 1, 1]) == []
    assert three_sum([0, 0, 0]) == [[0, 0, 0]]
    print("All tests passed.")
