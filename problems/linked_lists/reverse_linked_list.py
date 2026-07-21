"""
LeetCode 206. Reverse Linked List

Reverse a singly linked list and return the new head.

Approach: walk the list, rewiring each node's `next` pointer to point at
the previous node instead of the next one.

Time:  O(n)
Space: O(1) iterative (O(n) call stack if done recursively)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.list_node import ListNode, build_linked_list, linked_list_to_list


def reverse_list(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev


def reverse_list_recursive(head):
    if head is None or head.next is None:
        return head
    new_head = reverse_list_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head


if __name__ == "__main__":
    head = build_linked_list([1, 2, 3, 4, 5])
    assert linked_list_to_list(reverse_list(head)) == [5, 4, 3, 2, 1]

    head2 = build_linked_list([1, 2])
    assert linked_list_to_list(reverse_list_recursive(head2)) == [2, 1]

    assert reverse_list(None) is None
    print("All tests passed.")
