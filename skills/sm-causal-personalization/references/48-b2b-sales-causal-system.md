# 48 B2B Sales Causal System

## Core Position

B2B causal personalization is not lead scoring with better features.

It is a revenue intervention system: decide which account, lead, quote, rep, or buying committee should receive which sales action, at what time, under capacity, price, and relationship constraints.

## Core Decisions

Use this reference for:

- Causal lead scoring.
- Account prioritization.
- Sales outreach routing.
- Rep capacity allocation.
- Quote and discount guidance.
- AI sales coaching.
- ABM and buying committee activation.
- Human-machine routing.

## B2B Decision Grammar

Use:

`For [account or lead], at [sales moment], choose [rep action, AI action, price guidance, content, no action], because expected incremental revenue or profit is [positive/negative/unknown], measured against [baseline], with [capacity, trust, margin, compliance] guardrails.`

If the sentence cannot be completed, do not call it causal lead scoring.

## Causal Lead Scoring

Causal lead scoring ranks by incremental revenue from intervention, not predicted conversion.

Required data:

- Account or lead ID.
- Sales treatment: call, email, meeting, sequence, AI outreach, human rep, price recommendation, offer, no action.
- Assignment or routing rule.
- Rep capacity.
- Baseline or holdout.
- Opportunity creation.
- Pipeline value.
- Closed revenue.
- Gross margin.
- Sales time cost.
- Relationship or opt-out guardrails.

Output:

- Incremental revenue rank.
- Suppression list.
- Rep capacity allocation.
- Human-review boundary.
- Online validation plan.

## Pricing And Quote Guidance

B2B pricing should be treated as intervention, not prediction.

Use human-machine hybrid routing when:

- The model improves profit on routine or biased decisions.
- Reps have private information for complex deals.
- Relationship risk is high.
- The quote needs explanation or negotiation.

Output:

- Model-recommended price.
- Rep override rule.
- Margin guardrail.
- Deal complexity flag.
- Experiment or holdout design.
- Profit and win-rate readout.

## Account-Level Experiments

B2B often has small N, clustered buyers, and interference.

Use account or cluster-level design when:

- Multiple users belong to one account.
- Sales actions affect buying committee members.
- Spillovers are likely.
- Account ownership makes individual randomization impossible.

Check:

- Cluster balance.
- Sample ratio mismatch at account and user levels.
- Effective sample size.
- Spillover risk.
- Rep or territory confounding.
- Variance inflation.

Do not analyze user-level events as independent when assignment is account-level.

## AI Sales Coach HTE

AI coaching effects can be heterogeneous.

Practical rule:

- Test coaching by rep baseline skill, tenure, role, product line, and manager quality.
- Expect middle performers may benefit more than very low or very high performers.
- Route AI coaching as a treatment, not as a universal productivity layer.

Output:

- Rep segment.
- Coaching treatment.
- Baseline manager coaching.
- Productivity metric.
- Quality and customer guardrails.
- HTE readout.

## Human-Machine Routing

Use routing instead of full automation when:

- The action is high stakes.
- Human private information matters.
- Trust or relationship risk is material.
- The model is strong in routine cases but weak in edge cases.

Routing options:

- Model decides.
- Human decides with model recommendation.
- Human decides after model flags risk.
- Model drafts, human approves.
- No action.

## Production Architecture

B2B causal systems should have:

1. Data foundation: CRM, engagement, product usage, spend, rep interactions, opportunity, quote, and revenue data.
2. Prediction layer: causal ML for short-term and long-term intervention impact.
3. Optimization layer: constraints, mixed-integer optimization, bandits, and capacity allocation.
4. Serving layer: recommendation, explanation, GenAI draft, human approval, and feedback loop.
5. Experiment layer: account-level, cluster, or holdout tests.
6. Governance layer: compliance, fairness, relationship risk, and override audit.

## Failure Modes

- Ranking accounts by propensity and calling it sales uplift.
- Ignoring rep capacity and sales time.
- Randomizing users when the treatment acts at account level.
- Letting reps override model guidance without logging.
- Measuring pipeline created but not incremental revenue or profit.
- Deploying AI coaching universally despite HTE.

## Reference Anchors

- VALOR, 2026: causal lead scoring by incremental revenue and treatment-gated modeling for zero-inflated B2B sales data.
- Karlinsky-Shichor and Netzer, Marketing Science 2024: B2B pricing automation field experiment and human-machine hybrid routing.
- LinkedIn Causal Predictive Optimization and Generation: causal prediction, constrained optimization and bandits, GenAI serving layer.
- LinkedIn cluster experimentation: account or network-level designs when individual randomization breaks.
- Journal of Marketing AI sales coach experiments: HTE and inverted-U benefit for middle-ranked sales agents.
