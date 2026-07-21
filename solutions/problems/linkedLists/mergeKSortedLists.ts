/**
 * Approach: a simple binary min-heap (array + sift, keyed by node value)
 * holding each list's current node. Repeatedly pop the smallest, append
 * it to the result, and push its successor.
 * Time: O(N log k), N = total nodes, k = number of lists. Space: O(k).
 */

import { ListNode } from "../../common/listNode";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap: ListNode[] = [];

  const siftUp = (i: number) => {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[i].val < heap[parent].val) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else break;
    }
  };
  const siftDown = (i: number) => {
    const n = heap.length;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let smallest = i;
      if (l < n && heap[l].val < heap[smallest].val) smallest = l;
      if (r < n && heap[r].val < heap[smallest].val) smallest = r;
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
  };
  const push = (node: ListNode) => {
    heap.push(node);
    siftUp(heap.length - 1);
  };
  const pop = (): ListNode => {
    const top = heap[0];
    const last = heap.pop()!;
    if (heap.length > 0) {
      heap[0] = last;
      siftDown(0);
    }
    return top;
  };

  for (const node of lists) if (node) push(node);

  const dummy = new ListNode();
  let tail = dummy;
  while (heap.length > 0) {
    const node = pop();
    tail.next = node;
    tail = tail.next;
    if (node.next) push(node.next);
  }
  return dummy.next;
}
