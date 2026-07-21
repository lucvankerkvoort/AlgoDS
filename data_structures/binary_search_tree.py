"""
Binary search tree from scratch: insert, search, delete, in-order traversal.

Average case O(log n) per operation on a balanced tree, O(n) worst case
on a degenerate (linked-list-shaped) tree.
"""


class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        self.root = self._insert(self.root, val)
        return self

    def _insert(self, node, val):
        if node is None:
            return BSTNode(val)
        if val < node.val:
            node.left = self._insert(node.left, val)
        elif val > node.val:
            node.right = self._insert(node.right, val)
        return node

    def search(self, val):
        node = self.root
        while node:
            if val == node.val:
                return node
            node = node.left if val < node.val else node.right
        return None

    def delete(self, val):
        self.root = self._delete(self.root, val)
        return self

    def _delete(self, node, val):
        if node is None:
            return None
        if val < node.val:
            node.left = self._delete(node.left, val)
        elif val > node.val:
            node.right = self._delete(node.right, val)
        else:
            if node.left is None:
                return node.right
            if node.right is None:
                return node.left
            # two children: swap in the in-order successor (min of right subtree)
            successor = node.right
            while successor.left:
                successor = successor.left
            node.val = successor.val
            node.right = self._delete(node.right, successor.val)
        return node

    def inorder(self):
        out = []

        def walk(node):
            if node:
                walk(node.left)
                out.append(node.val)
                walk(node.right)

        walk(self.root)
        return out


if __name__ == "__main__":
    bst = BinarySearchTree()
    for v in [5, 3, 8, 1, 4, 7, 9]:
        bst.insert(v)
    assert bst.inorder() == [1, 3, 4, 5, 7, 8, 9]
    assert bst.search(7) is not None
    assert bst.search(42) is None
    bst.delete(3)
    assert bst.inorder() == [1, 4, 5, 7, 8, 9]
    bst.delete(5)
    assert bst.inorder() == [1, 4, 7, 8, 9]
    print("All tests passed.")
