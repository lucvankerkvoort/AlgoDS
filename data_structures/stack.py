"""
Array-backed stack (LIFO) plus a MinStack variant that tracks
the running minimum in O(1) using an auxiliary stack.
"""


class Stack:
    def __init__(self):
        self._data = []

    def push(self, val):
        self._data.append(val)

    def pop(self):
        if not self._data:
            raise IndexError("pop from empty stack")
        return self._data.pop()

    def peek(self):
        if not self._data:
            raise IndexError("peek from empty stack")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)


class MinStack:
    def __init__(self):
        self._data = []
        self._mins = []

    def push(self, val):
        self._data.append(val)
        if not self._mins or val <= self._mins[-1]:
            self._mins.append(val)
        else:
            self._mins.append(self._mins[-1])

    def pop(self):
        self._mins.pop()
        return self._data.pop()

    def top(self):
        return self._data[-1]

    def get_min(self):
        return self._mins[-1]


if __name__ == "__main__":
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    assert s.peek() == 3
    assert s.pop() == 3
    assert len(s) == 2

    ms = MinStack()
    ms.push(5)
    ms.push(2)
    ms.push(7)
    assert ms.get_min() == 2
    ms.pop()
    assert ms.get_min() == 2
    ms.pop()
    assert ms.get_min() == 5
    print("All tests passed.")
