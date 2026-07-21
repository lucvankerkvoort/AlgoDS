import { levelOrder } from "./binaryTreeLevelOrderTraversal";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("traverses level by level", () => {
  const root = buildTreeLevelOrder([3, 9, 20, null, null, 15, 7]);
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  expect(levelOrder(null)).toEqual([]);
  expect(levelOrder(buildTreeLevelOrder([1]))).toEqual([[1]]);
});
