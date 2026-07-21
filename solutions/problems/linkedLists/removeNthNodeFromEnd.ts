/**
 * Approach: two pointers with a fixed gap of n nodes. Advance `fast` n
 * steps first (using a dummy head so removing the true head is handled
 * uniformly), then move both until `fast` hits the end; `slow` now sits
 * just before the node to remove.
 * Time: O(n). Space: O(1).
 */

import { ListNode } from "../../common/listNode";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode = dummy;
  let slow: ListNode = dummy;
  for (let i = 0; i < n; i++) fast = fast.next!;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next!;
  }
  slow.next = slow.next!.next;
  return dummy.next;
}
