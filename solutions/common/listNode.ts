/** Shared singly-linked-list node, used by the linkedLists problems. */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/** [1, 2, 3] -> 1 -> 2 -> 3 -> null, returns the head (or null if empty). */
export function buildLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  for (const v of values) {
    const node = new ListNode(v);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }
  return head;
}

export function linkedListToArray(head: ListNode | null): number[] {
  const out: number[] = [];
  let node = head;
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}
