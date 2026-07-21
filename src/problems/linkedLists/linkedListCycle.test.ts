import { hasCycle } from "./linkedListCycle";
import { ListNode, buildLinkedList } from "../../common/listNode";

test("detects a cycle", () => {
  const n1 = new ListNode(3);
  const n2 = new ListNode(2);
  const n3 = new ListNode(0);
  const n4 = new ListNode(-4);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n2; // cycle back into n2
  expect(hasCycle(n1)).toBe(true);
});

test("returns false for acyclic lists", () => {
  expect(hasCycle(buildLinkedList([1, 2, 3]))).toBe(false);
  expect(hasCycle(null)).toBe(false);
});
