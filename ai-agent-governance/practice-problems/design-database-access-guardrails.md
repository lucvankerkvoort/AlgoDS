# Design Guardrails for an Agent With Customer Database Access

## Scenario

You're building a support agent that needs to query a customer
database to answer questions ("what's the status of order #4521?",
"has this customer's email been verified?") and, in some cases, take
limited write actions (issuing a refund, updating a shipping address).
Design the guardrails that make this safe.

## Guiding Questions

- What does the agent actually need read access to, versus what tables
  happen to exist in the same database?
- Which actions should be pure reads, which should be writes with a cap
  or threshold, and which should never be automatable at all?
- How do you prevent the agent from being tricked (via a cleverly
  worded customer message) into taking an action outside its intended
  scope -- a form of prompt injection?
- What happens if the agent's query logic has a bug and it accidentally
  matches the wrong customer's records?
- How would you know, after the fact, exactly which customer records an
  agent looked at or modified, and why?

## Your Write-Up

_Sketch your design here before revealing the reference approach._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**Scoped data access ([policy enforcement](../policy-enforcement.md))**

- The agent never gets a general-purpose database credential. It gets a
  narrowly scoped service account/API that only exposes specific,
  purpose-built read queries (`get_order_status(order_id)`,
  `get_account_email_verification(account_id)`) -- not raw SQL access
  to arbitrary tables. This makes "what can the agent possibly touch"
  an explicit, enumerable list rather than "everything the database
  connection happens to allow."
- Writes are exposed as similarly narrow, purpose-built actions
  (`issue_refund(order_id, amount)`, `update_shipping_address(order_id,
  new_address)`) -- never a generic "run this update statement."

**Tiered authorization by risk**

- Reads (order status, account details for the *currently authenticated
  customer only*): fully automated, no approval needed -- low blast
  radius, easily reversible (a wrong read has no side effect).
- Small, capped writes (refund under a fixed dollar threshold, address
  update on an unshipped order): automated, but logged prominently and
  rate-limited per customer/session to blunt any single-session damage.
- Large or unusual writes (refund above threshold, refund on an order
  older than a defined window, any write touching a *different*
  customer's account than the one authenticated in this session):
  requires a [human-in-the-loop](../human-in-the-loop.md) approval
  before executing.

**Guarding against scope confusion / injection**

- Every query/action is executed with the *authenticated customer's
  ID* hard-bound at the infrastructure layer (not something the agent
  can override via clever phrasing in the conversation) -- so even if a
  customer's message tries to manipulate the agent into asking about
  "customer #9999 instead," the underlying tool call is still scoped to
  the actual authenticated session's customer ID and can't reach
  another customer's data at all, regardless of what the agent
  "decides" to do.
- [Output validation](../output-validation-evals.md) checks that any
  customer-identifying data mentioned in the agent's response actually
  matches the authenticated session's customer, catching any residual
  cross-account leakage before it reaches the customer.

**Containment for the (hopefully rare) mistake**

- Even scoped write actions run through application-level logic that
  itself enforces sane bounds (e.g. a refund action physically cannot
  exceed the original order amount) -- redundant to the policy layer,
  so a policy misconfiguration alone can't cause an impossible action to
  succeed.

**Audit trail**

- Every read and write is logged with: authenticated customer/session
  ID, the specific action taken, arguments, result, and whether it was
  auto-approved or required (and received) human sign-off. This trail
  is queryable per-customer, so "show me everything this agent did
  involving customer #4521" is a fast, direct lookup, not a forensic
  reconstruction project.

</details>
