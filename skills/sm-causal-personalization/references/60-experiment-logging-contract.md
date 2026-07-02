# 60 Experiment Logging Contract

Use this before recommending OPE, policy learning, uplift model training, or automated allocation.

## Core Rule

If the system does not log how an action was selected, future policy evaluation is weak or impossible.

## Required Event Tables

Eligibility event:

- user_id or account_id
- timestamp
- country or market
- decision_context_version
- eligible_treatment_ids
- excluded_treatment_ids
- exclusion_reasons
- feature_snapshot_version

Assignment event:

- experiment_id or policy_id
- treatment_id
- baseline_or_control_flag
- randomization_unit
- assignment_probability or propensity `P(t|x)`
- selection_reason
- budget_constraint_version
- frequency_state

Exposure event:

- treatment_id
- creative_id
- channel
- placement
- impression, click, view, open, or contact timestamp
- cost
- platform_campaign_id

Outcome event:

- conversion or target behavior
- revenue
- gross margin if available
- subsidy or discount cost
- refund, cancel, return, churn, complaint, unsubscribe, hide, or negative feedback
- attribution window and measurement window

## Minimum For Each Maturity Level

L0:

- Treatment cards and hypothesis registry.
- No effect claim.

L1:

- Assignment, exposure, outcome, and holdout flag.
- Balance and SRM checks.

L2:

- Propensity, eligible treatment set, costs, and policy version.
- Support check and OPE-ready logs.

L3:

- Online propensity, exploration probability, drift metrics, guardrails, rollback event, and long-term holdout.

## Launch Gate

Before scaling a policy, require:

- support check passes
- incremental profit estimate is positive
- confidence interval or conservative bound does not cross the loss threshold
- guardrail metrics are stable
- small-traffic test confirms direction

## Common Failure Modes

- Only logging the delivered ad, not the eligible alternatives.
- Logging click and conversion, but missing no-treatment holdout.
- Logging platform campaign cost, but not treatment-level cost.
- Changing creative content while reusing the same treatment ID.
- Using post-treatment behavior as a pre-treatment feature.
