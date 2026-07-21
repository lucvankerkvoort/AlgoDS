import { cloneGraph } from "./cloneGraph";
import { GraphNode } from "../../common/graphNode";

test("deep-clones a connected graph", () => {
  // 1 -- 2
  // |    |
  // 4 -- 3
  const n1 = new GraphNode(1);
  const n2 = new GraphNode(2);
  const n3 = new GraphNode(3);
  const n4 = new GraphNode(4);
  n1.neighbors = [n2, n4];
  n2.neighbors = [n1, n3];
  n3.neighbors = [n2, n4];
  n4.neighbors = [n1, n3];

  const cloned = cloneGraph(n1)!;
  expect(cloned).not.toBe(n1);
  expect(cloned.val).toBe(1);
  expect(cloned.neighbors.map((x) => x.val).sort()).toEqual([2, 4]);
  expect(cloned.neighbors[0]).not.toBe(n2);
});

test("handles null input", () => {
  expect(cloneGraph(null)).toBeNull();
});
