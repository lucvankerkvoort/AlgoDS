/**
 * LeetCode 981. Time Based Key-Value Store
 *
 * Design a store that maps a key to multiple values, each stamped with a
 * timestamp. get(key, timestamp) should return the value set at the
 * largest recorded timestamp <= the given timestamp, or "" if none.
 *
 * Hint: for each key, keep a list of [timestamp, value] pairs. `set`
 * calls arrive in strictly increasing timestamp order, so appending
 * keeps each key's list sorted -- letting `get` binary search.
 */

export class TimeMap {
  set(key: string, value: string, timestamp: number): void {
    throw new Error("Not implemented");
  }

  get(key: string, timestamp: number): string {
    throw new Error("Not implemented");
  }
}
