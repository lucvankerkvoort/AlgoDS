"""
LeetCode 70. Climbing Stairs

You can climb 1 or 2 steps at a time. Count the distinct ways to reach
the top of an n-step staircase.

Approach: this is Fibonacci in disguise -- ways(n) = ways(n-1) + ways(n-2),
since the last move was either a 1-step or a 2-step. Iterate bottom-up
keeping only the last two values.

Time:  O(n)
Space: O(1)
"""


def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2
    return prev1


if __name__ == "__main__":
    assert climb_stairs(2) == 2
    assert climb_stairs(3) == 3
    assert climb_stairs(5) == 8
    assert climb_stairs(1) == 1
    print("All tests passed.")
