"""
LeetCode 230. Kth Smallest Element in a BST

Return the kth smallest value (1-indexed) in a BST.

Approach: an in-order traversal of a BST visits nodes in ascending order,
so walk it iteratively with an explicit stack and stop at the kth node,
avoiding building the full traversal list.

Time:  O(h + k)
Space: O(h)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def kth_smallest(root, k: int) -> int:
    stack = []
    node = root
    while stack or node:
        while node:
            stack.append(node)
            node = node.left
        node = stack.pop()
        k -= 1
        if k == 0:
            return node.val
        node = node.right
    raise ValueError("k is out of range")


if __name__ == "__main__":
    assert kth_smallest(build_tree_level_order([3, 1, 4, None, 2]), 1) == 1
    assert kth_smallest(build_tree_level_order([5, 3, 6, 2, 4, None, None, 1]), 3) == 3
    print("All tests passed.")
