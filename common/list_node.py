"""Shared singly-linked-list node, used by the linked_lists problems."""


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return f"ListNode({self.val})"


def build_linked_list(values):
    """[1, 2, 3] -> 1 -> 2 -> 3 -> None, returns head (or None if empty)."""
    head = None
    tail = None
    for v in values:
        node = ListNode(v)
        if head is None:
            head = node
            tail = node
        else:
            tail.next = node
            tail = node
    return head


def linked_list_to_list(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out
