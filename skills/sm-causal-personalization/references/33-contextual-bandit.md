# 33 Contextual Bandit

## Core Position

Contextual bandits help allocate treatments while learning. They need guardrails, exploration, and a clear reward.

Use a bandit when the environment changes fast enough that fixed A/B winners go stale.

A marketing bandit is useful only when the reward is tied to incremental value or is calibrated by holdouts. Otherwise it becomes a fast proxy optimizer.

## Use When

Use this when treatments run continuously and the team can observe outcomes fast enough to learn.

## Do Not Use When

- Outcomes arrive too slowly for learning.
- The reward is a proxy that can be gamed.
- The tactic carries high legal, brand, or customer harm risk.
- The team cannot keep a holdout.

## Method

1. Define contexts: user state, channel, device, timing, product interest, lifecycle stage.
2. Define arms: messages, offers, creatives, channels, or timing choices.
3. Define reward and guardrails.
4. Set exploration rate.
5. Keep holdout for incremental measurement.
6. Set stop rules for harmful arms.
7. Review policy drift.
8. Decide which arms AI may generate and which arms require human approval before launch.
9. Refresh arms on a fixed cadence instead of letting the model create unlimited one-off treatments.

## Inputs

- Context variables.
- Arms.
- Reward metric.
- Outcome delay.
- Exploration rule.
- Guardrails and holdout design.

## Outputs

- Bandit design.
- Context and arm list.
- Reward definition.
- Guardrail and holdout plan.
- Stop rules.
- Arm governance rule.
- Exploration budget and review cadence.

## Validation

Monitor reward, incremental lift, user harm, margin, and distribution shift.

Compare bandit allocation against business-as-usual and no-treatment where possible.

## Failure Modes

- Letting the bandit optimize clicks while hurting profit.
- Removing exploration.
- No baseline policy.
- No guardrail for user fatigue.
- Optimizing a proxy metric that the business does not value.
- Letting early winners starve exploration.
- Confusing adaptive allocation with causal proof.
- Allowing AI-generated arms to drift away from approved claims, prices, or brand language.

## Language Notes

Use "arm" for the selectable option. Use "reward" only for the metric the algorithm learns from.

Do not call it AI if the decision rule is a fixed business rule.
