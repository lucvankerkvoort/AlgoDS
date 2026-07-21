"""
LeetCode 104. Maximum Depth of Binary Tree

Return the number of nodes along the longest path from root to a leaf.

Approach: recursive DFS -- depth of a node is 1 + max(depth(left), depth(right)).

Time:  O(n)
Space: O(h), h = tree height (call stack)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def max_depth(root) -> int:
    if root is None:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))


if __name__ == "__main__":
    assert max_depth(build_tree_level_order([3, 9, 20, None, None, 15, 7])) == 3
    assert max_depth(build_tree_level_order([1, None, 2])) == 2
    assert max_depth(None) == 0
    print("All tests passed.")
