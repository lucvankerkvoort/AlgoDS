"""
LeetCode 322. Coin Change

Given coin denominations and a target amount, return the fewest coins
needed to make that amount (unlimited supply of each coin), or -1 if
impossible.

Approach: bottom-up DP. dp[a] = fewest coins to make amount a. Base case
dp[0] = 0. For each amount, try every coin and take the best (1 + dp[a -
coin]) over all coins that fit.

Time:  O(amount * len(coins))
Space: O(amount)
"""

from typing import List


def coin_change(coins: List[int], amount: int) -> int:
    INF = float("inf")
    dp = [0] + [INF] * amount
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != INF else -1


if __name__ == "__main__":
    assert coin_change([1, 2, 5], 11) == 3
    assert coin_change([2], 3) == -1
    assert coin_change([1], 0) == 0
    print("All tests passed.")
