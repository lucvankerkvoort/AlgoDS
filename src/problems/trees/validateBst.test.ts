import { isValidBST } from "./validateBst";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("validates BST invariant across the whole subtree, not just parent", () => {
  expect(isValidBST(buildTreeLevelOrder([2, 1, 3]))).toBe(true);
  expect(isValidBST(buildTreeLevelOrder([5, 1, 4, null, null, 3, 6]))).toBe(false);
  expect(isValidBST(buildTreeLevelOrder([5, 4, 6, null, null, 3, 7]))).toBe(false);
  expect(isValidBST(null)).toBe(true);
});
