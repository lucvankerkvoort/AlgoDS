import { maxDepth } from "./maximumDepthBinaryTree";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("computes max depth", () => {
  expect(maxDepth(buildTreeLevelOrder([3, 9, 20, null, null, 15, 7]))).toBe(3);
  expect(maxDepth(buildTreeLevelOrder([1, null, 2]))).toBe(2);
  expect(maxDepth(null)).toBe(0);
});
