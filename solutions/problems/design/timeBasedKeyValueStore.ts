/**
 * Approach: for each key, keep a list of [timestamp, value] pairs. `set`
 * calls arrive in strictly increasing timestamp order per the problem's
 * constraints, so appending keeps each key's list sorted -- letting
 * `get` binary search for the rightmost timestamp <= the query.
 * Time: O(1) amortized set, O(log n) get. Space: O(n).
 */

export class TimeMap {
  private store = new Map<string, Array<[number, string]>>();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) this.store.set(key, []);
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key);
    if (!entries || entries.length === 0) return "";

    let lo = 0;
    let hi = entries.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (entries[mid][0] <= timestamp) lo = mid + 1;
      else hi = mid;
    }
    return lo > 0 ? entries[lo - 1][1] : "";
  }
}
