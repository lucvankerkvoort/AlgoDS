/**
 * LeetCode 146. LRU Cache
 *
 * Design a fixed-capacity cache supporting get(key) and put(key, value)
 * in O(1), evicting the least recently used entry when capacity is
 * exceeded.
 *
 * Hint: a hash map from key -> node combined with a doubly linked list
 * that keeps nodes ordered from most- to least-recently-used. Every
 * get/put moves the touched node to the front; when capacity is
 * exceeded, evict the node just before the tail (least-recently-used).
 * Sentinel head/tail nodes simplify the edge cases.
 */

class Node {
  key: number;
  val: number;
  prev: Node | null = null;
  next: Node | null = null;
  constructor(key = -1, val = -1) {
    this.key = key;
    this.val = val;
  }
}

export class LRUCache {
  private capacity: number;
  private cache = new Map<number, Node>();
  private head = new Node();
  private tail = new Node();

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    throw new Error("Not implemented");
  }

  put(key: number, value: number): void {
    throw new Error("Not implemented");
  }
}
