/**
 * Approach: exploit BST ordering. If both p and q are smaller than the
 * current node, the LCA is in the left subtree; if both are larger, it's
 * in the right subtree; otherwise the current node is the split point,
 * i.e. the LCA. Time: O(h). Space: O(1).
 */

import { TreeNode } from "../../common/treeNode";

export function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode
): TreeNode {
  let node: TreeNode = root;
  while (true) {
    if (p.val < node.val && q.val < node.val) {
      node = node.left!;
    } else if (p.val > node.val && q.val > node.val) {
      node = node.right!;
    } else {
      return node;
    }
  }
}
