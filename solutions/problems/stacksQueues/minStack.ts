/**
 * Approach: keep a second stack tracking the running minimum alongside
 * the main data stack. When pushing, push min(value, currentMin) onto
 * the min stack so it always mirrors the size of the data stack.
 * Time: O(1) per operation. Space: O(n).
 */

export class MinStack {
  private data: number[] = [];
  private mins: number[] = [];

  push(val: number): void {
    this.data.push(val);
    this.mins.push(this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]));
  }

  pop(): void {
    this.data.pop();
    this.mins.pop();
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}
