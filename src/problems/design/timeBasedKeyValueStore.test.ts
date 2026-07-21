import { TimeMap } from "./timeBasedKeyValueStore";

test("returns the value at the largest timestamp <= the query", () => {
  const tm = new TimeMap();
  tm.set("foo", "bar", 1);
  expect(tm.get("foo", 1)).toBe("bar");
  expect(tm.get("foo", 3)).toBe("bar");
  tm.set("foo", "bar2", 4);
  expect(tm.get("foo", 4)).toBe("bar2");
  expect(tm.get("foo", 5)).toBe("bar2");
  expect(tm.get("foo", 0)).toBe("");
  expect(tm.get("missing", 1)).toBe("");
});
