# AlgoDS

A hands-on algorithms and data-structures repo for FAANG-style interview
prep. Every problem is a real, working Python solution with a docstring
explaining the problem, the approach, and its time/space complexity --
plus embedded self-tests you can run directly.

## Structure

```
AlgoDS/
├── data_structures/     # core DS built from scratch (for understanding, not just usage)
│   ├── singly_linked_list.py
│   ├── doubly_linked_list.py
│   ├── stack.py
│   ├── queue_impl.py
│   ├── binary_search_tree.py
│   ├── trie.py
│   ├── union_find.py
│   ├── graph.py
│   └── min_heap.py
├── common/               # shared node classes (ListNode, TreeNode, graph Node)
├── problems/
│   ├── arrays_strings/
│   ├── linked_lists/
│   ├── stacks_queues/
│   ├── trees/
│   ├── tries/
│   ├── heaps/
│   ├── graphs/
│   ├── backtracking/
│   ├── dynamic_programming/
│   ├── binary_search/
│   ├── greedy/
│   ├── bit_manipulation/
│   └── design/
├── study_plan/
│   └── 30_day_plan.md    # day-by-day schedule + complexity cheat sheet
└── scripts/
    └── run_all.py        # runs every module's self-tests, reports pass/fail
```

~75 solved problems across 13 categories, plus 9 from-scratch data
structure implementations.

## Running things

Every problem file is self-contained and runnable directly:

```bash
python problems/arrays_strings/two_sum.py
# -> All tests passed.
```

To verify the entire repo at once:

```bash
python scripts/run_all.py
```

If you'd rather use pytest, install dependencies first:

```bash
pip install -r requirements.txt
```

## How each file is organized

Every problem file follows the same shape:

1. **Docstring** -- the problem statement (often the LeetCode number/name),
   an example, the approach in plain English, and time/space complexity.
2. **Solution function(s)** -- the actual implementation, commented only
   where the "why" isn't obvious from the code itself.
3. **`if __name__ == "__main__":`** -- a handful of `assert` statements
   covering the normal case plus edge cases (empty input, single element,
   duplicates, etc.), ending in `print("All tests passed.")`.

This means you can read a solution top to bottom, or just run the file to
confirm it's correct without needing a separate test suite.

## Where to start

See [`study_plan/30_day_plan.md`](study_plan/30_day_plan.md) for a
day-by-day schedule, a suggested workflow for using this repo (solve
first, then compare), and a pattern-recognition cheat sheet mapping
problem signals ("sorted array", "top k", "shortest path") to the
technique they're hinting at.

## Categories at a glance

| Category | What it drills |
|---|---|
| `arrays_strings` | Hashing, prefix sums, Kadane's algorithm, two pointers |
| `linked_lists` | Pointer manipulation, fast/slow pointers, merging |
| `stacks_queues` | Monotonic stacks, LIFO/FIFO simulation |
| `trees` | DFS/BFS traversal, BST invariants, tree construction |
| `tries` | Prefix trees for word/string problems |
| `heaps` | Priority queues, top-k, streaming medians |
| `graphs` | BFS/DFS, topological sort, Union-Find |
| `backtracking` | Combinatorial search with pruning |
| `dynamic_programming` | 1D/2D DP, memoization vs. tabulation |
| `binary_search` | Search on sorted/rotated arrays and answer spaces |
| `greedy` | Local-choice algorithms with exchange-argument proofs |
| `bit_manipulation` | XOR tricks, bit counting |
| `design` | LRU/LFU-style data structure design questions |
