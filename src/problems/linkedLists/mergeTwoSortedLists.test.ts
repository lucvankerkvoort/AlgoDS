import { mergeTwoLists } from "./mergeTwoSortedLists";
import { buildLinkedList, linkedListToArray } from "../../common/listNode";

test("merges two sorted lists", () => {
  const l1 = buildLinkedList([1, 2, 4]);
  const l2 = buildLinkedList([1, 3, 4]);
  expect(linkedListToArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
});

test("handles empty lists", () => {
  expect(mergeTwoLists(null, null)).toBeNull();
  expect(linkedListToArray(mergeTwoLists(null, buildLinkedList([0])))).toEqual([0]);
});
