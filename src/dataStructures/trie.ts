/**
 * Trie (prefix tree) from scratch: insert, search, startsWith.
 *
 * Time: O(m) per operation for a word/prefix of length m.
 * Reference: solutions/dataStructures/trie.ts
 */

export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

export class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string): void {
    throw new Error("Not implemented");
  }

  search(word: string): boolean {
    throw new Error("Not implemented");
  }

  startsWith(prefix: string): boolean {
    throw new Error("Not implemented");
  }
}
