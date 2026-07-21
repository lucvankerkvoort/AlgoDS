"""
LeetCode 226. Invert Binary Tree

Swap every left/right child throughout the tree (mirror it) and return
the root.

Approach: recursive DFS -- invert both subtrees, then swap them at this node.

Time:  O(n)
Space: O(h)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order, tree_to_level_order


def invert_tree(root):
    if root is None:
        return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root


if __name__ == "__main__":
    root = build_tree_level_order([4, 2, 7, 1, 3, 6, 9])
    inverted = invert_tree(root)
    assert tree_to_level_order(inverted) == [4, 7, 2, 9, 6, 3, 1]

    assert invert_tree(None) is None
    print("All tests passed.")
