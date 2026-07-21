/**
 * Approach: Floyd's tortoise-and-hare. Move a slow pointer one step and a
 * fast pointer two steps at a time; if they ever meet, there's a cycle.
 * If fast reaches the end (null), there isn't.
 * Time: O(n). Space: O(1).
 */

import { ListNode } from "../../common/listNode";

export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
