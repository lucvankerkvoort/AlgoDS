# AI Agent Governance Glossary

Concise definitions of terms used across this track, alphabetized for
quick lookup. Each links back to the topic file that covers it in
depth.

---

**Agent control plane**
The overall layer of infrastructure -- policy enforcement, sandboxing,
validation, audit, human checkpoints -- that governs what an
autonomous agent is allowed to do and how its actions are made safe
and accountable. See [policy-enforcement.md](policy-enforcement.md).

**Audit trail**
A durable, tamper-resistant, typically append-only log of what actions
an agent actually took, under whose authorization, with what result --
built for after-the-fact accountability, not just live debugging. See
[audit-observability.md](audit-observability.md).

**Blast radius**
How much could go wrong, and how far it could spread, if a given
action turns out to be a mistake. A core concept for deciding both
what to sandbox and where to place human checkpoints. See
[sandboxing.md](sandboxing.md) and [human-in-the-loop.md](human-in-the-loop.md).

**Canary rollout**
Releasing a change to a small subset of traffic/users first, expanding
gradually only if health checks stay green -- a blast-radius-limiting
technique applied to deployments. See [sandboxing.md](sandboxing.md).

**Contextual grounding**
Verifying that a claim in an agent's output is actually traceable back
to real, provided source material, rather than invented. See
[output-validation-evals.md](output-validation-evals.md).

**Ephemeral sandbox**
A sandboxed execution environment that's discarded after a single use
(or short TTL), preventing state or side effects from one run leaking
into the next. See [sandboxing.md](sandboxing.md).

**Eval (evaluation)**
An ongoing, continuously re-run practice of measuring an agent's
output quality against a representative test suite -- not a one-time
pre-launch test, since prompts, models, and tool behavior can all
drift over time. See [output-validation-evals.md](output-validation-evals.md).

**Full handoff**
A human-in-the-loop pattern where an agent stops driving a task or
conversation entirely and transfers full control to a human, as
opposed to a narrower approval checkpoint for a single action. See
[human-in-the-loop.md](human-in-the-loop.md).

**Guardrails**
Mechanisms (structural checks, policy rules, validation layers) that
constrain what an agent can do or say, catching problems before they
reach a real system or user. See [output-validation-evals.md](output-validation-evals.md)
and [policy-enforcement.md](policy-enforcement.md).

**Hallucination**
An agent asserting something (a fact, a citation, an API) that isn't
true or isn't actually supported by its given context. See
[output-validation-evals.md](output-validation-evals.md).

**Human-in-the-loop (HITL)**
A design pattern where specific points in an agent's workflow require
a human to explicitly approve, reject, or modify a proposed action
before it proceeds. See [human-in-the-loop.md](human-in-the-loop.md).

**Kill switch**
A fast-acting, centralized control that immediately halts an agent (or
a whole fleet of agents) from taking further action, independent of
any per-task approval flow. See [human-in-the-loop.md](human-in-the-loop.md).

**Lineage graph**
A traceable record of which upstream agent runs/outputs fed into a
given downstream result, used in multi-agent pipelines to localize
where an error was introduced. See [audit-observability.md](audit-observability.md).

**Observability**
The ability to see what an agent is doing while it's happening (or
shortly after) -- its reasoning steps, tool calls, and results --
primarily for live debugging. See [audit-observability.md](audit-observability.md).

**Override procedure**
The defined way a human can intervene in an agent's execution --
approve, reject, modify, or halt -- and have that intervention
actually take effect. See [human-in-the-loop.md](human-in-the-loop.md).

**Policy-as-code**
Writing authorization rules as versioned, testable code/configuration
rather than informal documentation, so they can be reviewed and
enforced mechanically. See [policy-enforcement.md](policy-enforcement.md).

**Policy enforcement**
A rules layer that checks a proposed agent action against
allowed/disallowed rules *before* it executes, blocking, allowing, or
routing it to a human accordingly. See [policy-enforcement.md](policy-enforcement.md).

**Principle of least privilege**
Giving an actor (human or agent) only the minimum access needed for
its current task, not broad access granted just in case. See
[policy-enforcement.md](policy-enforcement.md).

**Prompt injection**
An attack or failure mode where input to an agent (e.g. a user
message, a retrieved document) manipulates it into taking an action or
producing output outside its intended scope. See
[policy-enforcement.md](policy-enforcement.md).

**Sandbox**
An isolated execution environment (container, VM, restricted process)
with limited filesystem, network, and credential access, used to
contain the effects of running untrusted or unverified code/actions.
See [sandboxing.md](sandboxing.md).

**Schema validation**
A mechanical check that an agent's output matches an expected
structure (types, required fields) before it's used downstream. See
[output-validation-evals.md](output-validation-evals.md).

**Scoped credential**
A short-lived, narrowly-permissioned credential (e.g. a test API key
or a read-only database role) given to an agent instead of a broad,
real production credential. See [sandboxing.md](sandboxing.md) and
[policy-enforcement.md](policy-enforcement.md).

**Shadow agent**
An agent (or agentic automation) operating within an organization
without formal visibility, approval, or governance -- the agent
equivalent of "shadow IT." A key motivation for having a discoverable,
enforced control plane rather than relying on informal usage norms.

**Tool allowlisting**
Restricting an agent to a specific, enumerated set of permitted
tools/functions, rather than open-ended access (e.g. arbitrary shell
execution). See [policy-enforcement.md](policy-enforcement.md).

**Trace / tracing**
A structured, ordered record of an agent's full sequence of steps --
reasoning, tool calls, arguments, results -- captured as it happens.
See [audit-observability.md](audit-observability.md).
