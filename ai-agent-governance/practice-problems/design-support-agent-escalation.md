# Design Human-in-the-Loop Escalation for a Customer Support Agent

## Scenario

A customer support agent handles incoming chats: answering questions,
issuing refunds, updating account details, and occasionally escalating
to a human agent. Design where the checkpoints belong -- when the agent
acts alone, when it must pause for approval, and when it should hand
off to a human entirely.

## Guiding Questions

- Is "escalate to a human" always the same action, or are there
  different kinds (approve-then-continue vs. full handoff)?
- How do you avoid escalating so often that human agents are
  overwhelmed with trivial approvals (approval fatigue)?
- How do you avoid escalating so *rarely* that a risky action slips
  through unautomated review?
- What signals suggest a conversation needs escalation *even if no
  specific risky action has been requested yet* (e.g. an angry
  customer, an ambiguous request, a legal threat)?
- Once escalated, what context does the human need to pick up the
  conversation effectively, without starting from scratch?

## Your Write-Up

_Sketch your design here before revealing the reference approach._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**Two distinct kinds of human involvement**

- **Approval checkpoint**: the agent has a specific proposed action
  ready to go, pauses, and waits for a yes/no/modify from a human, then
  *continues the conversation itself* once approved. Good fit for
  well-defined, structured actions (refund amount, account change).
- **Full handoff**: the agent stops driving the conversation entirely
  and hands it to a human agent to take over, because the situation
  itself (not a specific action) warrants a person -- e.g. the
  conversation has become emotionally charged, legally sensitive, or
  is clearly outside anything the agent's action set can resolve.
- Conflating these two is a common design mistake -- structured
  approvals should stay lightweight and fast (the agent is still doing
  the conversational work), while handoffs should be rare and reserved
  for genuinely agent-unsuited situations.

**Deciding checkpoint placement by risk (see [human-in-the-loop](../human-in-the-loop.md))**

| Action | Reversible? | Blast radius | Treatment |
|---|---|---|---|
| Answer an FAQ | Yes | Low | Fully automated |
| Update non-sensitive account info (e.g. display name) | Yes | Low | Fully automated |
| Refund under $50 | Effectively yes (small $) | Low | Fully automated, logged |
| Refund over $50, or on an old order | Costly to reverse | Medium-high | Approval checkpoint |
| Cancel a subscription / close an account | Hard to reverse cleanly | High | Approval checkpoint |
| Threat of legal action, chargeback dispute | N/A -- conversational, not a discrete action | High | Full handoff |

**Non-action signals that trigger handoff**

- Sentiment/intent classification on the conversation (not just the
  requested action) flags: repeated frustration signals, explicit
  request for a human, legal/compliance-sensitive language, or a
  request pattern the agent's tool set genuinely can't address --
  any of these triggers handoff regardless of whether a "risky action"
  was ever proposed.

**Avoiding approval fatigue**

- Approval requests are batched and summarized where possible (e.g. "3
  refunds pending, totaling $340" rather than 3 separate interrupt
  pings), and low-ambiguity approvals (refund clearly matches a stated,
  verifiable return reason) can auto-approve after a short delay unless
  a human actively intervenes -- shifting genuinely routine cases out of
  the human's active attention while still leaving a window to catch
  something unusual.
- Approval requests include the agent's reasoning and relevant context
  inline (not just "approve refund? y/n"), so a human can make a fast,
  informed decision rather than needing to reconstruct context from
  scratch each time.

**Context handoff**

- Both approval checkpoints and full handoffs come with a structured
  summary: conversation history, customer details, what the agent
  already tried, and (for handoffs) *why* this was escalated -- pulled
  from the same underlying [audit trace](../audit-observability.md)
  used for debugging, repurposed here for human consumption instead of
  engineering consumption.

</details>
