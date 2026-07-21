/**
 * Approach: a hash map from key -> node combined with a doubly linked
 * list that keeps nodes ordered from most- to least-recently-used. Both
 * structures let us find (map) and reorder (linked list) in O(1).
 * Time: O(1) per operation. Space: O(capacity).
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

  private remove(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private insertFront(node: Node): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) return -1;
    this.remove(node);
    this.insertFront(node);
    return node.val;
  }

  put(key: number, value: number): void {
    const existing = this.cache.get(key);
    if (existing) this.remove(existing);

    const node = new Node(key, value);
    this.cache.set(key, node);
    this.insertFront(node);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev!;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}
