# 30-Day FAANG Interview Prep Plan

A pragmatic pace: ~2-4 problems a day, grouped so patterns compound. Re-do
anything you couldn't solve in about 25 minutes without looking at the
solution -- recognition speed is the actual skill being tested.

Each entry references a file under `problems/<category>/`.

## Week 1 — Arrays, Strings, Hashing, Two Pointers

| Day | Problems |
|-----|----------|
| 1 | `arrays_strings/two_sum`, `contains_duplicate`, `valid_anagram` |
| 2 | `arrays_strings/group_anagrams`, `top_k_frequent_elements`, `product_of_array_except_self` |
| 3 | `arrays_strings/maximum_subarray`, `best_time_to_buy_sell_stock` |
| 4 | `arrays_strings/three_sum`, `container_with_most_water` |
| 5 | `arrays_strings/longest_substring_without_repeating_characters`, `two_pointers`-style review |
| 6 | `arrays_strings/valid_parentheses`, `merge_intervals` |
| 7 | Review + redo 2 problems from this week cold |

## Week 2 — Linked Lists, Stacks/Queues, Trees

| Day | Problems |
|-----|----------|
| 8 | `linked_lists/reverse_linked_list`, `linked_list_cycle` |
| 9 | `linked_lists/merge_two_sorted_lists`, `remove_nth_node_from_end` |
| 10 | `linked_lists/merge_k_sorted_lists`, `stacks_queues/min_stack` |
| 11 | `stacks_queues/evaluate_reverse_polish_notation`, `daily_temperatures` |
| 12 | `trees/maximum_depth_binary_tree`, `invert_binary_tree`, `binary_tree_level_order_traversal` |
| 13 | `trees/validate_bst`, `lowest_common_ancestor_bst` |
| 14 | `trees/diameter_of_binary_tree`, `kth_smallest_element_in_bst`, `serialize_deserialize_binary_tree` |

## Week 3 — Heaps, Tries, Graphs, Backtracking

| Day | Problems |
|-----|----------|
| 15 | `tries/implement_trie`, `heaps/kth_largest_element_in_array` |
| 16 | `heaps/find_median_from_data_stream`, `task_scheduler` |
| 17 | `graphs/number_of_islands`, `clone_graph` |
| 18 | `graphs/course_schedule`, `graph_valid_tree` |
| 19 | `graphs/pacific_atlantic_water_flow`, `word_ladder` |
| 20 | `backtracking/subsets`, `permutations` |
| 21 | `backtracking/combination_sum`, `word_search`, `n_queens` |

## Week 4 — Dynamic Programming, Binary Search, Greedy, Bit Manipulation, Design

| Day | Problems |
|-----|----------|
| 22 | `dynamic_programming/climbing_stairs`, `house_robber`, `coin_change` |
| 23 | `dynamic_programming/longest_increasing_subsequence`, `longest_common_subsequence` |
| 24 | `dynamic_programming/word_break`, `unique_paths`, `jump_game` |
| 25 | `dynamic_programming/edit_distance`, `maximum_product_subarray` |
| 26 | `binary_search/binary_search`, `search_in_rotated_sorted_array`, `find_minimum_in_rotated_sorted_array` |
| 27 | `greedy/jump_game_ii`, `gas_station` |
| 28 | `bit_manipulation/*` (all four -- they're quick) |
| 29 | `design/lru_cache`, `insert_delete_getrandom_o1`, `time_based_key_value_store` |
| 30 | Full review: pick 5 problems at random across every category, solve cold, time yourself |

## How to use this repo day to day

1. Open a problem file and read only the docstring (problem statement).
   Don't peek at the solution yet.
2. Solve it yourself first -- in a scratch file, on paper, or a whiteboard
   tool. Time-box to ~25 minutes.
3. Compare against the provided solution. Read the approach comment even
   if you got it right; there's often a cleaner invariant than the one
   you used.
4. Run it: `python problems/<category>/<file>.py` executes the embedded
   asserts and prints `All tests passed.` on success.
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
