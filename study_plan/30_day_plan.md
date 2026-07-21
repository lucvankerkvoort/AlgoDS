# 30-Day FAANG Interview Prep Plan

A pragmatic pace: ~2-4 problems a day, grouped so patterns compound. Re-do
anything you couldn't solve in about 25 minutes without looking at the
reference solution -- recognition speed is the actual skill being tested.

Each entry references a stub under `src/problems/<category>/` (implement
it there; the matching test file under the same path checks your work;
the reference lives at the same path under `solutions/`).

## Week 1 — Arrays, Strings, Hashing, Two Pointers

| Day | Problems |
|-----|----------|
| 1 | `arraysStrings/twoSum`, `containsDuplicate`, `validAnagram` |
| 2 | `arraysStrings/groupAnagrams`, `topKFrequentElements`, `productOfArrayExceptSelf` |
| 3 | `arraysStrings/maximumSubarray`, `bestTimeToBuySellStock` |
| 4 | `arraysStrings/threeSum`, `containerWithMostWater` |
| 5 | `arraysStrings/longestSubstringWithoutRepeatingCharacters` |
| 6 | `arraysStrings/validParentheses`, `mergeIntervals` |
| 7 | Review + redo 2 problems from this week cold |

## Week 2 — Linked Lists, Stacks/Queues, Trees

| Day | Problems |
|-----|----------|
| 8 | `linkedLists/reverseLinkedList`, `linkedListCycle` |
| 9 | `linkedLists/mergeTwoSortedLists`, `removeNthNodeFromEnd` |
| 10 | `linkedLists/mergeKSortedLists`, `stacksQueues/minStack` |
| 11 | `stacksQueues/evaluateReversePolishNotation`, `dailyTemperatures` |
| 12 | `trees/maximumDepthBinaryTree`, `invertBinaryTree`, `binaryTreeLevelOrderTraversal` |
| 13 | `trees/validateBst`, `lowestCommonAncestorBst` |
| 14 | `trees/diameterOfBinaryTree`, `kthSmallestElementInBst`, `serializeDeserializeBinaryTree` |

## Week 3 — Heaps, Tries, Graphs, Backtracking

| Day | Problems |
|-----|----------|
| 15 | `tries/implementTrie`, `heaps/kthLargestElementInArray` |
| 16 | `heaps/findMedianFromDataStream`, `taskScheduler` |
| 17 | `graphs/numberOfIslands`, `cloneGraph` |
| 18 | `graphs/courseSchedule`, `graphValidTree` |
| 19 | `graphs/pacificAtlanticWaterFlow`, `wordLadder` |
| 20 | `backtracking/subsets`, `permutations` |
| 21 | `backtracking/combinationSum`, `wordSearch`, `nQueens` |

## Week 4 — Dynamic Programming, Binary Search, Greedy, Bit Manipulation, Design

| Day | Problems |
|-----|----------|
| 22 | `dynamicProgramming/climbingStairs`, `houseRobber`, `coinChange` |
| 23 | `dynamicProgramming/longestIncreasingSubsequence`, `longestCommonSubsequence` |
| 24 | `dynamicProgramming/wordBreak`, `uniquePaths`, `jumpGame` |
| 25 | `dynamicProgramming/editDistance`, `maximumProductSubarray` |
| 26 | `binarySearch/binarySearch`, `searchInRotatedSortedArray`, `findMinimumInRotatedSortedArray` |
| 27 | `greedy/jumpGameIi`, `gasStation` |
| 28 | `bitManipulation/*` (all four -- they're quick) |
| 29 | `design/lruCache`, `insertDeleteGetrandomO1`, `timeBasedKeyValueStore` |
| 30 | Full review: pick 5 problems at random across every category, solve cold, time yourself |

## How to use this repo day to day

1. Open a stub file under `src/problems/<category>/` and read only the
   comment (problem statement + hint). Don't peek at `solutions/` yet.
2. Implement it in place of `throw new Error("Not implemented")`.
   Time-box to ~25 minutes.
3. Run its test: `npx jest src/problems/<category>/<name>.test.ts`.
4. Once it passes (or if you're stuck past the time box), open the
   matching file under `solutions/problems/<category>/<name>.ts` and
   compare approaches -- there's often a cleaner invariant than the one
   you used.
5. If you got stuck, add the problem to a personal "redo in 3 days" list.

## Complexity cheat sheet

| Pattern | Typical complexity | Signal in the problem |
|---|---|---|
| Hash map lookup | O(n) time, O(n) space | "find pair/complement", "have I seen this" |
| Two pointers | O(n) time, O(1) space | sorted array, "pair sums to X", palindromes |
| Sliding window | O(n) time | "longest/shortest substring/subarray with property" |
| Fast/slow pointers | O(n) time, O(1) space | linked list cycles, middle of list |
| BFS | O(V+E) | shortest path, level order, unweighted graph |
| DFS / backtracking | O(exponential) typically | "all combinations/permutations/paths" |
| Binary search | O(log n) | sorted array, "minimize/maximize X such that condition" |
| Heap | O(n log k) | "top k", "kth largest", merging sorted streams |
| DP (1D) | O(n) | optimal substructure over a sequence, overlapping subproblems |
| DP (2D) | O(n*m) | two strings/sequences, grid paths |
| Union-Find | O(n * alpha(n)) | connectivity, cycle detection in undirected graphs |
| Topological sort | O(V+E) | dependency ordering, "can all tasks finish" |
