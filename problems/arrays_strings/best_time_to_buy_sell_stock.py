"""
LeetCode 121. Best Time to Buy and Sell Stock

`prices[i]` is the price of a stock on day i. Choose a single day to buy and
a later day to sell to maximize profit. Return the max profit, or 0 if none.

Example:
    prices = [7, 1, 5, 3, 6, 4] -> 5  (buy at 1, sell at 6)

Approach: track the minimum price seen so far while scanning left to right;
at each day, the best possible profit is price - min_so_far.

Time:  O(n)
Space: O(1)
"""

from typing import List


def max_profit(prices: List[int]) -> int:
    if not prices:
        return 0
    min_price = prices[0]
    best = 0
    for price in prices[1:]:
        best = max(best, price - min_price)
        min_price = min(min_price, price)
    return best


if __name__ == "__main__":
    assert max_profit([7, 1, 5, 3, 6, 4]) == 5
    assert max_profit([7, 6, 4, 3, 1]) == 0
    assert max_profit([]) == 0
    assert max_profit([1, 2]) == 1
    print("All tests passed.")
