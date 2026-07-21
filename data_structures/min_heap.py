"""
Binary min-heap built from scratch (array-backed) with sift up/down,
so you understand what heapq does under the hood.

push/pop: O(log n). peek: O(1).
"""


class MinHeap:
    def __init__(self):
        self._data = []

    def __len__(self):
        return len(self._data)

    def peek(self):
        if not self._data:
            raise IndexError("peek from empty heap")
        return self._data[0]

    def push(self, val):
        self._data.append(val)
        self._sift_up(len(self._data) - 1)

    def pop(self):
        if not self._data:
            raise IndexError("pop from empty heap")
        top = self._data[0]
        last = self._data.pop()
        if self._data:
            self._data[0] = last
            self._sift_down(0)
        return top

    def _sift_up(self, i):
        while i > 0:
            parent = (i - 1) // 2
            if self._data[i] < self._data[parent]:
                self._data[i], self._data[parent] = self._data[parent], self._data[i]
                i = parent
            else:
                break

    def _sift_down(self, i):
        n = len(self._data)
        while True:
            left, right = 2 * i + 1, 2 * i + 2
            smallest = i
            if left < n and self._data[left] < self._data[smallest]:
                smallest = left
            if right < n and self._data[right] < self._data[smallest]:
                smallest = right
            if smallest == i:
                break
            self._data[i], self._data[smallest] = self._data[smallest], self._data[i]
            i = smallest


if __name__ == "__main__":
    heap = MinHeap()
    for v in [5, 3, 8, 1, 9, 2]:
        heap.push(v)
    assert heap.peek() == 1
    out = [heap.pop() for _ in range(len(heap))]
    assert out == sorted([5, 3, 8, 1, 9, 2])
    print("All tests passed.")
