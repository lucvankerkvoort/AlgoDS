import { kthSmallest } from "./kthSmallestElementInBst";
import { buildTreeLevelOrder } from "../../common/treeNode";

test("finds the kth smallest via in-order traversal", () => {
  expect(kthSmallest(buildTreeLevelOrder([3, 1, 4, null, 2]), 1)).toBe(1);
  expect(kthSmallest(buildTreeLevelOrder([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(3);
});
