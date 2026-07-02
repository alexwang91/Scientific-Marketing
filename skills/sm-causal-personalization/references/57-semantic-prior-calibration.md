# 57 Semantic Prior Calibration

## Core Position

54 outputs semantic priors. Calibration decides whether those priors are useful enough for budget, suppression, routing, or probability language.

Use calibration when:

- numeric probabilities are requested
- 54 output will change budget allocation
- a suppression rule will be scaled
- a sales or KOL decision is costly
- country, language, platform, or product positioning changes
- the team wants to compare LLM priors against human labels or outcomes

## Calibration Targets

Calibrate separately:

- semantic fit
- predicted relevance
- predicted resistance
- recommended action
- causal role hypothesis
- HTE label usefulness
- reframe quality

Do not calibrate all outputs as one score.

## Calibration Data Sources

Use in this order:

1. Human label set for semantic fit, relevance, resistance, and reframe.
2. Historical experiments with treatment, baseline, context, and outcome.
3. Small A/B or holdout designed for a 54 hypothesis.
4. Platform lift or geo test when treatment is media-level.
5. Sales routing or account-level experiment for B2B.
6. Survey or panel when real behavioral outcome is unavailable.

## Human Label Calibration

Build a review set:

- 100 to 300 context-treatment pairs for early calibration
- balanced across high, medium, low, and unknown cases
- include easy, ambiguous, and high-risk cases
- include multiple countries or languages if relevant

Each row needs:

- context
- treatment
- baseline
- product semantic card
- LLM output
- human semantic fit label
- human relevance label
- human resistance label
- human recommended action
- reviewer notes

Metrics:

- agreement rate
- disagreement by label
- high-confidence error rate
- sensitive or stereotype-like reasoning count
- reframe usefulness rate

## Outcome Calibration

When experiment data exists, compare 54 priors with measured outcomes.

Useful checks:

- average lift by semantic-fit bucket
- average lift by resistance bucket
- margin by recommended action
- harm metric by resistance bucket
- incremental value by causal-role hypothesis
- treatment ranking quality
- suppression rule value

Minimum reporting:

- treatment and baseline
- assignment method
- sample size
- outcome window
- primary outcome
- guardrails
- uncertainty
- drift risk

## Probability Calibration

Use numeric probabilities only after a calibration set exists.

Recommended checks:

- calibration curve
- Brier score
- expected calibration error if available
- bucket-level observed rate
- high-confidence false positive review
- drift by country, language, platform, and product category

Probability labels:

- `semantic_fit_probability`: probability that human reviewers or calibrated labels would mark high fit
- `relevance_probability`: probability that calibrated labels would mark high relevance
- `resistance_probability`: probability that calibrated labels would mark high resistance

Do not label these as:

- conversion probability
- lift probability
- ROI probability
- country share

## Experiment Calibration

Use small experiments to test important 54 hypotheses.

Examples:

- reframe test: running-performance ad versus commute-comfort ad
- suppression test: retargeting versus no retargeting for high-resistance users
- offer test: discount versus proof content for high-intent users
- proof test: creator lifestyle post versus expert proof content
- sales routing test: sales outreach versus email nurture

Minimum design:

- baseline named
- assignment unit named
- outcome window named
- treatment cost included
- guardrail included
- no-treatment or business-as-usual condition included when feasible

## Drift Checks

Recalibrate when:

- product positioning changes
- price changes
- country changes
- language changes
- platform targeting changes
- creator or KOL type changes
- treatment family changes
- seasonality changes
- model or prompt changes

Drift signals:

- human disagreement rises
- high-confidence errors rise
- fit bucket no longer ranks lift
- resistance bucket no longer predicts harm guardrails
- same labels produce different outcomes by country or platform

## Calibration Status Labels

Use:

- `uncalibrated`: LLM prior only
- `human_label_calibrated`: compared with human review labels
- `experiment_calibrated`: compared with randomized or credible causal readout
- `outcome_correlated`: aligned with historical outcomes but no clean baseline
- `drift_risk`: calibration may no longer apply

## Promotion Rules

Move from hypothesis to action only when evidence improves:

- Hypothesis: 54 prior only.
- Research: 54 prior plus low confidence or missing context.
- Exploration test: plausible prior, low cost, clear baseline.
- Guarded pilot: calibrated prior plus small causal readout.
- Scale: credible causal evidence, positive expected net value, guardrails stable.
- Suppression: strong harm or negative net value evidence, not merely low semantic fit.

## Red Lines

Do not:

- Use uncalibrated 54 scores for large budget moves.
- Scale exclusion logic from weak signals.
- Convert semantic fit probability into conversion probability.
- Treat agreement with human reviewers as causal proof.
- Hide drift or country mismatch.
- Use post-treatment behavior as calibration input for pre-treatment scoring.
