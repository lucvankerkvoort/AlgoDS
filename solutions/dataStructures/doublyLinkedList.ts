/**
 * Doubly linked list with O(1) append/prepend/remove-given-node.
 *
 * Time: O(1) per operation. Space: O(n).
 */

export class DNode {
  val: number | null;
  prev: DNode | null = null;
  next: DNode | null = null;

  constructor(val: number | null) {
    this.val = val;
  }
}

export class DoublyLinkedList {
  head: DNode = new DNode(null);
  tail: DNode = new DNode(null);
  size = 0;

  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  append(val: number): DNode {
    const node = new DNode(val);
    const last = this.tail.prev!;
    last.next = node;
    node.prev = last;
    node.next = this.tail;
    this.tail.prev = node;
    this.size += 1;
    return node;
  }

  prepend(val: number): DNode {
    const node = new DNode(val);
    const first = this.head.next!;
    this.head.next = node;
    node.prev = this.head;
    node.next = first;
    first.prev = node;
    this.size += 1;
    return node;
  }

  remove(node: DNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    node.prev = null;
    node.next = null;
    this.size -= 1;
  }

  toArray(): number[] {
    const out: number[] = [];
    let cur = this.head.next;
    while (cur && cur !== this.tail) {
      out.push(cur.val as number);
      cur = cur.next;
    }
    return out;
  }
}
