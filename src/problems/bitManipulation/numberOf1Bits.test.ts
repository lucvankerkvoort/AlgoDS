import { hammingWeight } from "./numberOf1Bits";

test("counts set bits", () => {
  expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
  expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
  expect(hammingWeight(0)).toBe(0);
});
