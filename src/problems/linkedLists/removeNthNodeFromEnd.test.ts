import { removeNthFromEnd } from "./removeNthNodeFromEnd";
import { buildLinkedList, linkedListToArray } from "../../common/listNode";

test("removes the nth node from the end", () => {
  const head = buildLinkedList([1, 2, 3, 4, 5]);
  expect(linkedListToArray(removeNthFromEnd(head, 2))).toEqual([1, 2, 3, 5]);
});

test("handles removing the only node and the last-of-two", () => {
  expect(linkedListToArray(removeNthFromEnd(buildLinkedList([1]), 1))).toEqual([]);
  expect(linkedListToArray(removeNthFromEnd(buildLinkedList([1, 2]), 2))).toEqual([2]);
});
