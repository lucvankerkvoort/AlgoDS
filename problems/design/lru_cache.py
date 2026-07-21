"""
LeetCode 146. LRU Cache

Design a fixed-capacity cache supporting get(key) and put(key, value) in
O(1), evicting the least recently used entry when capacity is exceeded.

Approach: a hash map from key -> node combined with a doubly linked list
that keeps nodes ordered from most- to least-recently-used. Every get/put
moves the touched node to the front (most-recently-used); when capacity
is exceeded, the node just before the tail sentinel (least-recently-used)
is evicted. Both structures let us find (map) and reorder (linked list)
in O(1).

Time:  O(1) per operation
Space: O(capacity)
"""


class _Node:
    __slots__ = ("key", "val", "prev", "next")

    def __init__(self, key=None, val=None):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key -> _Node
        # sentinels: head.next is most-recently-used, tail.prev is least
        self.head = _Node()
        self.tail = _Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _insert_front(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._insert_front(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])

        node = _Node(key, value)
        self.cache[key] = node
        self._insert_front(node)

        if len(self.cache) > self.capacity:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]


if __name__ == "__main__":
    cache = LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)  # evicts key 2 (least recently used)
    assert cache.get(2) == -1
    cache.put(4, 4)  # evicts key 1
    assert cache.get(1) == -1
    assert cache.get(3) == 3
    assert cache.get(4) == 4
    print("All tests passed.")
