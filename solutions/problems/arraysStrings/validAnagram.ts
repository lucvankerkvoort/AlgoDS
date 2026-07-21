/**
 * Approach: compare character-frequency counts.
 * Time: O(n). Space: O(1) (bounded alphabet).
 */

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counts = new Map<string, number>();
  for (const ch of s) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  for (const ch of t) {
    const remaining = (counts.get(ch) ?? 0) - 1;
    if (remaining < 0) return false;
    counts.set(ch, remaining);
  }
  return true;
}
