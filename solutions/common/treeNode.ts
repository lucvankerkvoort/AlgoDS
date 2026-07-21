/** Shared binary-tree node, used by the trees problems. */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** [3, 9, 20, null, null, 15, 7] (LeetCode style) -> root TreeNode. */
export function buildTreeLevelOrder(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;
    if (i < values.length) {
      const leftVal = values[i];
      i += 1;
      if (leftVal !== null) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
    }
    if (i < values.length) {
      const rightVal = values[i];
      i += 1;
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
    }
  }
  return root;
}

/** Inverse of buildTreeLevelOrder, trims trailing nulls. */
export function treeToLevelOrder(root: TreeNode | null): Array<number | null> {
  if (!root) return [];
  const out: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (out.length > 0 && out[out.length - 1] === null) {
    out.pop();
  }
  return out;
}
