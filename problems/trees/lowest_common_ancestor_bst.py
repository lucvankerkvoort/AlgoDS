"""
LeetCode 235. Lowest Common Ancestor of a Binary Search Tree

Given a BST and two of its nodes p and q, find their lowest common
ancestor.

Approach: exploit BST ordering. If both p and q are smaller than the
current node, the LCA is in the left subtree; if both are larger, it's in
the right subtree; otherwise (values on different sides, or one equals
the current node) the current node is the split point, i.e. the LCA.

Time:  O(h)
Space: O(1) iterative
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def lowest_common_ancestor(root, p, q):
    node = root
    while node:
        if p.val < node.val and q.val < node.val:
            node = node.left
        elif p.val > node.val and q.val > node.val:
            node = node.right
        else:
            return node
    return None


if __name__ == "__main__":
    root = build_tree_level_order([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
    # locate nodes with values 2 and 8 by walking from root
    p = root.left          # 2
    q = root.right         # 8
    assert lowest_common_ancestor(root, p, q).val == 6

    p2 = root.left         # 2
    q2 = root.left.right   # 4
    assert lowest_common_ancestor(root, p2, q2).val == 2
    print("All tests passed.")
