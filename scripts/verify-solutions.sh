#!/usr/bin/env bash
# Temporarily copies every solutions/**/X.ts over the matching src/**/X.ts
# stub, runs the full test suite against the real solutions, then restores
# your stubs no matter what (even on failure or Ctrl-C).
#
# Use this to double-check a reference solution, or to confirm the repo
# itself is internally consistent. It never touches your in-progress work
# permanently -- your stub files are backed up and restored automatically.
set -euo pipefail
cd "$(dirname "$0")/.."

BACKUP_DIR="$(mktemp -d)"
cp -r src "$BACKUP_DIR/src"
restore() {
  rm -rf src
  mv "$BACKUP_DIR/src" src
}
trap restore EXIT

while IFS= read -r sol; do
  rel="${sol#solutions/}"
  cp "$sol" "src/$rel"
done < <(find solutions -name "*.ts")

npx jest
