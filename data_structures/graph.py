"""
Adjacency-list graph with BFS and DFS, for both directed and undirected use.
"""

from collections import deque


class Graph:
    def __init__(self, directed=False):
        self.directed = directed
        self.adj = {}

    def add_vertex(self, v):
        self.adj.setdefault(v, [])

    def add_edge(self, u, v):
        self.add_vertex(u)
        self.add_vertex(v)
        self.adj[u].append(v)
        if not self.directed:
            self.adj[v].append(u)

    def bfs(self, start):
        visited = {start}
        order = []
        queue = deque([start])
        while queue:
            node = queue.popleft()
            order.append(node)
            for nxt in self.adj.get(node, []):
                if nxt not in visited:
                    visited.add(nxt)
                    queue.append(nxt)
        return order

    def dfs(self, start):
        visited = set()
        order = []

        def walk(node):
            visited.add(node)
            order.append(node)
            for nxt in self.adj.get(node, []):
                if nxt not in visited:
                    walk(nxt)

        walk(start)
        return order

    def has_path(self, start, end):
        return end in self.bfs(start)


if __name__ == "__main__":
    g = Graph()
    g.add_edge("A", "B")
    g.add_edge("A", "C")
    g.add_edge("B", "D")
    g.add_edge("C", "D")
    assert g.bfs("A") == ["A", "B", "C", "D"]
    assert set(g.dfs("A")) == {"A", "B", "C", "D"}
    assert g.has_path("A", "D") is True

    g2 = Graph(directed=True)
    g2.add_edge("X", "Y")
    assert g2.has_path("X", "Y") is True
    assert g2.has_path("Y", "X") is False
    print("All tests passed.")
