# 37 Data Contract

## Core Position

No clean exposure log, no causal personalization.

The data contract is part of the method. Without it, the system will confuse targeting, exposure, content, and outcome.

## Required Entities

- User or account ID.
- Decision point ID.
- Treatment ID.
- Content version ID.
- Assignment timestamp.
- Exposure timestamp.
- Channel.
- Eligibility state.
- Suppression reason.
- Policy version.
- Randomization or exploration flag.
- Holdout flag.
- Outcome event.
- Outcome timestamp.
- Cost.
- Margin or value.
- Guardrail events.

## Treatment Log

Log every eligible decision, not only delivered messages.

Required fields:

- `decision_id`
- `subject_id`
- `decision_time`
- `eligible`
- `assigned_treatment_id`
- `delivered_treatment_id`
- `content_version_id`
- `channel`
- `policy_version`
- `assignment_probability`
- `holdout`
- `suppression_reason`

## Outcome Log

Required fields:

- `subject_id`
- `outcome_name`
- `outcome_time`
- `outcome_value`
- `revenue`
- `margin`
- `cost`
- `guardrail_event`

## AI Content Log

Required fields:

- `content_version_id`
- `treatment_id`
- `prompt_or_template_id`
- `model_or_tool`
- `generation_time`
- `approved_by`
- `claim_boundary`
- `review_status`

## Minimum Quality Checks

- Treatment and holdout are comparable at assignment.
- Assignment happens before outcome.
- Exposure is separated from assignment.
- Content versions are stable during a test window.
- Treatment cost is attached before readout.
- Suppression reasons are logged.
- Missing outcomes are understood, not silently dropped.

## Output Rule

If any required field is unavailable, say which decision becomes weaker:

- Lift estimation.
- Segment interpretation.
- Next-best-treatment selection.
- Bandit reward learning.
- Governance audit.

## Failure Modes

- Measuring only people who opened or clicked.
- Treating delivered messages as random assignment.
- Losing no-treatment records.
- Changing copy mid-test without a version ID.
- Reading revenue without subtracting treatment cost.
