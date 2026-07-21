/**
 * Binary search tree from scratch: insert, search, delete, in-order traversal.
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
    this.root = this.insertNode(this.root, val);
    return this;
  }

  private insertNode(node: BSTNode | null, val: number): BSTNode {
    if (node === null) return new BSTNode(val);
    if (val < node.val) node.left = this.insertNode(node.left, val);
    else if (val > node.val) node.right = this.insertNode(node.right, val);
    return node;
  }

  search(val: number): BSTNode | null {
    let node = this.root;
    while (node) {
      if (val === node.val) return node;
      node = val < node.val ? node.left : node.right;
    }
    return null;
  }

  delete(val: number): this {
    this.root = this.deleteNode(this.root, val);
    return this;
  }

  private deleteNode(node: BSTNode | null, val: number): BSTNode | null {
    if (node === null) return null;
    if (val < node.val) {
      node.left = this.deleteNode(node.left, val);
    } else if (val > node.val) {
      node.right = this.deleteNode(node.right, val);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.val = successor.val;
      node.right = this.deleteNode(node.right, successor.val);
    }
    return node;
  }

  inorder(): number[] {
    const out: number[] = [];
    const walk = (node: BSTNode | null) => {
      if (!node) return;
      walk(node.left);
      out.push(node.val);
      walk(node.right);
    };
    walk(this.root);
    return out;
  }
}
