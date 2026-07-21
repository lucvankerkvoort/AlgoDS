/**
 * Approach: pre-order DFS, encoding None children as a sentinel ("#").
 * That single sentinel is enough to reconstruct the exact structure on
 * deserialization, since pre-order + explicit nulls is unambiguous.
 * Time: O(n) for both. Space: O(n).
 */

import { TreeNode } from "../../common/treeNode";

const NULL_MARKER = "#";

export function serialize(root: TreeNode | null): string {
  const parts: string[] = [];
  const walk = (node: TreeNode | null) => {
    if (node === null) {
      parts.push(NULL_MARKER);
      return;
    }
    parts.push(String(node.val));
    walk(node.left);
    walk(node.right);
  };
  walk(root);
  return parts.join(",");
}

export function deserialize(data: string): TreeNode | null {
  const values = data.split(",");
  let i = 0;

  const build = (): TreeNode | null => {
    const val = values[i];
    i += 1;
    if (val === NULL_MARKER) return null;
    const node = new TreeNode(Number(val));
    node.left = build();
    node.right = build();
    return node;
  };

  return build();
}
