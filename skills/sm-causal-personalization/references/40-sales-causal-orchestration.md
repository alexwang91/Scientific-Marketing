# 40 Sales Causal Orchestration

## Core Position

Sales causal orchestration turns causal estimates into executable commercial decisions.

The goal is not to predict who will buy. The goal is to allocate scarce actions, budget, discounts, messages, sales capacity, and timing to the customers or accounts where the action creates positive expected net incremental value.

## Research-Informed Thesis

Recent useful work points to the same operating model:

- Causal targeting beats propensity targeting only when the treatment effect is measured or credibly inferred.
- HTE and CATE are useful only after they are converted into an allocation rule.
- Allocation must include business constraints: budget, margin, customer experience, channel capacity, inventory, sales capacity, and risk.
- Historical experiments are an asset, but only if treatment definitions, customer covariates, outcomes, and controls can be pooled cleanly.
- Online learning is valuable when campaigns are cold-start, fast-changing, budget-constrained, or too numerous for full A/B testing.
- Segment-level stories can be biased if they are built by aggregating individual CATE without checking group-level experimental effects.

## Sales Use Cases

Use this orchestration for:

- Promotion and coupon targeting.
- Discount depth selection.
- Retention and winback offers.
- Sales rep lead prioritization.
- Account expansion nudges.
- Free trial length or onboarding intervention.
- Cross-sell and upsell recommendations.
- Paid media audience suppression.
- Spend-threshold incentives.
- Cross-channel CRM message timing and frequency.
- Ad influenceability and ad sensitivity.

## Decision Layers

### Layer 1: Decision Type

Name the action boundary:

- Audience selection: treat or do not treat.
- Treatment choice: choose among messages, offers, channels, or sales actions.
- Intensity choice: discount amount, trial length, incentive size, or contact frequency.
- Budget pacing: spend now, save budget, or explore.
- Sequencing: choose next action in a journey.
- Suppression: do not contact, do not discount, do not show ads, or route to service.

### Layer 2: Evidence Design

Choose the strongest feasible design:

1. Randomized holdout or A/B test.
2. Existing experiment pool with compatible treatments and controls.
3. Geo, store, market, or switchback test.
4. Difference-in-differences or interrupted time series with credible controls.
5. Regression discontinuity only if threshold manipulation is checked.
6. Observational DML or causal ML only when assumptions are explicit.
7. Synthetic or AI simulation only for hypothesis generation.

### Layer 3: Model Choice

Match the model to the decision:

- Binary treatment: uplift model, causal forest, R-learner, X-learner, T-learner, doubly robust learner.
- Multiple treatments: multi-treatment uplift, treatment-specific CATE, cost-sensitive treatment selection.
- Continuous or ordered treatment: dose-response, DML for continuous treatment, policy learning over discount or price levels.
- Budget-constrained allocation: knapsack, constrained optimization, budgeted causal bandit.
- Cold-start campaign: small randomized exploration, prior experiments, online learning, or representation learning from past experiments.
- Repeated journey decision: contextual bandit with holdout and guardrails.
- Executive-facing rule: interpretable policy tree or distilled segment rule.

Do not choose a model before defining treatment, baseline, outcome, cost, and allocation constraint.

### Layer 4: Economic Objective

Use expected net incremental value:

`expected_net_value = CATE(x,t) * value(x,t) - treatment_cost(t) - risk_penalty(x,t)`

Risk penalty can include:

- Margin loss.
- Discount cannibalization.
- Sales time.
- Inventory pressure.
- Unsubscribe or complaint risk.
- Return risk.
- Customer fatigue.
- Fairness or compliance risk.

### Layer 5: Constraint Solver

Convert scores into an allocation:

- Treat only if expected net value is positive.
- Prefer lower-cost treatments when expected value is similar.
- Respect budget, margin, inventory, channel, frequency, and sales-capacity constraints.
- Keep holdout and exploration.
- Keep no treatment eligible.
- Block actions that violate claim, privacy, fairness, or brand guardrails.

## Optimized Execution Flow

1. Define one repeated sales decision.
2. Create a treatment library with no treatment, costs, claims, channels, and eligibility.
3. Identify the best evidence source: new experiment, past experiments, quasi-experiment, or online exploration.
4. Build the data contract: assignment, exposure, content, policy version, cost, outcome, and guardrails.
5. Run a first lift read before personalization.
6. Estimate HTE/CATE only where sample size and evidence support it.
7. Calibrate or audit group effects before creating segment narratives.
8. Convert CATE into expected net value.
9. Solve allocation under constraints.
10. Shadow-test the policy against business-as-usual and no-treatment.
11. Map the policy into platform, ecommerce, creator/KOL, or sales activation controls.
12. Launch a randomized pilot with holdout.
13. Scale only after incremental value, activation match quality, and guardrails pass.
14. Move to bandits or policy learning when decisions repeat and outcomes arrive fast enough.

## Scenario Playbooks

### Promotion Or Coupon Targeting

Best first method:

- Randomized coupon holdout.
- Estimate uplift by prior purchase, category affinity, price sensitivity, and margin.
- Optimize net incremental margin, not coupon redemption.
- Suppress sure things and sleeping dogs.

Useful algorithms:

- Causal forest or R-learner for binary coupons.
- Multi-treatment uplift for category or discount choices.
- Knapsack optimization when budget is limited.

### Discount Depth Selection

Best first method:

- Randomize discount levels.
- Treat no-discount as a real arm.
- Estimate incremental margin by discount depth.
- Check cannibalization and return behavior.

Useful algorithms:

- Multi-arm CATE.
- Continuous-treatment DML when discount is not discrete.
- Monotonicity or business-rule constraints when needed.

### Sales Rep Lead Prioritization

Best first method:

- Randomize or rotate sales outreach for eligible leads.
- Measure incremental opportunity creation, close rate, gross margin, and sales time.
- Optimize expected incremental gross profit per sales hour.

Useful algorithms:

- Uplift model for outreach vs no outreach.
- Policy tree for interpretable territory rules.
- Capacity-constrained optimizer for rep assignment.

### Retention And Winback

Best first method:

- Include no-contact and low-cost treatment.
- Measure renewal, churn, margin, complaints, and future discount expectation.
- Watch sleeping dogs carefully.

Useful algorithms:

- CATE or uplift for treatment eligibility.
- Multi-treatment uplift for message, service call, and offer.
- Guardrailed optimization for margin and customer experience.

### Spend Threshold Incentives

Best first method:

- Check threshold bunching and manipulation.
- Compare against randomized threshold variants when possible.
- Estimate subgroup effects and profitability.

Useful algorithms:

- Regression discontinuity only when manipulation is limited.
- Bayesian or mixture approaches when manipulation exists.
- HTE by spend history, basket composition, and reward sensitivity.

### Cross-Channel CRM

Best first method:

- Define channel, timing, content, and frequency as separate treatment dimensions.
- Use holdout at user or journey level.
- Avoid optimizing only clicks or opens.

Useful algorithms:

- Contextual bandit with Thompson sampling.
- Difference-in-differences or interrupted time series when randomization is incomplete.
- Frequency guardrails and fatigue monitoring.

## Method Selection Rules

- If there is no holdout, start with measurement design.
- If treatment cost is unknown, do not optimize.
- If the action set is unstable, build the treatment library first.
- If sample size is small, use coarse segments and retest.
- If many past experiments exist, consider experiment pooling or representation learning.
- If the campaign is cold-start, use exploration before offline personalization.
- If budget is binding, optimize the decision boundary, not global prediction accuracy.
- If sales capacity is binding, optimize incremental value per constrained resource.
- If a threshold is visible to customers, test manipulation before causal claims.
- If CATE is summarized into segments, audit group-level effects.

## What AI Adds

AI is useful for:

- Extracting treatment features from old campaign briefs.
- Standardizing treatment taxonomy.
- Reading call notes, reviews, tickets, and CRM notes into candidate context.
- Generating bounded copy variants inside approved treatments.
- Explaining why a policy recommends treatment or no treatment.
- Monitoring drift, fatigue, and guardrail anomalies.
- Mapping causal segments to candidate platform proxies and creator shortlist criteria.

AI is not allowed to:

- Replace holdouts.
- Invent uplift from propensity.
- Create unlogged treatment variants.
- Turn segment stories into causal claims.
- Treat platform-reported conversions or creator affiliate sales as incrementality.

## Output Pattern

Return:

1. Decision type.
2. Evidence design.
3. Model choice.
4. Economic objective.
5. Constraint solver.
6. Pilot design.
7. Monitoring and rollback.
8. Next artifact.

End with the weakest dependency. Example:

`Weakest dependency: treatment cost is not attached to the exposure log, so the current policy can rank lift but cannot optimize profit.`
