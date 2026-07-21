"""
LeetCode 21. Merge Two Sorted Lists

Merge two sorted linked lists into one sorted list and return its head.

Approach: use a dummy head and repeatedly attach the smaller of the two
current nodes, advancing that list. Attach whatever remains at the end.

Time:  O(n + m)
Space: O(1) extra (reuses existing nodes)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.list_node import ListNode, build_linked_list, linked_list_to_list


def merge_two_lists(l1, l2):
    dummy = ListNode()
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 if l1 else l2
    return dummy.next


if __name__ == "__main__":
    l1 = build_linked_list([1, 2, 4])
    l2 = build_linked_list([1, 3, 4])
    assert linked_list_to_list(merge_two_lists(l1, l2)) == [1, 1, 2, 3, 4, 4]

    assert merge_two_lists(None, None) is None
    assert linked_list_to_list(merge_two_lists(None, build_linked_list([0]))) == [0]
    print("All tests passed.")
