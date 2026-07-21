"""
LeetCode 134. Gas Station

There are n gas stations in a circle; gas[i] is the fuel available at
station i, cost[i] is the fuel needed to travel from station i to i+1.
Return the starting station index from which you can complete the
circuit, or -1 if impossible (the answer is guaranteed unique if it
exists).

Approach: if total gas >= total cost, a solution is guaranteed to exist.
Track a running tank balance while scanning; whenever it goes negative,
the current start (and every station up to here) cannot be the answer, so
reset the candidate start to the next station and the running tank to 0.

Time:  O(n)
Space: O(1)
"""

from typing import List


def can_complete_circuit(gas: List[int], cost: List[int]) -> int:
    if sum(gas) < sum(cost):
        return -1

    start = 0
    tank = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    return start


if __name__ == "__main__":
    assert can_complete_circuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3
    assert can_complete_circuit([2, 3, 4], [3, 4, 3]) == -1
    print("All tests passed.")
