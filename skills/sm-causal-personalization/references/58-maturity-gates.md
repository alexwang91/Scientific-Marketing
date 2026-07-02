# 58 Maturity Gates

Use this when a causal personalization plan risks jumping from strategy directly to CATE, OPE, bandit, or automated allocation.

## Core Rule

Causal personalization is a staged operating system. Do not advance to a higher level until the lower-level data, experiment, and governance assets exist.

## Levels

L0: Hypothesis only

- Product, audience, channel, and treatment logic exists.
- No randomized exposure data.
- Output may recommend tests, proxies, and data pulls.
- Output must not claim CATE, ROI, or incremental effect as fact.

L1: Experiment foundation

- GCG, holdout, A/B, geo test, or credible quasi-experiment exists.
- Eligibility, exposure, no-treatment baseline, cost, and outcome are logged.
- Can estimate ATE and coarse subgroup lift.
- Suitable for first uplift readout and suppression learning.

L2: Offline policy learning

- Randomized or logged-policy data exists across repeated campaigns.
- Propensity `P(t|x)`, eligible action set, treatment IDs, costs, and outcomes are logged.
- OPE, support checks, policy simulation, and small-traffic validation are possible.
- Suitable for next-best-treatment and constrained allocation.

L3: Online learning

- L2 is stable.
- Propensity logging, guardrails, rollback, drift monitoring, and long-term holdout are live.
- Treatment arms are versioned and reviewed before serving.
- Suitable for contextual bandit or adaptive allocation.

## Gate Checklist

Before recommending CATE, OPE, bandit, or automated treatment assignment, state:

- maturity level
- missing assets
- highest defensible decision
- required next data pull or experiment
- claim boundary

## Default Mapping

- Product-country HTML launch report: usually L0 or early L1.
- Retargeting holdout readout: L1.
- CRM next-best-treatment with propensity logs: L2.
- Real-time creative allocation with exploration: L3.

## Red Lines

- Do not use observational ad logs to claim CATE unless identification assumptions are explicit and credible.
- Do not use platform ROAS as OPE.
- Do not recommend bandit when no-treatment holdout is absent.
- Do not let LLM semantic priors become effect estimates.
