/**
 * Doubly linked list with O(1) append/prepend/remove-given-node.
 * Backbone for structures like LRU caches.
 *
 * Sentinel head/tail nodes are already wired up for you -- they simplify
 * edge cases (empty list, removing the only node) since head.next and
 * tail.prev are never null.
 *
 * Reference: solutions/dataStructures/doublyLinkedList.ts
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

  /** Insert a new node holding `val` just before the tail sentinel. Returns the new node. */
  append(val: number): DNode {
    throw new Error("Not implemented");
  }

  /** Insert a new node holding `val` just after the head sentinel. Returns the new node. */
  prepend(val: number): DNode {
    throw new Error("Not implemented");
  }

  /** Unlink `node` from the list in O(1) (you already have a reference to it). */
  remove(node: DNode): void {
    throw new Error("Not implemented");
  }

  toArray(): number[] {
    throw new Error("Not implemented");
  }
}
