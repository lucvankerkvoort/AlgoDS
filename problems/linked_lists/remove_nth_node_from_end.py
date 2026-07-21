"""
LeetCode 19. Remove Nth Node From End of List

Remove the nth node from the end of the list and return the (possibly new)
head, in one pass.

Approach: two pointers with a fixed gap of n nodes. Advance `fast` n steps
first (using a dummy head so removing the true head is handled uniformly),
then move both until `fast` hits the end; `slow` now sits just before the
node to remove.

Time:  O(n)
Space: O(1)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.list_node import ListNode, build_linked_list, linked_list_to_list


def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(n):
        fast = fast.next
    while fast.next:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next


if __name__ == "__main__":
    head = build_linked_list([1, 2, 3, 4, 5])
    assert linked_list_to_list(remove_nth_from_end(head, 2)) == [1, 2, 3, 5]

    head2 = build_linked_list([1])
    assert linked_list_to_list(remove_nth_from_end(head2, 1)) == []

    head3 = build_linked_list([1, 2])
    assert linked_list_to_list(remove_nth_from_end(head3, 2)) == [2]
    print("All tests passed.")
