# AlgoDS

A hands-on algorithms and data-structures repo for FAANG-style interview
prep, in TypeScript. Every problem is a **stub you implement yourself** --
not a pre-written answer. Each stub has a comment explaining the problem,
an example, and a hint toward the intended approach; a colocated test
file checks your implementation without giving away the answer; and a
reference solution lives separately under `solutions/` for when you're
done or stuck.

## New to TypeScript?

You said you know another language already, so here's the fast version
of what's different:

- **Types are annotations, not runtime checks.** `function f(x: number): number`
  means "the compiler will yell at you if you pass the wrong type," not
  "there's a runtime type check." Types disappear when the code runs.
- **`let`/`const` instead of `var`.** Always use these. `const` if the
  binding is never reassigned (arrays/objects can still be mutated),
  `let` otherwise.
- **`interface`/type annotations on function params** look like
  `(nums: number[], target: number): number[]`. Reading right to left:
  parameter name, colon, type.
- **Arrays**: `nums.push(x)`, `nums.pop()`, `nums.length`, `nums.map(...)`,
  `nums.slice(a, b)`. No negative indexing like Python -- use
  `nums[nums.length - 1]` for the last element.
- **Maps/Sets** replace Python dicts/sets: `new Map<string, number>()`,
  `.set(k, v)`, `.get(k)`, `.has(k)`; `new Set([1, 2, 3])`.
- **`null` vs `undefined`**: this repo mostly uses `null` for "no node/
  value here" (matches how LeetCode's TypeScript templates look).
- **Classes** look close to Java/C++: `class Foo { val: number; constructor(val: number) { this.val = val; } }`.

If you get stuck on syntax rather than the algorithm itself, that's
normal for the first few problems -- it fades fast.

## Structure

```
AlgoDS/
├── src/
│   ├── common/              # shared node classes (ListNode, TreeNode, GraphNode) -- not a problem, just infra
│   ├── dataStructures/       # 9 structures built from scratch -- YOU implement these
│   │   ├── singlyLinkedList.ts       (+ .test.ts)
│   │   ├── doublyLinkedList.ts       (+ .test.ts)
│   │   ├── stack.ts                  (+ .test.ts)
│   │   ├── queue.ts                  (+ .test.ts)
│   │   ├── binarySearchTree.ts       (+ .test.ts)
│   │   ├── trie.ts                   (+ .test.ts)
│   │   ├── unionFind.ts              (+ .test.ts)
│   │   ├── graph.ts                  (+ .test.ts)
│   │   └── minHeap.ts                (+ .test.ts)
│   └── problems/
│       ├── arraysStrings/    (12 problems, each with .ts stub + .test.ts)
│       ├── linkedLists/      (5)
│       ├── stacksQueues/     (3)
│       ├── trees/            (8)
│       ├── tries/            (1)
│       ├── heaps/            (3)
│       ├── graphs/           (6)
│       ├── backtracking/     (5)
│       ├── dynamicProgramming/ (10)
│       ├── binarySearch/     (3)
│       ├── greedy/           (2)
│       ├── bitManipulation/  (4)
│       └── design/           (3)
├── solutions/                # mirrors src/ exactly, minus the .test.ts files -- reference implementations
├── study_plan/
│   └── 30_day_plan.md
└── scripts/
    └── verify-solutions.sh   # confirms every reference solution actually passes its tests
```

76 problems/data-structures total. **Nothing under `src/` has a working
implementation yet -- that's your job.**

## Workflow

1. Open a file under `src/dataStructures/` or `src/problems/<category>/`.
   Read the comment: problem statement, example, and a hint.
2. Implement the function/class body in place of `throw new Error("Not implemented")`.
3. Run its test:
   ```bash
   npx jest src/problems/arraysStrings/twoSum.test.ts
   ```
   or run everything you've done so far:
   ```bash
   npm test
   ```
   Tests for problems you haven't touched yet will fail loudly -- that's
   expected and fine, it's not you, it's the empty stub.
4. Stuck for a while, or want to compare approaches after solving it?
   Open the matching file under `solutions/` (same path, same filename).
5. Curious whether the reference solutions are actually correct? Run:
   ```bash
   npm run verify-solutions
   ```
   This temporarily swaps every `solutions/` file into `src/`, runs the
   full suite (should be all green), and restores your stubs afterward --
   it never touches your in-progress work permanently.

## Setup

```bash
npm install
npm test                  # runs everything under src/ -- red until you implement things
npm run verify-solutions  # sanity-checks the reference solutions themselves
```

## Where to start

See [`study_plan/30_day_plan.md`](study_plan/30_day_plan.md) for a
day-by-day schedule and a pattern-recognition cheat sheet mapping problem
signals ("sorted array", "top k", "shortest path") to the technique
they're hinting at.

## Categories at a glance

| Category | What it drills |
|---|---|
| `arraysStrings` | Hashing, prefix sums, Kadane's algorithm, two pointers |
| `linkedLists` | Pointer manipulation, fast/slow pointers, merging |
| `stacksQueues` | Monotonic stacks, LIFO/FIFO simulation |
| `trees` | DFS/BFS traversal, BST invariants, tree construction |
| `tries` | Prefix trees for word/string problems |
| `heaps` | Priority queues, top-k, streaming medians |
| `graphs` | BFS/DFS, topological sort, Union-Find |
| `backtracking` | Combinatorial search with pruning |
| `dynamicProgramming` | 1D/2D DP, memoization vs. tabulation |
| `binarySearch` | Search on sorted/rotated arrays and answer spaces |
| `greedy` | Local-choice algorithms with exchange-argument proofs |
| `bitManipulation` | XOR tricks, bit counting |
| `design` | LRU-cache-style data structure design questions |
