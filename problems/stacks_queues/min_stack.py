"""
LeetCode 155. Min Stack

Design a stack supporting push, pop, top, and retrieving the minimum
element, all in O(1).

Approach: keep a second stack tracking the running minimum alongside the
main data stack. When pushing, push `min(value, current_min)` onto the min
stack so it always mirrors the size of the data stack.

Time:  O(1) for every operation
Space: O(n)
"""


class MinStack:
    def __init__(self):
        self._data = []
        self._mins = []

    def push(self, val: int) -> None:
        self._data.append(val)
        self._mins.append(val if not self._mins else min(val, self._mins[-1]))

    def pop(self) -> None:
        self._data.pop()
        self._mins.pop()

    def top(self) -> int:
        return self._data[-1]

    def get_min(self) -> int:
        return self._mins[-1]


if __name__ == "__main__":
    ms = MinStack()
    ms.push(-2)
    ms.push(0)
    ms.push(-3)
    assert ms.get_min() == -3
    ms.pop()
    assert ms.top() == 0
    assert ms.get_min() == -2
    print("All tests passed.")
