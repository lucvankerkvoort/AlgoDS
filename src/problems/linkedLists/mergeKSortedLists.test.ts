import { mergeKLists } from "./mergeKSortedLists";
import { buildLinkedList, linkedListToArray } from "../../common/listNode";

test("merges k sorted lists into one", () => {
  const lists = [
    buildLinkedList([1, 4, 5]),
    buildLinkedList([1, 3, 4]),
    buildLinkedList([2, 6]),
  ];
  expect(linkedListToArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});

test("handles empty input", () => {
  expect(mergeKLists([])).toBeNull();
  expect(mergeKLists([null])).toBeNull();
});
