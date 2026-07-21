# AI Agent Governance

A second parallel learning track alongside [`system-design/`](../system-design/)
in this repo -- same goal (staying sharp on an emerging discipline),
different subject: the checks and balances that make it safe to hand an
AI agent real power to write code, take actions, and touch production
systems.

As agents move from "suggests code in an editor" to "opens PRs,
queries production databases, issues refunds, deploys to production" --
autonomously, with real permissions -- a layer of governance has to
exist around them, the same way DevOps and SRE practices emerged around
traditional deployment once "ship code to production" stopped being a
manual, single-person action and became something systems did
continuously, at scale, on their own. This track covers that emerging
layer: containment, authorization, validation, accountability, and
knowing where a human still needs to be in the loop.

No prior exposure to agent governance assumed -- this is written for
someone with a solid general software engineering background who's new
to this specific vocabulary.

## How to use this track

1. Work through the topics in the suggested order below -- each builds
   on concepts from the ones before it.
2. Each topic file ends with a handful of quiz questions; answers are
   in collapsible `<details>` sections so you can self-check without
   accidentally reading ahead.
3. Once you've covered the fundamentals, move to
   [`practice-problems/`](practice-problems/) and work through the
   applied design exercises -- write your own approach before revealing
   the reference approach.
4. Use [`glossary.md`](glossary.md) any time you hit an unfamiliar term
   and don't want to go find the whole topic file.
5. Check off topics as you complete them by editing this file (`[ ]` →
   `[x]`).

## Topics (suggested learning order)

- [ ] [Sandboxing](sandboxing.md)
      -- runtime isolation and blast-radius limiting: containing the damage before it can happen.
- [ ] [Policy Enforcement](policy-enforcement.md)
      -- pre-action authorization, tool allowlisting, and policy-as-code: deciding what an agent may attempt at all.
- [ ] [Output Validation & Evals](output-validation-evals.md)
      -- schema validation, hallucination detection, and contextual grounding, plus evals as a continuous practice.
- [ ] [Audit & Observability](audit-observability.md)
      -- tracing agent reasoning and tool calls, and why multi-step agentic reasoning is hard to reconstruct after the fact.
- [ ] [Human-in-the-Loop](human-in-the-loop.md)
      -- defining checkpoints where an agent must pause for approval, and override/kill-switch procedures.

## Practice problems

Applied design exercises. Each has a scenario, guiding questions to
think through before designing, space for your own write-up, and a
reference approach hidden behind a spoiler tag.

- [ ] [Design the Control Plane for an Autonomous Coding Agent](practice-problems/design-coding-agent-control-plane.md)
- [ ] [Design Guardrails for an Agent With Customer Database Access](practice-problems/design-database-access-guardrails.md)
- [ ] [Design the Audit Trail for a Multi-Agent Research Pipeline](practice-problems/design-multi-agent-audit-trail.md)
- [ ] [Design Human-in-the-Loop Escalation for a Customer Support Agent](practice-problems/design-support-agent-escalation.md)
- [ ] [Design an Agent That Can Deploy Code to Production](practice-problems/design-autonomous-deploy-agent.md)
- [ ] [Design an Output Validation & Eval Pipeline for a Report-Generating Agent](practice-problems/design-content-generation-eval-pipeline.md)

## Reference

- [`glossary.md`](glossary.md) -- alphabetized quick-lookup definitions
  of every key term across the topics above.
