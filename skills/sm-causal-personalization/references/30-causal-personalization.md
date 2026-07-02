# 30 Causal Personalization

## Core Position

Causal personalization asks who changes because of a marketing action. It does not ask who was likely to buy anyway.

In this skill, causal personalization means AI-assisted causal decisioning:

- AI helps propose, describe, classify, generate, and allocate treatments.
- Causal inference decides whether a treatment creates incremental value against no treatment or business-as-usual.
- Governance decides whether the treatment is allowed, fair, explainable, and worth the customer cost.

The default business question is: who should receive which treatment, who should receive no treatment, and what evidence would change that decision.

## Minimal Formal Model

- `X`: context, such as lifecycle stage, intent, category interest, price sensitivity, channel state, or risk flags.
- `T`: treatment, such as no treatment, message, offer, creative, channel, timing, sales prompt, or product experience.
- `Y`: outcome, such as purchase, renewal, retention, margin, complaint, unsubscribe, return, or long-term value.
- `tau(x) = E[Y(1) - Y(0) | X = x]`: conditional treatment effect for a context.
- `pi(x)`: policy that maps context to a treatment or no treatment.

The system should optimize expected net incremental value, not predicted conversion.

## Contains

Treatment library, no-treatment baseline, uplift, CATE, HTE, persuadables, sure things, lost causes, sleeping dogs, next-best-treatment, contextual bandit, policy learning, holdouts, and governance.

## Use When

Use this for personalized offers, CRM targeting, retention actions, paid media audiences, lifecycle messages, and budget allocation across customer groups.

## Do Not Use When

- The team only has propensity scores and no control group.
- The outcome is too rare or delayed to learn from the available data.
- The cost of a wrong treatment is high and no guardrail exists.
- The business only needs a static audience definition.

## Method

1. Define the decision point: who is deciding what, at what moment, through which system.
2. Define the treatment library: no treatment, message, offer, channel, timing, creative, human action, or product experience.
3. Define the outcome, cost, and guardrails.
4. Define the no-treatment or business-as-usual baseline.
5. Keep a control group, holdout, geo test, or exploration design.
6. Estimate incremental effect by segment or context.
7. Calculate expected net incremental value after cost and margin.
8. Allocate treatment to groups with positive expected net lift.
9. Keep exploration to avoid stale policies and blind spots.
10. Monitor fatigue, harm, drift, and policy gaming.

## Inputs

- Eligible audience.
- Treatment options.
- Outcome window.
- Treatment cost.
- Historical experiment or holdout data, if available.
- Guardrails: margin, churn, complaints, unsubscribe, returns, user fatigue.
- AI-generated treatment variants, if used.
- Legal, privacy, brand, and sensitive-group constraints.

## Outputs

- Causal personalization brief.
- Treatment library.
- Segment lift map.
- Next-best-treatment recommendation.
- Holdout and learning plan.
- Suppression rules for sure things and sleeping dogs.
- AI role map: where AI generates, ranks, explains, monitors, or escalates.
- Data contract gaps.

## Validation

Use randomized tests, holdouts, uplift modeling, CATE or HTE estimation, or contextual bandits with exploration and control.

If the only evidence is historical targeting data, label the recommendation as a hypothesis and propose the smallest holdout test.

If AI generated the treatment, validate both content quality and incremental effect. Good copy can still create no lift. High lift can still fail brand, margin, or fairness guardrails.

## Failure Modes

- Targeting high-propensity buyers and calling it personalization.
- Removing holdouts after early wins.
- Optimizing coupon redemption instead of incremental profit.
- Ignoring sleeping dogs.
- Treating "personalized" as automatically better than no treatment.
- Ignoring treatment cost.
- Letting AI generate many variants without a treatment taxonomy.
- Letting a model learn from biased historical targeting and calling the output causal.
- Optimizing short-term lift while increasing fatigue, opt-outs, returns, or complaints.
- Hiding "no treatment" because teams prefer visible activity.

## Language Notes

Prefer "treatment" over "touchpoint" when the action should cause a change.

Use "net lift" when cost or margin matters.

Prefer "incremental value" over "precision marketing" when the evidence is causal.

Avoid "AI understands the customer" unless the claim is backed by observed data. Say "AI inferred a hypothesis from these signals."

## Reference Anchors

- Amazon Science, contextual multi-armed bandits for causal marketing: optimizing incremental effects and persuadable customers.
- Columbia/Duke/HBS, personalization as causal inference, experimentation, policy learning, and foundation-model-assisted personalization.
- Wager and Athey, causal forests for heterogeneous treatment effects.
- Kunzel et al., meta-learners for conditional average treatment effects.
- Uber CausalML, practical CATE and uplift tooling for targeting and personalized engagement.
