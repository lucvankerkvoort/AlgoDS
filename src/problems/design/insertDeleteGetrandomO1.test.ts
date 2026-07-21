import { RandomizedSet } from "./insertDeleteGetrandomO1";

test("insert/remove report success, getRandom returns a member", () => {
  const rs = new RandomizedSet();
  expect(rs.insert(1)).toBe(true);
  expect(rs.remove(2)).toBe(false);
  expect(rs.insert(2)).toBe(true);
  expect(rs.insert(2)).toBe(false);
  expect([1, 2]).toContain(rs.getRandom());
  expect(rs.remove(1)).toBe(true);
  expect(rs.insert(1)).toBe(true);
  expect([1, 2]).toContain(rs.getRandom());
});
