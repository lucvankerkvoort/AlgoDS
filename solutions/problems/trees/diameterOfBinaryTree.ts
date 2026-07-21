/**
 * Approach: post-order DFS returning each subtree's height, while
 * updating a running best for leftHeight + rightHeight (the longest path
 * through that node) as a side effect. Time: O(n). Space: O(h).
 */

import { TreeNode } from "../../common/treeNode";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let best = 0;

  const height = (node: TreeNode | null): number => {
    if (node === null) return 0;
    const leftH = height(node.left);
    const rightH = height(node.right);
    best = Math.max(best, leftH + rightH);
    return 1 + Math.max(leftH, rightH);
  };

  height(root);
  return best;
}
