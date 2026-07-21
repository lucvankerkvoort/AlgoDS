"""
LeetCode 133. Clone Graph

Given a reference to a node in a connected undirected graph, return a deep
copy (clone) of the graph.

Approach: DFS with a hash map from original node -> clone, created before
recursing into neighbors so cycles don't cause infinite recursion.

Time:  O(V + E)
Space: O(V)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))
from common.graph_node import Node


def clone_graph(node):
    if node is None:
        return None

    clones = {}

    def dfs(n):
        if n in clones:
            return clones[n]
        clone = Node(n.val)
        clones[n] = clone
        for neighbor in n.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone

    return dfs(node)


if __name__ == "__main__":
    # 1 -- 2
    # |    |
    # 4 -- 3
    n1, n2, n3, n4 = Node(1), Node(2), Node(3), Node(4)
    n1.neighbors = [n2, n4]
    n2.neighbors = [n1, n3]
    n3.neighbors = [n2, n4]
    n4.neighbors = [n1, n3]

    cloned = clone_graph(n1)
    assert cloned is not n1
    assert cloned.val == 1
    assert sorted(neigh.val for neigh in cloned.neighbors) == [2, 4]
    assert cloned.neighbors[0] is not n2

    assert clone_graph(None) is None
    print("All tests passed.")
