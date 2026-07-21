/**
 * Approach: recursive DFS -- invert both subtrees, then swap them at this node.
 * Time: O(n). Space: O(h).
 */

import { TreeNode } from "../../common/treeNode";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const left = invertTree(root.right);
  const right = invertTree(root.left);
  root.left = left;
  root.right = right;
  return root;
}
