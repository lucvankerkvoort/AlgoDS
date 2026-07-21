import { BinarySearchTree } from "./binarySearchTree";

test("insert and inorder traversal is sorted", () => {
  const bst = new BinarySearchTree();
  for (const v of [5, 3, 8, 1, 4, 7, 9]) bst.insert(v);
  expect(bst.inorder()).toEqual([1, 3, 4, 5, 7, 8, 9]);
});

test("search", () => {
  const bst = new BinarySearchTree();
  for (const v of [5, 3, 8, 1, 4, 7, 9]) bst.insert(v);
  expect(bst.search(7)).not.toBeNull();
  expect(bst.search(42)).toBeNull();
});

test("delete leaf, one-child, and two-children nodes", () => {
  const bst = new BinarySearchTree();
  for (const v of [5, 3, 8, 1, 4, 7, 9]) bst.insert(v);
  bst.delete(3); // two children (1 and 4)
  expect(bst.inorder()).toEqual([1, 4, 5, 7, 8, 9]);
  bst.delete(5); // root, two children
  expect(bst.inorder()).toEqual([1, 4, 7, 8, 9]);
});
