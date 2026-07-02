# 34 Policy Learning

## Core Position

Policy learning turns personalization into a decision rule: in this context, choose this treatment or choose no treatment.

The output is an operating rule, not a campaign idea.

AI is useful inside a policy system when it improves context extraction, treatment generation, explanation, monitoring, or operator review. It is not a substitute for exploration data.

## Use When

Use this when the business wants a repeatable decision system, not a one-off campaign.

## Do Not Use When

- The team has no experimental or exploration data.
- The decision is rare, manual, or high-risk.
- The organization cannot monitor the policy after launch.

## Method

1. Define the decision point.
2. Define treatments and no-treatment.
3. Define outcome, cost, and guardrails.
4. Learn a policy from experiments or observational data with causal adjustment.
5. Test the policy against business-as-usual.
6. Monitor performance and harm.
7. Define fallback behavior when confidence is low, data is missing, or guardrails trigger.
8. Document which decisions are automated, human-approved, or blocked.

## Inputs

- Decision point.
- Treatment set.
- Historical experiment, holdout, or exploration data.
- Eligibility rules.
- Business constraints.
- Monitoring owner.

## Outputs

- Policy definition.
- Data requirements.
- Test plan.
- Monitoring plan.
- Rollback rule.
- Automation boundary.
- Fallback rule.

## Validation

A policy must beat the existing rule on incremental value, not only predicted conversion.

A policy is not ready until the team can explain when it chooses no treatment.

## Failure Modes

- Learning from biased historical targeting without correction.
- No exploration data.
- Optimizing one-period purchase and harming retention.
- No rollback rule.
- No owner for monitoring drift.
- Automating a policy before the organization can explain no-treatment decisions.
- Using AI explanations as proof instead of monitoring actual incremental outcomes.

## Language Notes

Say "decision rule" when stakeholders do not need the technical term.

Say "policy" only when the rule will run repeatedly.
