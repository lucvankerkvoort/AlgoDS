"""
LeetCode 102. Binary Tree Level Order Traversal

Return the node values level by level, left to right, as a list of lists.

Example:
    [3,9,20,null,null,15,7] -> [[3], [9, 20], [15, 7]]

Approach: BFS with a queue, processing one full level (queue snapshot
size) per iteration.

Time:  O(n)
Space: O(n)
"""

from collections import deque
from typing import List

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import build_tree_level_order


def level_order(root) -> List[List[int]]:
    if root is None:
        return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result


if __name__ == "__main__":
    root = build_tree_level_order([3, 9, 20, None, None, 15, 7])
    assert level_order(root) == [[3], [9, 20], [15, 7]]
    assert level_order(None) == []
    assert level_order(build_tree_level_order([1])) == [[1]]
    print("All tests passed.")
