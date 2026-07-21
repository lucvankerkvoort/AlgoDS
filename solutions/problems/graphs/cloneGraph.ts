/**
 * Approach: DFS with a map from original node -> clone, created before
 * recursing into neighbors so cycles don't cause infinite recursion.
 * Time: O(V + E). Space: O(V).
 */

import { GraphNode } from "../../common/graphNode";

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (node === null) return null;

  const clones = new Map<GraphNode, GraphNode>();

  const dfs = (n: GraphNode): GraphNode => {
    if (clones.has(n)) return clones.get(n)!;
    const clone = new GraphNode(n.val);
    clones.set(n, clone);
    clone.neighbors = n.neighbors.map(dfs);
    return clone;
  };

  return dfs(node);
}
