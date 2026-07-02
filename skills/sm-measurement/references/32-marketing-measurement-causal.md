# 32 Marketing Measurement Causal

## Core Position

Marketing measurement should answer what changed because of the marketing action. Platform reporting often answers who took credit.

## Contains

A/B, holdout, geo test, DAG, incrementality, uplift, sample size, guardrails, experiment duration, and decision rules.

## Use When

Use this for ROI, campaign evaluation, personalization tests, budget changes, channel comparison, and lifecycle tests.

## Method

1. Define the action.
2. Define the outcome.
3. Define what would have happened without the action.
4. Choose randomized test, holdout, geo test, quasi-experiment, or MMM.
5. Set primary metric and guardrails.
6. Decide the rule before reading results.

## Outputs

- Measurement brief.
- Causal design.
- Metric table.
- Decision rule.

## Validation

No control group or credible counterfactual means no causal claim.

## Failure Modes

- Reporting ROAS as incrementality.
- Testing too many variables at once.
- Ending early when the result looks good.
- Ignoring margin or user fatigue.

## Language Notes

Say "associated with" for correlation. Say "caused" only with a credible counterfactual.

