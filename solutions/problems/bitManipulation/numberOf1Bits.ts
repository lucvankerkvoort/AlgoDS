/**
 * Approach: Brian Kernighan's trick -- `n & (n - 1)` clears the lowest
 * set bit. Repeating this and counting iterations until n is 0 gives the
 * popcount directly (loops only as many times as there are set bits).
 * Time: O(k), k = number of set bits. Space: O(1).
 */

export function hammingWeight(n: number): number {
  let count = 0;
  let x = n >>> 0; // treat as unsigned 32-bit
  while (x !== 0) {
    x &= x - 1;
    count += 1;
  }
  return count;
}
