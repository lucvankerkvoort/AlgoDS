"""
LeetCode 543. Diameter of Binary Tree

The diameter is the length (in edges) of the longest path between any two
nodes, which may or may not pass through the root.

Approach: post-order DFS returning each subtree's height, while updating a
running best for left_height + right_height (the longest path through
that node) as a side effect.

Time:  O(n)
Space: O(h)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def diameter_of_binary_tree(root) -> int:
    best = 0

    def height(node):
        nonlocal best
        if node is None:
            return 0
        left_h = height(node.left)
        right_h = height(node.right)
        best = max(best, left_h + right_h)
        return 1 + max(left_h, right_h)

    height(root)
    return best


if __name__ == "__main__":
    assert diameter_of_binary_tree(build_tree_level_order([1, 2, 3, 4, 5])) == 3
    assert diameter_of_binary_tree(build_tree_level_order([1, 2])) == 1
    assert diameter_of_binary_tree(None) == 0
    print("All tests passed.")
