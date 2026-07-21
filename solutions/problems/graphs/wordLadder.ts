/**
 * Approach: BFS over the implicit graph where an edge connects two words
 * that differ by exactly one letter. BFS guarantees the first time we
 * reach endWord is via a shortest path. Time: O(n * L * 26). Space: O(n * L).
 */

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const words = new Set(wordList);
  if (!words.has(endWord)) return 0;

  const queue: Array<[string, number]> = [[beginWord, 1]];
  const visited = new Set([beginWord]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  while (queue.length > 0) {
    const [word, steps] = queue.shift()!;
    if (word === endWord) return steps;

    for (let i = 0; i < word.length; i++) {
      for (const ch of alphabet) {
        if (ch === word[i]) continue;
        const candidate = word.slice(0, i) + ch + word.slice(i + 1);
        if (words.has(candidate) && !visited.has(candidate)) {
          visited.add(candidate);
          queue.push([candidate, steps + 1]);
        }
      }
    }
  }

  return 0;
}
