/** Adjacency-list graph with BFS and DFS. */

export class Graph {
  directed: boolean;
  adj: Map<string, string[]> = new Map();

  constructor(directed = false) {
    this.directed = directed;
  }

  addVertex(v: string): void {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdge(u: string, v: string): void {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u)!.push(v);
    if (!this.directed) this.adj.get(v)!.push(u);
  }

  bfs(start: string): string[] {
    const visited = new Set([start]);
    const order: string[] = [];
    const queue: string[] = [start];
    while (queue.length > 0) {
      const node = queue.shift()!;
      order.push(node);
      for (const next of this.adj.get(node) ?? []) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return order;
  }

  dfs(start: string): string[] {
    const visited = new Set<string>();
    const order: string[] = [];
    const walk = (node: string) => {
      visited.add(node);
      order.push(node);
      for (const next of this.adj.get(node) ?? []) {
        if (!visited.has(next)) walk(next);
      }
    };
    walk(start);
    return order;
  }

  hasPath(start: string, end: string): boolean {
    return this.bfs(start).includes(end);
  }
}
