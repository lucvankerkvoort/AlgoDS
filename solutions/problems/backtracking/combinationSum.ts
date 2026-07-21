/**
 * Approach: backtracking over sorted candidates. At each step, either
 * reuse the same index (to allow repeats) or move forward; prune as soon
 * as the running sum exceeds target, and stop exploring once candidates
 * are too large (since they're sorted).
 * Time: O(n^(target / minCandidate)) worst case. Space: O(target / minCandidate).
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  const sorted = [...candidates].sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];

  const backtrack = (start: number, remaining: number) => {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < sorted.length; i++) {
      if (sorted[i] > remaining) break;
      path.push(sorted[i]);
      backtrack(i, remaining - sorted[i]); // same index => reuse allowed
      path.pop();
    }
  };

  backtrack(0, target);
  return result;
}
