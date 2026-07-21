/**
 * Array-backed stack (LIFO) plus a MinStack variant.
 * Time: O(1) per operation. Space: O(n).
 */

export class Stack<T> {
  private data: T[] = [];

  push(val: T): void {
    this.data.push(val);
  }

  pop(): T {
    const val = this.data.pop();
    if (val === undefined) throw new Error("pop from empty stack");
    return val;
  }

  peek(): T {
    if (this.data.length === 0) throw new Error("peek from empty stack");
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  get length(): number {
    return this.data.length;
  }
}

export class MinStack {
  private data: number[] = [];
  private mins: number[] = [];

  push(val: number): void {
    this.data.push(val);
    const currentMin = this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]);
    this.mins.push(currentMin);
  }

  pop(): number {
    this.mins.pop();
    return this.data.pop()!;
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}
