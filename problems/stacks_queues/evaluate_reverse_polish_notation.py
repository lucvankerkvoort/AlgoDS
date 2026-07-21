"""
LeetCode 150. Evaluate Reverse Polish Notation

Evaluate an arithmetic expression given in postfix (RPN) form, where tokens
are either integers or one of + - * /.

Example:
    ["2","1","+","3","*"] -> 9   ((2 + 1) * 3)

Approach: a stack. Push numbers; on an operator, pop the two most recent
operands, apply the operator, and push the result back.

Time:  O(n)
Space: O(n)
"""

from typing import List


def eval_rpn(tokens: List[str]) -> int:
    stack = []
    ops = {
        "+": lambda a, b: a + b,
        "-": lambda a, b: a - b,
        "*": lambda a, b: a * b,
        # truncate toward zero, like the LeetCode spec requires
        "/": lambda a, b: int(a / b),
    }
    for tok in tokens:
        if tok in ops:
            b = stack.pop()
            a = stack.pop()
            stack.append(ops[tok](a, b))
        else:
            stack.append(int(tok))
    return stack[-1]


if __name__ == "__main__":
    assert eval_rpn(["2", "1", "+", "3", "*"]) == 9
    assert eval_rpn(["4", "13", "5", "/", "+"]) == 6
    assert eval_rpn(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]) == 22
    print("All tests passed.")
