/**
 * Approach: bucket sort by frequency. Frequencies range from 1..n, so
 * create n+1 buckets (index = frequency) and read off the top k from the
 * highest buckets down. Time: O(n). Space: O(n).
 */

export function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();
  for (const num of nums) counts.set(num, (counts.get(num) ?? 0) + 1);

  const n = nums.length;
  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [num, freq] of counts) buckets[freq].push(num);

  const result: number[] = [];
  for (let freq = n; freq > 0 && result.length < k; freq--) {
    for (const num of buckets[freq]) {
      result.push(num);
      if (result.length === k) break;
    }
  }
  return result;
}
