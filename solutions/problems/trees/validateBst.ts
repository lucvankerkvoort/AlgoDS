/**
 * Approach: DFS carrying down a valid (low, high) range for each node; a
 * node is valid iff low < node.val < high, and its children get narrowed
 * ranges. Time: O(n). Space: O(h).
 */

import { TreeNode } from "../../common/treeNode";

export function isValidBST(root: TreeNode | null): boolean {
  const valid = (node: TreeNode | null, low: number, high: number): boolean => {
    if (node === null) return true;
    if (!(low < node.val && node.val < high)) return false;
    return valid(node.left, low, node.val) && valid(node.right, node.val, high);
  };
  return valid(root, -Infinity, Infinity);
}
