"""
LeetCode 261. Graph Valid Tree

Given `n` nodes and a list of undirected edges, determine whether they
form a valid tree: connected, and with no cycles.

Key fact: an undirected graph with n nodes is a tree iff it has exactly
n - 1 edges AND is fully connected. (Fewer edges => must be disconnected;
more edges => must contain a cycle.)

Approach: check the edge count is n - 1, then Union-Find all edges. If any
union fails (both endpoints already connected), there's a cycle. Finally
confirm every node ended up in a single component.

Time:  O(n + e * alpha(n))
Space: O(n)
"""

from typing import List


def valid_tree(n: int, edges: List[List[int]]) -> bool:
    if len(edges) != n - 1:
        return False

    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra == rb:
            return False  # cycle
        parent[ra] = rb

    return len({find(i) for i in range(n)}) == 1


if __name__ == "__main__":
    assert valid_tree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]) is True
    assert valid_tree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]) is False
    assert valid_tree(1, []) is True
    assert valid_tree(2, []) is False
    print("All tests passed.")
