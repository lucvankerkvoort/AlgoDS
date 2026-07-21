# Design the Control Plane for an Autonomous Coding Agent

## Scenario

You're building a coding agent that can read a codebase, make changes,
and open pull requests autonomously in response to tickets/issues.
Design the **control plane** -- the layer of infrastructure that governs
what the agent is allowed to do, how it does it safely, and how its
actions are reviewed.

## Guiding Questions

- Can the agent merge its own PRs, or only open them?
- What does the agent have write access to -- a real branch, a fork, an
  isolated clone?
- What tools/actions does the agent need at minimum (read files, run
  tests, run linters, make commits, open a PR) -- and what should it
  explicitly *not* be able to do (force-push, modify CI config, access
  secrets)?
- How do you know if a generated change is safe *before* a human reviews
  it (tests, static analysis, sandboxed execution)?
- If the agent goes off the rails mid-task, how do you stop it, and how
  much has already happened by the time someone notices?
- How do you reconstruct, after the fact, exactly what the agent did
  and why, for any given PR?

## Your Write-Up

_Sketch your design here before revealing the reference approach._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**Execution environment**

- The agent operates on an isolated clone/worktree of the repo inside a
  [sandbox](../sandboxing.md) -- never directly against the shared
  remote. No production credentials, no network access beyond package
  registries needed to run tests, ephemeral per task.

**Tool allowlist ([policy enforcement](../policy-enforcement.md))**

- Allowed: read files, write files (within the sandboxed clone), run
  tests, run linters/formatters, `git commit`, `git push` (to a
  scoped, agent-owned branch prefix like `agent/*` only), open a PR via
  API.
- Explicitly disallowed: force-push, push to `main`/protected branches,
  modify CI/CD configuration files, merge PRs, read or write repository
  secrets, install arbitrary system packages outside a pre-approved
  list.
- These are enforced at the Git-hosting-platform level (branch
  protection rules, required reviewers) *and* at the agent's tool layer
  -- redundant enforcement, not just one or the other.

**Pre-PR validation ([output validation](../output-validation-evals.md))**

- Before a PR is opened, the sandboxed environment runs the full test
  suite, linter, and type checker against the agent's change. A change
  that fails any of these is never surfaced as a PR at all -- it's
  either auto-retried by the agent or discarded with a log entry.
- A static diff-risk classifier (or simple heuristics: lines changed,
  files touched, whether CI config or auth-related code was touched)
  flags "high risk" changes for extra scrutiny.

**Human-in-the-loop checkpoint**

- The agent may **open** a PR autonomously (reversible, low blast
  radius -- an unmerged PR affects nothing). It may **never merge**
  autonomously (irreversible once deployed, potentially high blast
  radius) -- see [human-in-the-loop](../human-in-the-loop.md). A human
  reviewer must approve and merge, same as any other contributor's PR.
- High-risk-flagged PRs (per the classifier above) get an additional
  required reviewer or a mandatory security review label, rather than
  the standard single-reviewer path.

**Audit trail ([audit/observability](../audit-observability.md))**

- Every task run gets a durable trace: the originating ticket/issue,
  every file read, every intermediate reasoning step (if exposed), the
  full diff produced, test/lint results, and the resulting PR link --
  stored separately from the repo itself so it survives even if the PR
  is later deleted or the branch is force-pushed over.
- The PR description itself includes a summary of the agent's reasoning
  and a link to the full trace, so a human reviewer doesn't have to dig
  through a separate system to get context.

**Kill switch**

- A single, fast-acting control (a flag, a revoked API token) that
  immediately stops the agent from creating new branches/PRs/commits,
  checked at the start of every task -- separate from any per-task
  approval flow, so an operator doesn't need to hunt down individual
  in-flight tasks to halt the whole system.

</details>
