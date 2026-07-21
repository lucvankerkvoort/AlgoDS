/**
 * Adjacency-list graph with BFS and DFS, for both directed and undirected use.
 * Reference: solutions/dataStructures/graph.ts
 */

export class Graph {
  directed: boolean;
  adj: Map<string, string[]> = new Map();

  constructor(directed = false) {
    this.directed = directed;
  }

  addVertex(v: string): void {
    throw new Error("Not implemented");
  }

  addEdge(u: string, v: string): void {
    throw new Error("Not implemented");
  }

  bfs(start: string): string[] {
    throw new Error("Not implemented");
  }

  dfs(start: string): string[] {
    throw new Error("Not implemented");
  }

  hasPath(start: string, end: string): boolean {
    throw new Error("Not implemented");
  }
}
