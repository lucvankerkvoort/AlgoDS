import { LRUCache } from "./lruCache";

test("evicts the least recently used entry at capacity", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toBe(1);
  cache.put(3, 3); // evicts key 2 (least recently used)
  expect(cache.get(2)).toBe(-1);
  cache.put(4, 4); // evicts key 1
  expect(cache.get(1)).toBe(-1);
  expect(cache.get(3)).toBe(3);
  expect(cache.get(4)).toBe(4);
});
