"""
Queue (FIFO) using a deque for O(1) enqueue/dequeue, plus a
fixed-size circular buffer implementation for comparison.
"""

from collections import deque


class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, val):
        self._data.append(val)

    def dequeue(self):
        if not self._data:
            raise IndexError("dequeue from empty queue")
        return self._data.popleft()

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)


class CircularQueue:
    def __init__(self, capacity):
        self._buf = [None] * capacity
        self._capacity = capacity
        self._head = 0
        self._size = 0

    def enqueue(self, val):
        if self._size == self._capacity:
            raise OverflowError("queue is full")
        tail = (self._head + self._size) % self._capacity
        self._buf[tail] = val
        self._size += 1

    def dequeue(self):
        if self._size == 0:
            raise IndexError("dequeue from empty queue")
        val = self._buf[self._head]
        self._head = (self._head + 1) % self._capacity
        self._size -= 1
        return val

    def __len__(self):
        return self._size


if __name__ == "__main__":
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    assert q.dequeue() == 1
    assert len(q) == 1

    cq = CircularQueue(3)
    cq.enqueue("a")
    cq.enqueue("b")
    cq.enqueue("c")
    assert cq.dequeue() == "a"
    cq.enqueue("d")
    assert [cq.dequeue() for _ in range(3)] == ["b", "c", "d"]
    print("All tests passed.")
