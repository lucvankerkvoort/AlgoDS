/**
 * Approach: sliding window with a map of char -> last seen index. Expand
 * the right edge; whenever a repeat is seen inside the current window,
 * jump the left edge past its previous occurrence.
 * Time: O(n). Space: O(min(n, alphabet size)).
 */

export function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch)! >= left) {
      left = lastSeen.get(ch)! + 1;
    }
    lastSeen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}
