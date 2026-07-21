"""
LeetCode 297. Serialize and Deserialize Binary Tree

Design an algorithm to serialize a binary tree to a string and deserialize
it back to the original tree structure.

Approach: pre-order DFS, encoding None children as a sentinel ("#"). That
single sentinel is enough to reconstruct the exact structure on
deserialization, since pre-order + explicit nulls is unambiguous.

Time:  O(n) for both serialize and deserialize
Space: O(n)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.tree_node import TreeNode, build_tree_level_order, tree_to_level_order

NULL_MARKER = "#"


def serialize(root) -> str:
    parts = []

    def walk(node):
        if node is None:
            parts.append(NULL_MARKER)
            return
        parts.append(str(node.val))
        walk(node.left)
        walk(node.right)

    walk(root)
    return ",".join(parts)


def deserialize(data: str):
    values = iter(data.split(","))

    def build():
        val = next(values)
        if val == NULL_MARKER:
            return None
        node = TreeNode(int(val))
        node.left = build()
        node.right = build()
        return node

    return build()


if __name__ == "__main__":
    root = build_tree_level_order([1, 2, 3, None, None, 4, 5])
    data = serialize(root)
    restored = deserialize(data)
    assert tree_to_level_order(restored) == tree_to_level_order(root)

    assert deserialize(serialize(None)) is None
    print("All tests passed.")
