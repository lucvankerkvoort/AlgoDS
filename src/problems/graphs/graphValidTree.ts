/**
 * LeetCode 261. Graph Valid Tree
 *
 * Given `n` nodes and a list of undirected edges, determine whether they
 * form a valid tree: connected, and with no cycles.
 *
 * Key fact: an undirected graph with n nodes is a tree iff it has
 * exactly n - 1 edges AND is fully connected.
 *
 * Hint: Union-Find. Check edge count first, then union all edges --
 * a union that fails (already connected) means there's a cycle.
 */

export function validTree(n: number, edges: number[][]): boolean {
  throw new Error("Not implemented");
}
