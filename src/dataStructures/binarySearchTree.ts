/**
 * Binary search tree from scratch: insert, search, delete, in-order traversal.
 *
 * Average case O(log n) per operation on a balanced tree, O(n) worst case
 * on a degenerate (linked-list-shaped) tree.
 *
 * Reference: solutions/dataStructures/binarySearchTree.ts
 */

export class BSTNode {
  val: number;
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

export class BinarySearchTree {
  root: BSTNode | null = null;

  insert(val: number): this {
    throw new Error("Not implemented");
  }

  search(val: number): BSTNode | null {
    throw new Error("Not implemented");
  }

  /** Delete a value. Handle all three cases: leaf, one child, two children
   * (swap in the in-order successor for the two-children case). */
  delete(val: number): this {
    throw new Error("Not implemented");
  }

  inorder(): number[] {
    throw new Error("Not implemented");
  }
}
