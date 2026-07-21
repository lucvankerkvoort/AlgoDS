/**
 * Array-backed stack (LIFO) plus a MinStack variant that tracks the
 * running minimum in O(1) using an auxiliary stack.
 *
 * Reference: solutions/dataStructures/stack.ts
 */

export class Stack<T> {
  private data: T[] = [];

  push(val: T): void {
    throw new Error("Not implemented");
  }

  pop(): T {
    throw new Error("Not implemented");
  }

  peek(): T {
    throw new Error("Not implemented");
  }

  isEmpty(): boolean {
    throw new Error("Not implemented");
  }

  get length(): number {
    throw new Error("Not implemented");
  }
}

export class MinStack {
  push(val: number): void {
    throw new Error("Not implemented");
  }

  pop(): number {
    throw new Error("Not implemented");
  }

  top(): number {
    throw new Error("Not implemented");
  }

  getMin(): number {
    throw new Error("Not implemented");
  }
}
