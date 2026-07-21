/**
 * LeetCode 380. Insert Delete GetRandom O(1)
 *
 * Design a structure supporting insert, remove, and getRandom (uniform
 * over current elements), all averaging O(1).
 *
 * Hint: a dynamic array for O(1) getRandom (need index access) paired
 * with a hash map from value -> its index in the array. To delete in
 * O(1), swap the target with the last element (updating the map), then
 * pop the array's last slot -- avoiding an O(n) shift.
 */

export class RandomizedSet {
  insert(val: number): boolean {
    throw new Error("Not implemented");
  }

  remove(val: number): boolean {
    throw new Error("Not implemented");
  }

  getRandom(): number {
    throw new Error("Not implemented");
  }
}
