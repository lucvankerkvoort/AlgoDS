/**
 * Approach: the most frequent task dictates the schedule's shape. If
 * maxFreq is the highest count and maxCount is how many tasks share it,
 * we need at least (maxFreq - 1) full cooldown "chunks" of size (n+1),
 * plus one slot per task tied for most frequent at the very end. That
 * lower bound can never be beaten, and is always achievable by
 * round-robining the remaining tasks into the idle slots, so the answer
 * is max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount).
 * Time: O(tasks.length). Space: O(1) (bounded alphabet).
 */

export function leastInterval(tasks: string[], n: number): number {
  const counts = new Map<string, number>();
  for (const t of tasks) counts.set(t, (counts.get(t) ?? 0) + 1);

  const maxFreq = Math.max(...counts.values());
  const maxCount = [...counts.values()].filter((c) => c === maxFreq).length;

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}
