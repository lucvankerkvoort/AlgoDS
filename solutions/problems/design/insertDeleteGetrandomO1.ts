/**
 * Approach: a dynamic array for O(1) getRandom (random access by index)
 * paired with a hash map from value -> its index in the array. To delete
 * in O(1), swap the target with the last element (updating the map),
 * then pop the array's last slot -- avoiding an O(n) shift.
 * Time: O(1) average per operation. Space: O(n).
 */

export class RandomizedSet {
  private values: number[] = [];
  private index = new Map<number, number>();

  insert(val: number): boolean {
    if (this.index.has(val)) return false;
    this.index.set(val, this.values.length);
    this.values.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.index.has(val)) return false;
    const idx = this.index.get(val)!;
    const lastVal = this.values[this.values.length - 1];
    this.values[idx] = lastVal;
    this.index.set(lastVal, idx);
    this.values.pop();
    this.index.delete(val);
    return true;
  }

  getRandom(): number {
    const i = Math.floor(Math.random() * this.values.length);
    return this.values[i];
  }
}
