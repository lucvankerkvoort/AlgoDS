/**
 * Approach: use a dummy head and repeatedly attach the smaller of the two
 * current nodes, advancing that list. Attach whatever remains at the end.
 * Time: O(n + m). Space: O(1) extra.
 */

import { ListNode } from "../../common/listNode";

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 ?? l2;
  return dummy.next;
}
