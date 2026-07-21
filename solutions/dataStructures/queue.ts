/**
 * Queue (FIFO) via a doubly linked list under the hood for true O(1)
 * enqueue/dequeue, plus a fixed-size circular buffer for comparison.
 */

class QNode<T> {
  val: T;
  next: QNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

export class Queue<T> {
  private headNode: QNode<T> | null = null;
  private tailNode: QNode<T> | null = null;
  private size = 0;

  enqueue(val: T): void {
    const node = new QNode(val);
    if (!this.headNode) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      this.tailNode!.next = node;
      this.tailNode = node;
    }
    this.size += 1;
  }

  dequeue(): T {
    if (!this.headNode) throw new Error("dequeue from empty queue");
    const val = this.headNode.val;
    this.headNode = this.headNode.next;
    if (!this.headNode) this.tailNode = null;
    this.size -= 1;
    return val;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  get length(): number {
    return this.size;
  }
}

export class CircularQueue<T> {
  private buf: (T | undefined)[];
  private capacity: number;
  private head = 0;
  private size = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.buf = new Array(capacity);
  }

  enqueue(val: T): void {
    if (this.size === this.capacity) throw new Error("queue is full");
    const tail = (this.head + this.size) % this.capacity;
    this.buf[tail] = val;
    this.size += 1;
  }

  dequeue(): T {
    if (this.size === 0) throw new Error("dequeue from empty queue");
    const val = this.buf[this.head] as T;
    this.head = (this.head + 1) % this.capacity;
    this.size -= 1;
    return val;
  }

  get length(): number {
    return this.size;
  }
}
