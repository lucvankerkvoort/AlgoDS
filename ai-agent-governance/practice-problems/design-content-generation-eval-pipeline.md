# Design an Output Validation & Eval Pipeline for a Report-Generating Agent

## Scenario

An agent generates financial summary reports for internal stakeholders,
pulling numbers from internal data sources and writing narrative
analysis around them (e.g. "revenue grew 12% quarter-over-quarter,
driven primarily by..."). Design the validation and eval pipeline that
keeps these reports trustworthy over time.

## Guiding Questions

- What's the difference between checking that a number in the report is
  *formatted* correctly versus checking that it's *correct*?
- How do you verify a narrative claim ("driven primarily by X") is
  actually supported by the underlying data, not just plausible-sounding?
- What happens when the underlying data source's schema changes, or the
  agent's prompt is tweaked -- how would you notice a quality
  regression?
- Should every report be checked the same way, or do some reports
  warrant stricter scrutiny than others?
- Who reviews a flagged report, and what do they need to see to review
  it efficiently?

## Your Write-Up

_Sketch your design here before revealing the reference approach._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**Layer 1: structural validation ([output validation](../output-validation-evals.md))**

- The report's numeric claims are required to be emitted in a
  structured, machine-checkable form alongside the narrative text (e.g.
  each number tagged with its source query/field), not just embedded as
  free-form prose. A report that doesn't conform to this structure is
  rejected before a human ever sees it -- this catches formatting
  failures cheaply and immediately.

**Layer 2: numeric grounding**

- Every structured numeric claim is programmatically re-derived
  directly from the source data (re-running the actual query the number
  claims to come from) and compared against what the agent reported.
  Any mismatch is flagged automatically -- this isn't a semantic
  judgment call, it's a deterministic check: does the claimed number
  equal the actual number.

**Layer 3: narrative grounding**

- Narrative claims ("driven primarily by X") are harder to check
  deterministically, so this layer uses a secondary
  review/verification pass: given the narrative claim and the
  underlying supporting data, is the claim actually the most
  significant contributing factor, or did the agent pick a
  plausible-sounding but secondary cause? This can be a rules-based
  check (e.g. "does X actually account for the largest share of the
  change") or a separate model-based check cross-referencing the claim
  against the data -- but it should be a *different* process than the
  one that generated the claim, not the same agent grading its own
  work.

**Layer 4: continuous evals, not one-time**

- A held-out set of past reporting periods (with known-correct
  narratives, established by human analysts historically) forms a
  regression eval suite, re-run every time the prompt, model, or data
  pipeline changes -- checking that numeric grounding accuracy and
  narrative-quality scoring haven't regressed.
- Real flagged failures from production (Layer 2/3 catches) get added
  to this eval suite over time, so the suite grows to reflect actually
  observed failure modes, not just anticipated ones.

**Risk-tiered scrutiny**

- Reports going to a small internal team get the standard 4-layer check.
- Reports feeding into anything externally visible or decision-critical
  (e.g. board reporting, anything referencing regulated financial
  disclosures) get a mandatory [human-in-the-loop](../human-in-the-loop.md)
  review before distribution, regardless of how clean the automated
  checks come back -- the blast radius of a wrong number reaching an
  external audience is high enough to warrant it even after passing
  every automated layer.

**Reviewer experience**

- A flagged report is presented to a human reviewer with every claim
  annotated: which numeric checks passed/failed, which narrative claims
  triggered the secondary verification pass and why, and a direct link
  back to the source data for each -- so review is "check the 2
  flagged items" rather than "re-derive the entire report from
  scratch."

**Audit trail**

- Every generated report retains its full validation record (which
  checks ran, what they found, whether a human reviewed it and what
  they changed) permanently alongside the report itself -- so a report
  questioned months later can be traced back to exactly what was
  checked and by whom at the time it was produced.

</details>
