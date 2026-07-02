# 53 LLM Context Segment Scoring

## Core Position

LLM context scoring can summarize intent and reasons inside a sample. It cannot estimate country-level demand or causal lift by itself.

Use this layer to turn reviews, search queries, comments, transcripts, tickets, survey answers, competitor reviews, and KOL comments into structured labels, percentages, and hypotheses.

Report the output as sample-level semantic statistics unless it is calibrated with representative data.

## What This Layer Can Do

- Classify whether a text shows active intent, latent need, no intent, negative intent, or unknown.
- Extract reasons for interest.
- Extract barriers and objections.
- Map text to product mechanisms and HTE dimensions.
- Estimate sample-level percentages for labels.
- Suggest treatment fit: search ad, expert content, KOL, discount, retargeting, product page, no treatment.
- Surface possible persuadable, sure thing, lost cause, and sleeping dog hypotheses.
- Create label registry candidates for `52-label-vector-representation.md`.

## What This Layer Cannot Do

- Estimate true national audience share.
- Prove incrementality.
- Replace holdout, A/B, geo, or platform lift tests.
- Decide final ROI.
- Treat sampled comments as representative without calibration.
- Infer persuadable share from intent alone.

## Input Sources

Use one or more:

- Product reviews.
- Competitor reviews.
- Q&A.
- Search queries.
- Social comments.
- KOL comments.
- Customer service tickets.
- Sales call transcripts.
- Survey open text.
- App/store reviews.
- Forum or community posts.
- Retail media search term reports.

For every source, record:

- source type
- country
- platform
- time window
- collection method
- sample size
- known sampling bias
- language
- deduplication status

## Classification Schema

### Intent State

- active_intent: text indicates current buying, comparing, trial, cart, or immediate need.
- latent_need: text indicates problem or use case, but no clear shopping action.
- no_intent: text is informational, unrelated, or not in market.
- negative_intent: text rejects the category, brand, price, claim, or use case.
- post_purchase: text comes after purchase or ownership.
- unknown: not enough information.

### Reason Type

- use_case_need
- product_fit_need
- proof_need
- price_value_need
- trust_need
- convenience_need
- safety_or_risk_need
- compatibility_need
- social_identity_need
- replacement_or_upgrade_need

### Barrier Type

- price_barrier
- trust_barrier
- fit_barrier
- claim_barrier
- compatibility_barrier
- availability_barrier
- shipping_or_return_barrier
- privacy_or_safety_barrier
- habit_or_switching_barrier
- negative_prior_experience

### Treatment Fit

- search_ad
- shopping_or_product_ad
- expert_review
- creator_or_kol
- comparison_content
- product_page_fix
- offer_or_discount
- bundle_or_threshold
- retargeting
- crm_or_email
- sales_outreach
- no_treatment
- research_only

### Causal Role Hypothesis

- likely_persuadable
- likely_sure_thing
- likely_lost_cause
- possible_sleeping_dog
- unknown

Use "likely" only as a hypothesis label, not as proof.

## Scoring Fields

For each text unit, output:

- `text_id`
- `source`
- `country`
- `language`
- `intent_state`
- `intent_confidence`
- `reason_labels`
- `barrier_labels`
- `mechanism_labels`
- `hte_dimension_labels`
- `treatment_fit`
- `causal_role_hypothesis`
- `evidence_quote_or_span`
- `needs_human_review`
- `notes`

Confidence:

- high: explicit language and stable label match.
- medium: implied but plausible.
- low: ambiguous or weak signal.

## Aggregation

Aggregate only after scoring text units.

Report:

- sample size
- source mix
- language mix
- intent distribution
- reason distribution
- barrier distribution
- treatment-fit distribution
- causal-role-hypothesis distribution
- high-confidence-only distribution
- disagreement or human-review rate
- representativeness risk

Always label the denominator.

Example:

`In 1,000 UK Amazon review and search-query samples, 28% show active intent and 34% show latent need. This is a sample-level statistic, not a UK population estimate.`

## Calibration Rule

To move from sample share to market share, calibrate with one of:

- platform reach planner
- search volume
- category buyer data
- retailer first-party audience counts
- survey or panel data
- representative sample
- experiment memory

Without calibration, use the scores for hypothesis generation and prioritization only.

## How It Feeds Audience Sizing

Use sample scoring to estimate:

- category or intent share candidate
- reason mix
- barrier mix
- treatment-fit mix
- priority labels for platform mapping

Do not use it directly as:

- country reachable share
- persuadable share
- lift
- ROI

Audience sizing still follows `44-audience-taxonomy-and-sizing.md`.

## How It Feeds HTE Hypotheses

Use high-confidence reason and barrier labels to build HTE dimensions.

Example:

- Many texts mention "falls out while running" -> `MECH_secure_fit` and `HTE_high_movement_use`.
- Many texts mention "I need to hear cars" -> `MECH_ambient_safety` and `HTE_outdoor_runner`.
- Many texts mention "too expensive for gym use" -> `BAR_price_value` and possible discount or bundle test.

Then use `51-causal-hte-hypothesis-map.md` to write audience-treatment hypotheses with baselines.

## Human Review

Human review is required when:

- The label affects budget allocation.
- The label implies sensitive targeting.
- The text is sarcastic, ambiguous, multilingual, or culturally specific.
- The model confidence is low.
- A new mechanism or HTE dimension is being added to the label registry.

## Output Pattern

Return:

1. Source audit.
2. Scoring schema used.
3. Sample-level intent distribution.
4. Reason distribution.
5. Barrier distribution.
6. Treatment-fit distribution.
7. Causal-role-hypothesis distribution.
8. Label registry updates.
9. Representativeness risk.
10. Calibration needed for country sizing.
11. HTE hypotheses to pass into `51`.

## Red Lines

Do not:

- Call sample percentages market percentages.
- Call intent share persuadable share.
- Call reason distribution causal root cause.
- Hide sampling bias.
- Use LLM scoring as final targeting without validation.
- Use post-treatment text as pre-treatment HTE feature.
