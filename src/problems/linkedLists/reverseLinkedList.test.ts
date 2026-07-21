import { reverseList } from "./reverseLinkedList";
import { buildLinkedList, linkedListToArray } from "../../common/listNode";

test("reverses a linked list", () => {
  const head = buildLinkedList([1, 2, 3, 4, 5]);
  expect(linkedListToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
});

test("handles empty and single-node lists", () => {
  expect(reverseList(null)).toBeNull();
  const single = buildLinkedList([1]);
  expect(linkedListToArray(reverseList(single))).toEqual([1]);
});
