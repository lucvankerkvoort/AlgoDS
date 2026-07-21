"""
Doubly linked list with O(1) append/prepend/delete-given-node.
Backbone for structures like LRU caches.
"""


class DNode:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self):
        # sentinel head/tail simplify edge cases
        self.head = DNode(None)
        self.tail = DNode(None)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0

    def append(self, val):
        node = DNode(val)
        last = self.tail.prev
        last.next = node
        node.prev = last
        node.next = self.tail
        self.tail.prev = node
        self.size += 1
        return node

    def prepend(self, val):
        node = DNode(val)
        first = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = first
        first.prev = node
        self.size += 1
        return node

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
        node.prev = node.next = None
        self.size -= 1

    def to_list(self):
        out = []
        cur = self.head.next
        while cur is not self.tail:
            out.append(cur.val)
            cur = cur.next
        return out


if __name__ == "__main__":
    dll = DoublyLinkedList()
    dll.append(1)
    n2 = dll.append(2)
    dll.append(3)
    dll.prepend(0)
    assert dll.to_list() == [0, 1, 2, 3]
    dll.remove(n2)
    assert dll.to_list() == [0, 1, 3]
    assert dll.size == 3
    print("All tests passed.")
