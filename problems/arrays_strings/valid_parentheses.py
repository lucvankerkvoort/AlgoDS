"""
LeetCode 20. Valid Parentheses

Given a string containing just '(){}[]', determine if the input is valid:
every open bracket must be closed by the same type, in the correct order.

Approach: push open brackets on a stack; on a close bracket, it must match
the top of the stack. Valid iff the stack is empty at the end.

Time:  O(n)
Space: O(n)
"""


def is_valid(s: str) -> bool:
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            stack.append(ch)
    return not stack


if __name__ == "__main__":
    assert is_valid("()") is True
    assert is_valid("()[]{}") is True
    assert is_valid("(]") is False
    assert is_valid("([)]") is False
    assert is_valid("{[]}") is True
    assert is_valid("(") is False
    print("All tests passed.")
