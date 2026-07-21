/**
 * Approach: bucket words by their sorted-character signature (anagrams
 * share the same signature). Time: O(n * k log k). Space: O(n * k).
 */

export function groupAnagrams(strs: string[]): string[][] {
  const buckets = new Map<string, string[]>();
  for (const s of strs) {
    const key = [...s].sort().join("");
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(s);
  }
  return [...buckets.values()];
}
