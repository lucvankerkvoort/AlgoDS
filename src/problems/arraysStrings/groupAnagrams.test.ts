import { groupAnagrams } from "./groupAnagrams";

function normalize(groups: string[][]): string[] {
  return groups.map((g) => [...g].sort().join(",")).sort();
}

test("groups anagrams together", () => {
  const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  expect(normalize(result)).toEqual(normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]));
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
