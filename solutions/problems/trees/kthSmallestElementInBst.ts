/**
 * Approach: an in-order traversal of a BST visits nodes in ascending
 * order, so walk it iteratively with an explicit stack and stop at the
 * kth node, avoiding building the full traversal array.
 * Time: O(h + k). Space: O(h).
 */

import { TreeNode } from "../../common/treeNode";

export function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let node = root;
  let remaining = k;

  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop()!;
    remaining -= 1;
    if (remaining === 0) return node.val;
    node = node.right;
  }
  throw new Error("k is out of range");
}
