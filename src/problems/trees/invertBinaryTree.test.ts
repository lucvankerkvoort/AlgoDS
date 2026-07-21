import { invertTree } from "./invertBinaryTree";
import { buildTreeLevelOrder, treeToLevelOrder } from "../../common/treeNode";

test("mirrors the tree", () => {
  const root = buildTreeLevelOrder([4, 2, 7, 1, 3, 6, 9]);
  const inverted = invertTree(root);
  expect(treeToLevelOrder(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
});

test("handles an empty tree", () => {
  expect(invertTree(null)).toBeNull();
});
