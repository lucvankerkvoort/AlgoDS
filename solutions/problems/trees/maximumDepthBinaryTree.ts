/**
 * Approach: recursive DFS -- depth of a node is 1 + max(depth(left), depth(right)).
 * Time: O(n). Space: O(h).
 */

import { TreeNode } from "../../common/treeNode";

export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
