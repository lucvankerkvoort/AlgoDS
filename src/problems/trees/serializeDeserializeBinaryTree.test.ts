import { serialize, deserialize } from "./serializeDeserializeBinaryTree";
import { buildTreeLevelOrder, treeToLevelOrder } from "../../common/treeNode";

test("round-trips a tree through serialize/deserialize", () => {
  const root = buildTreeLevelOrder([1, 2, 3, null, null, 4, 5]);
  const data = serialize(root);
  const restored = deserialize(data);
  expect(treeToLevelOrder(restored)).toEqual(treeToLevelOrder(root));
});

test("round-trips an empty tree", () => {
  expect(deserialize(serialize(null))).toBeNull();
});
