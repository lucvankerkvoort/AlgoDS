/**
 * Approach: sort by start; walk left to right, merging into the last
 * interval in the result whenever the current interval's start is <= its
 * end. Time: O(n log n). Space: O(n).
 */

export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result: number[][] = [[...sorted[0]]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const last = result[result.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
}
