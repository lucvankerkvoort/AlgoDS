import { lowestCommonAncestor } from "./lowestCommonAncestorBst";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("finds the LCA using BST ordering", () => {
  const root = buildTreeLevelOrder([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])!;
  const p = root.left!; // 2
  const q = root.right!; // 8
  expect(lowestCommonAncestor(root, p, q).val).toBe(6);

  const p2 = root.left!; // 2
  const q2 = root.left!.right!; // 4
  expect(lowestCommonAncestor(root, p2, q2).val).toBe(2);
});
