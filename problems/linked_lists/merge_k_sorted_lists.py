"""
LeetCode 23. Merge k Sorted Lists

Merge k sorted linked lists into one sorted list.

Example:
    [[1,4,5],[1,3,4],[2,6]] -> [1,1,2,3,4,4,5,6]

Approach: push each list's current node into a min-heap keyed by value
(with a tie-breaking counter, since ListNode isn't orderable). Repeatedly
pop the smallest, append it to the result, and push its successor.

Time:  O(N log k), N = total nodes, k = number of lists
Space: O(k) for the heap
"""

import heapq
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.list_node import ListNode, build_linked_list, linked_list_to_list


def merge_k_lists(lists):
    heap = []
    counter = 0  # tie-breaker so heapq never compares ListNode objects
    for node in lists:
        if node:
            heapq.heappush(heap, (node.val, counter, node))
            counter += 1

    dummy = ListNode()
    tail = dummy
    while heap:
        _, _, node = heapq.heappop(heap)
        tail.next = node
        tail = tail.next
        if node.next:
            heapq.heappush(heap, (node.next.val, counter, node.next))
            counter += 1

    return dummy.next


if __name__ == "__main__":
    lists = [build_linked_list(l) for l in ([1, 4, 5], [1, 3, 4], [2, 6])]
    merged = merge_k_lists(lists)
    assert linked_list_to_list(merged) == [1, 1, 2, 3, 4, 4, 5, 6]

    assert merge_k_lists([]) is None
    assert merge_k_lists([None]) is None
    print("All tests passed.")
