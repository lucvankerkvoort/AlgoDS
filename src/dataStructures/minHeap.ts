/**
 * Binary min-heap built from scratch (array-backed) with sift up/down,
 * so you understand what a priority queue library does under the hood.
 *
 * push/pop: O(log n). peek: O(1).
 * Reference: solutions/dataStructures/minHeap.ts
 */

export class MinHeap {
  private data: number[] = [];

  get length(): number {
    return this.data.length;
  }

  peek(): number {
    throw new Error("Not implemented");
  }

  push(val: number): void {
    throw new Error("Not implemented");
  }

  pop(): number {
    throw new Error("Not implemented");
  }
}
