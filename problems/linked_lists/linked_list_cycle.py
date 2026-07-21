"""
LeetCode 141. Linked List Cycle

Determine if a linked list has a cycle.

Approach: Floyd's tortoise-and-hare. Move a slow pointer one step and a
fast pointer two steps at a time; if they ever meet, there's a cycle. If
fast reaches the end (None), there isn't.

Time:  O(n)
Space: O(1)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.list_node import ListNode


def has_cycle(head) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False


if __name__ == "__main__":
    # 3 -> 2 -> 0 -> -4 -> (back to node with value 2)
    n1 = ListNode(3)
    n2 = ListNode(2)
    n3 = ListNode(0)
    n4 = ListNode(-4)
    n1.next, n2.next, n3.next, n4.next = n2, n3, n4, n2
    assert has_cycle(n1) is True

    n5 = ListNode(1)
    n6 = ListNode(2)
    n5.next = n6
    assert has_cycle(n5) is False

    assert has_cycle(None) is False
    print("All tests passed.")
