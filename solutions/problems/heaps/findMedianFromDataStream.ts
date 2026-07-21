/**
 * Approach: two heaps. `low` is a max-heap (values negated, simulated
 * with a min-heap array) holding the smaller half; `high` is a min-heap
 * holding the larger half. Rebalance after every insert so their sizes
 * differ by at most 1 -- the median is then either the top of the larger
 * heap, or the average of both tops when sizes are equal.
 * Time: O(log n) per add, O(1) per findMedian.
 */

class MinHeap {
  private data: number[] = [];
  get size(): number {
    return this.data.length;
  }
  peek(): number {
    return this.data[0];
  }
  push(val: number): void {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.data[i] < this.data[parent]) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else break;
    }
  }
  pop(): number {
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let smallest = i;
        if (l < n && this.data[l] < this.data[smallest]) smallest = l;
        if (r < n && this.data[r] < this.data[smallest]) smallest = r;
        if (smallest === i) break;
        [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
        i = smallest;
      }
    }
    return top;
  }
}

export class MedianFinder {
  private low = new MinHeap(); // negated values => simulates a max-heap
  private high = new MinHeap();

  addNum(num: number): void {
    this.low.push(-num);
    this.high.push(-this.low.pop());
    if (this.high.size > this.low.size) {
      this.low.push(-this.high.pop());
    }
  }

  findMedian(): number {
    if (this.low.size > this.high.size) return -this.low.peek();
    return (-this.low.peek() + this.high.peek()) / 2;
  }
}
