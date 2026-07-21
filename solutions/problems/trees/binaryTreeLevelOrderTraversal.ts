/**
 * Approach: BFS with a queue, processing one full level (queue snapshot
 * size) per iteration. Time: O(n). Space: O(n).
 */

import { TreeNode } from "../../common/treeNode";

export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const result: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const level: number[] = [];
    const next: TreeNode[] = [];
    for (const node of queue) {
      level.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    result.push(level);
    queue = next;
  }
  return result;
}
