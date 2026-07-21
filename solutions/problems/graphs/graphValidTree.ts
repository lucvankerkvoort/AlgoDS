/**
 * Approach: check the edge count is n - 1, then Union-Find all edges. If
 * any union fails (both endpoints already connected), there's a cycle.
 * Finally confirm every node ended up in a single component.
 * Time: O(n + e * alpha(n)). Space: O(n).
 */

export function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  for (const [a, b] of edges) {
    const ra = find(a);
    const rb = find(b);
    if (ra === rb) return false; // cycle
    parent[ra] = rb;
  }

  const roots = new Set(Array.from({ length: n }, (_, i) => find(i)));
  return roots.size === 1;
}
