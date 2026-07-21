/**
 * Queue (FIFO), plus a fixed-size circular buffer implementation for
 * comparison. A plain array's shift() is O(n); a proper queue needs O(1)
 * enqueue/dequeue, so think about what backing structure gets you there.
 *
 * Reference: solutions/dataStructures/queue.ts
 */

export class Queue<T> {
  enqueue(val: T): void {
    throw new Error("Not implemented");
  }

  dequeue(): T {
    throw new Error("Not implemented");
  }

  isEmpty(): boolean {
    throw new Error("Not implemented");
  }

  get length(): number {
    throw new Error("Not implemented");
  }
}

export class CircularQueue<T> {
  constructor(capacity: number) {
    throw new Error("Not implemented");
  }

  enqueue(val: T): void {
    throw new Error("Not implemented");
  }

  dequeue(): T {
    throw new Error("Not implemented");
  }

  get length(): number {
    throw new Error("Not implemented");
  }
}
