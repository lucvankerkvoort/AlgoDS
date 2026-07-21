/**
 * Disjoint Set Union (Union-Find) with path compression and union by rank.
 *
 * Amortized O(alpha(n)) per operation, effectively O(1) in practice.
 * Reference: solutions/dataStructures/unionFind.ts
 */

export class UnionFind {
  parent: number[];
  rank: number[];
  count: number; // number of disjoint components

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.count = n;
  }

  find(x: number): number {
    throw new Error("Not implemented");
  }

  /** Union the sets containing x and y. Returns false if already unioned. */
  union(x: number, y: number): boolean {
    throw new Error("Not implemented");
  }

  connected(x: number, y: number): boolean {
    throw new Error("Not implemented");
  }
}
