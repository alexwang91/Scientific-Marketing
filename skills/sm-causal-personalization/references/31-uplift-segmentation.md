# 31 Uplift Segmentation

## Core Position

Uplift segmentation separates customers by treatment effect, not by predicted conversion.

The point is not to find the most responsive-looking group. The point is to stop paying for outcomes that would have happened anyway.

AI can help describe, cluster, and explain candidate segments. It cannot turn a non-random comparison into an uplift segment.

## Segments

- Persuadables: buy or act because of treatment.
- Sure things: buy without treatment.
- Lost causes: do not respond either way.
- Sleeping dogs: treatment reduces purchase, trust, margin, or retention.

## Use When

Use this for offers, coupons, winback, retention, lifecycle, paid audience suppression, and sales outreach.

## Do Not Use When

- Treatment and control were not comparable.
- The sample is too small to split into segments.
- The treatment cost is unknown.
- The team cannot act differently by segment.

## Method

1. Randomly assign treatment and control.
2. Compare treated and control outcomes by segment.
3. Calculate lift, cost, and margin.
4. Suppress sure things from costly offers.
5. Avoid sleeping dogs.
6. Retest segments that look valuable before scaling.
7. Ask AI to summarize segment hypotheses only after treatment/control evidence is visible.
8. Convert any AI-written segment story into a testable rule, such as eligibility, suppression, or treatment priority.

## Inputs

- Treatment assignment.
- Control group.
- Segment variables.
- Outcome.
- Cost and margin.
- Guardrails.

## Outputs

- Uplift segment table.
- Suppression rules.
- Treatment priority list.
- Retest plan for high-value segments.
- Segment explanation with evidence labels: observed lift, user signal, inference, and open question.

## Validation

The table must compare treated and control outcomes. A high conversion rate alone does not show lift.

Segments should be large enough to support action. Tiny segments belong in research notes, not budget rules.

## Failure Modes

- Calling RFM segments uplift segments.
- Treating discount use as proof the discount worked.
- Ignoring profit and guardrails.
- Creating segments the channel cannot target.
- Letting AI invent personas for noisy or tiny segments.
- Naming segments in a way that implies causality before validation.

## Language Notes

Use "worth treating" only when lift and margin support it.

Avoid "high-value segment" unless value is incremental.

Use "candidate uplift segment" before retest. Use "validated uplift segment" only after a comparable treatment/control read.
