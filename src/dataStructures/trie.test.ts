import { Trie } from "./trie";

test("insert, search, startsWith", () => {
  const trie = new Trie();
  trie.insert("apple");
  expect(trie.search("apple")).toBe(true);
  expect(trie.search("app")).toBe(false);
  expect(trie.startsWith("app")).toBe(true);
  trie.insert("app");
  expect(trie.search("app")).toBe(true);
  expect(trie.startsWith("appl")).toBe(true);
  expect(trie.startsWith("b")).toBe(false);
});
