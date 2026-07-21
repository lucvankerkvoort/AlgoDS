import { UnionFind } from "./unionFind";

test("union and find groups elements into components", () => {
  const uf = new UnionFind(6);
  uf.union(0, 1);
  uf.union(1, 2);
  uf.union(3, 4);
  expect(uf.connected(0, 2)).toBe(true);
  expect(uf.connected(0, 3)).toBe(false);
  expect(uf.count).toBe(3); // {0,1,2}, {3,4}, {5}

  uf.union(2, 3);
  expect(uf.connected(0, 4)).toBe(true);
  expect(uf.count).toBe(2);
});

test("union returns false when already connected", () => {
  const uf = new UnionFind(3);
  expect(uf.union(0, 1)).toBe(true);
  expect(uf.union(0, 1)).toBe(false);
});
