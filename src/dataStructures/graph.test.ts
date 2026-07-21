import { Graph } from "./graph";

test("undirected BFS/DFS visit all connected vertices", () => {
  const g = new Graph();
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "D");
  expect(g.bfs("A")).toEqual(["A", "B", "C", "D"]);
  expect(new Set(g.dfs("A"))).toEqual(new Set(["A", "B", "C", "D"]));
  expect(g.hasPath("A", "D")).toBe(true);
});

test("directed graph respects edge direction", () => {
  const g = new Graph(true);
  g.addEdge("X", "Y");
  expect(g.hasPath("X", "Y")).toBe(true);
  expect(g.hasPath("Y", "X")).toBe(false);
});
