#!/usr/bin/env python3
"""
Runs every problem/data-structure module in this repo as a script, so its
embedded `if __name__ == "__main__":` self-tests execute. Prints a summary
of passes/failures. This is the one command that proves the whole repo
actually works, without hand-maintaining a separate test file per problem.

Usage:
    python scripts/run_all.py
"""

import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TARGET_DIRS = ["data_structures", "problems"]


def find_modules():
    modules = []
    for target in TARGET_DIRS:
        for path in sorted((ROOT / target).rglob("*.py")):
            if path.name == "__init__.py":
                continue
            modules.append(path)
    return modules


def main():
    modules = find_modules()
    failures = []

    for path in modules:
        rel = path.relative_to(ROOT)
        result = subprocess.run(
            [sys.executable, str(path)],
            cwd=str(ROOT),
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            failures.append((rel, result.stdout + result.stderr))
            print(f"FAIL  {rel}")
        else:
            print(f"pass  {rel}")

    print()
    print(f"{len(modules) - len(failures)}/{len(modules)} modules passed.")

    if failures:
        print("\n--- Failure details ---")
        for rel, output in failures:
            print(f"\n>>> {rel}")
            print(output)
        sys.exit(1)


if __name__ == "__main__":
    main()
