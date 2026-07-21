"""
LeetCode 98. Validate Binary Search Tree

Determine if a binary tree is a valid BST: every node's value must lie
strictly within the (low, high) bound established by its ancestors.

Approach: DFS carrying down a valid (low, high) range for each node; a
node is valid iff low < node.val < high, and its children get narrowed
ranges. (Comparing only to immediate parent is a common bug -- a node can
violate a *grandparent*'s bound.)

Time:  O(n)
Space: O(h)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def is_valid_bst(root) -> bool:
    def valid(node, low, high):
        if node is None:
            return True
        if not (low < node.val < high):
            return False
        return valid(node.left, low, node.val) and valid(node.right, node.val, high)

    return valid(root, float("-inf"), float("inf"))


if __name__ == "__main__":
    assert is_valid_bst(build_tree_level_order([2, 1, 3])) is True
    assert is_valid_bst(build_tree_level_order([5, 1, 4, None, None, 3, 6])) is False
    assert is_valid_bst(build_tree_level_order([5, 4, 6, None, None, 3, 7])) is False
    assert is_valid_bst(None) is True
    print("All tests passed.")
