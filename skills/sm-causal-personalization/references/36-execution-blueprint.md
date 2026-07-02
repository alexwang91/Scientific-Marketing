# 36 Execution Blueprint

## Core Position

Causal personalization should start as a narrow decision system, not a broad platform.

Pick one repeated decision with measurable outcomes, visible cost, and enough traffic to learn.

## Phase 0: Decision Framing

Define:

- Decision point.
- Eligible population.
- Available treatments, including no treatment.
- Business outcome.
- Cost and margin.
- Guardrails.
- Owner who can change the policy.

Exit criterion: the team can say what action may be suppressed, not only what action may be launched.

## Phase 1: Treatment Library

Create a controlled menu:

- No treatment.
- Low-cost nudge.
- Content or education.
- Social proof or reassurance.
- Offer or discount.
- Sales or service outreach.
- Channel or timing change.
- Product or experience change.

Each treatment needs an ID, description, cost, eligibility rule, claim boundary, and content version.

Exit criterion: every treatment can be logged and compared.

## Phase 2: Measurement Design

Choose the smallest credible design:

- Individual randomized holdout when possible.
- Geo or store test when individual randomization is impossible.
- Switchback test when timing is the main variable.
- Quasi-experimental design only when experiments are unavailable.

Exit criterion: there is a credible no-treatment or business-as-usual comparison.

## Phase 3: First Lift Read

Estimate:

- Average treatment effect.
- Segment or context lift.
- Incremental revenue.
- Incremental margin.
- Guardrail movement.
- Sleeping-dog risk.

Exit criterion: the team knows what not to do.

## Phase 4: Policy Pilot

Create a simple decision rule:

- Treat only positive expected net lift groups.
- Suppress sure things from costly treatments.
- Suppress sleeping dogs.
- Keep exploration and holdout.
- Use AI only inside approved treatment boundaries.

Exit criterion: the policy beats business-as-usual on incremental value and passes guardrails.

## Phase 5: Sales Orchestration

Turn lift estimates into allocation:

- Rank customers or accounts by expected net incremental value.
- Choose treatment, discount, channel, timing, or sales action.
- Apply budget, inventory, frequency, margin, and sales-capacity constraints.
- Keep no treatment as an active action.
- Reserve exploration and holdout.

Exit criterion: the team can explain why each treated group is worth treating and why each suppressed group is left alone.

## Phase 6: Adaptive Learning

Move to contextual bandits or policy learning only when:

- Outcomes arrive fast enough.
- Treatment logging is clean.
- Exploration is allowed.
- Guardrails are automated.
- Rollback is defined.

Exit criterion: the system can learn without losing auditability.

## Deliverables

- Causal personalization brief.
- Treatment library.
- Data contract.
- Experiment or holdout plan.
- Lift readout.
- Policy rule.
- Monitoring dashboard spec.
- Governance checklist.
- Sales orchestration rule.

## Failure Modes

- Starting with model selection before treatment design.
- Launching AI-generated content before version logging exists.
- Optimizing discount redemption instead of incremental margin.
- Scaling before learning who should receive no treatment.
