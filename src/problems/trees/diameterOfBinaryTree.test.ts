import { diameterOfBinaryTree } from "./diameterOfBinaryTree";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("computes the longest path between any two nodes", () => {
  expect(diameterOfBinaryTree(buildTreeLevelOrder([1, 2, 3, 4, 5]))).toBe(3);
  expect(diameterOfBinaryTree(buildTreeLevelOrder([1, 2]))).toBe(1);
  expect(diameterOfBinaryTree(null)).toBe(0);
});
