/**
 * Singly linked list built from scratch: append, prepend, delete, find, reverse.
 *
 * Implement each method below. Reference: solutions/dataStructures/singlyLinkedList.ts
 *
 * Target: O(1) append/prepend (track the tail), O(n) delete/find/reverse.
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

  /** Add a value at the end of the list. Returns `this` for chaining. */
  append(val: number): this {
    throw new Error("Not implemented");
  }

  /** Add a value at the start of the list. Returns `this` for chaining. */
  prepend(val: number): this {
    throw new Error("Not implemented");
  }

  /** Remove the first node with this value. Returns true if something was removed. */
  delete(val: number): boolean {
    throw new Error("Not implemented");
  }

  /** Return the first node with this value, or null if not found. */
  find(val: number): Node | null {
    throw new Error("Not implemented");
  }

  /** Reverse the list in place. Returns `this` for chaining. */
  reverse(): this {
    throw new Error("Not implemented");
  }

  toArray(): number[] {
    throw new Error("Not implemented");
  }
}
