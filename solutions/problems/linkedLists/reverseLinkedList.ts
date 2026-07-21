/**
 * Approach: walk the list, rewiring each node's `next` pointer to point
 * at the previous node instead of the next one.
 * Time: O(n). Space: O(1).
 */

import { ListNode } from "../../common/listNode";

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur = head;
  while (cur) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
