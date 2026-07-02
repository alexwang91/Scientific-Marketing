# 46 Decision Focused Uplift

## Core Position

Modern uplift is moving from "estimate treatment effects accurately" to "make the right allocation decision under constraints."

For marketing and sales, the useful question is not only whether `CATE(x,t)` is well estimated. The useful question is whether the ranking, budget allocation, suppression, and treatment choice increase expected net incremental value.

## Architecture Impact

Add a decision-focused gate after causal estimation:

1. Estimate effect or policy value.
2. Rank by expected net incremental value.
3. Allocate under budget, capacity, eligibility, and risk constraints.
4. Evaluate the ranking or allocation decision, not only prediction error.
5. Validate online with holdout, policy test, or lift experiment before scale.

## Why This Matters

Prediction-focused uplift can fail when:

- The top CATE scores are noisy.
- Treatment costs differ.
- Budget is limited.
- The treatment set has multiple incentive levels.
- The best business decision is no treatment.
- The model is optimized for effect estimation but deployed as a ranking or knapsack policy.

Decision-focused uplift treats the estimator as part of a larger decision system.

## Evaluation Shift

Do not rely on Qini alone.

Use Qini or uplift curves as familiar diagnostics, but add:

- pROCini or ROC-style uplift ranking checks when available.
- Policy value under cost and budget constraints.
- Incremental profit or margin by top-k treatment depth.
- Treatment distribution and suppression distribution.
- Guardrail movement.
- Online policy test against business-as-usual and no-treatment.

If the ranking metric and the business objective disagree, trust the business objective and investigate the metric.

## Model Selection Shift

Use this logic:

- If the business allocates a fixed budget, evaluate budgeted policy value.
- If treatment cost differs, rank by expected net incremental value, not lift alone.
- If treatment is ordinal, such as discount depth, enforce sensible response-shape assumptions when justified.
- If there are many historical experiments, consider experiment pooling or representation learning before training a narrow project-specific CATE model.
- If model explanations will be used for segments, audit group effects before naming the segment.

## Experiment Memory As CATE Asset

Large platforms increasingly treat past experiments as reusable training assets.

Experiment memory should store:

- Treatment ontology.
- Control definitions.
- Assignment propensities.
- Outcome windows.
- Covariates available before assignment.
- Quality score.
- Drift risk.
- CATE or segment readout.
- Policy decision produced.
- Online validation result.

The point is not to archive old tests. The point is to make future treatment design and allocation faster.

## Practical Output

When this reference is used, produce:

- Decision objective.
- Ranking target.
- Budget or capacity constraint.
- Evaluation metric.
- Online validation plan.
- Failure mode if ranking quality is wrong.

## Failure Modes

- Reporting CATE AUC or regression error when the business needs policy value.
- Optimizing Qini while ignoring treatment cost.
- Treating top decile lift as a deployment rule without budget, capacity, or guardrails.
- Naming segments from individual CATE scores without group-level audit.
- Reusing old experiments without checking treatment compatibility and drift.

## Reference Anchors

- Metalearners for Ranking Treatment Effects: decision-focused ranking rather than pure effect estimation.
- E3IR, RecSys 2024: end-to-end cost-effective incentive recommendation with differentiable budget allocation.
- JMLR 2025 pROCini: challenges Qini's theoretical grounding and proposes a ROC-style uplift evaluation.
- Snap large-scale HTE framework: historical experiments and incremental training for platform-level CATE assets.
