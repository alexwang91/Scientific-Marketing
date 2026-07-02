# 59 Treatment Card And Action Library

Use this when a recommendation contains ads, KOL content, discount, retail media, retargeting, sales touch, email, push, landing page, or generated creative variants.

## Core Rule

Every marketing action that may receive budget should become a treatment card. A vague action cannot be measured or optimized.

## Treatment Card Fields

- treatment_id
- treatment_family
- channel
- audience_or_platform_proxy
- eligibility_rule
- baseline_or_no_treatment
- creative_claim
- offer_or_incentive
- landing_or_conversion_path
- cost_formula
- expected_mechanism
- HTE_dimension
- guardrails
- measurement_route
- status: hypothesis, ready_to_test, in_test, proven, paused, retired

## Treatment Family Examples

- search_brand_capture
- search_competitor_compare
- shopping_feed_value_proof
- retail_category_sponsored_product
- creator_review_proof
- creator_lifestyle_use_case
- retargeting_cart_recovery
- retargeting_proof_reminder
- discount_small_incentive
- no_treatment_holdout

## LLM Variant Control

AI can generate variants, but variants must be grouped before testing.

Group by:

- claim: battery, design, sport, health, price, compatibility
- format: review, short video, product feed, landing page, email
- intensity: proof, soft reminder, urgency, discount
- risk: health claim, competitor claim, price claim, sensitive context

When many variants exist, use labels and embeddings for retrieval and similarity. Keep human-readable labels for review and reporting.

## Acceptance Checklist

- No treatment option is defined.
- Each paid action has a cost formula.
- Each action has one primary mechanism.
- Each action has an activation proxy.
- Each action has a measurement route.
- Treatment IDs are stable across reports, experiments, and logs.
