"""
Singly linked list built from scratch: append, prepend, delete, find, reverse.

Time: O(1) append/prepend (tail tracked), O(n) delete/find/reverse.
Space: O(n) for n nodes.
"""


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def append(self, val):
        node = Node(val)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1
        return self

    def prepend(self, val):
        node = Node(val)
        node.next = self.head
        self.head = node
        if not self.tail:
            self.tail = node
        self.size += 1
        return self

    def delete(self, val):
        prev = None
        cur = self.head
        while cur:
            if cur.val == val:
                if prev:
                    prev.next = cur.next
                else:
                    self.head = cur.next
                if cur is self.tail:
                    self.tail = prev
                self.size -= 1
                return True
            prev = cur
            cur = cur.next
        return False

    def find(self, val):
        cur = self.head
        while cur:
            if cur.val == val:
                return cur
            cur = cur.next
        return None

    def reverse(self):
        prev = None
        cur = self.head
        self.tail = self.head
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        self.head = prev
        return self

    def to_list(self):
        out = []
        cur = self.head
        while cur:
            out.append(cur.val)
            cur = cur.next
        return out


if __name__ == "__main__":
    ll = SinglyLinkedList()
    ll.append(1).append(2).append(3)
    ll.prepend(0)
    assert ll.to_list() == [0, 1, 2, 3]
    assert ll.find(2).val == 2
    assert ll.find(99) is None
    ll.delete(0)
    assert ll.to_list() == [1, 2, 3]
    ll.reverse()
    assert ll.to_list() == [3, 2, 1]
    assert ll.size == 3
    print("All tests passed.")
