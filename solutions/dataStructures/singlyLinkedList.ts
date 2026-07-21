/**
 * Singly linked list built from scratch: append, prepend, delete, find, reverse.
 *
 * Time: O(1) append/prepend (tail tracked), O(n) delete/find/reverse.
 * Space: O(n) for n nodes.
 */

export class Node {
  val: number;
  next: Node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

export class SinglyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size = 0;

  append(val: number): this {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size += 1;
    return this;
  }

  prepend(val: number): this {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.size += 1;
    return this;
  }

  delete(val: number): boolean {
    let prev: Node | null = null;
    let cur = this.head;
    while (cur) {
      if (cur.val === val) {
        if (prev) prev.next = cur.next;
        else this.head = cur.next;
        if (cur === this.tail) this.tail = prev;
        this.size -= 1;
        return true;
      }
      prev = cur;
      cur = cur.next;
    }
    return false;
  }

  find(val: number): Node | null {
    let cur = this.head;
    while (cur) {
      if (cur.val === val) return cur;
      cur = cur.next;
    }
    return null;
  }

  reverse(): this {
    let prev: Node | null = null;
    let cur = this.head;
    this.tail = this.head;
    while (cur) {
      const next: Node | null = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
    return this;
  }

  toArray(): number[] {
    const out: number[] = [];
    let cur = this.head;
    while (cur) {
      out.push(cur.val);
      cur = cur.next;
    }
    return out;
  }
}
