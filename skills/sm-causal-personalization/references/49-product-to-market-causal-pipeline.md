# 49 Product To Market Causal Pipeline

## Core Position

This is the main execution pipeline for the module.

Use it when the user provides a product, selling points, price, product description, and target country, then asks who to sell to, how to target them, what content or creator/KOL to use, how much to spend, and what ROI to expect.

The pipeline should produce a testable market entry and activation plan, not a confident story.

## Input Contract

Ask for or infer:

- Product name.
- Product category.
- Product description.
- Selling points.
- Price and margin if available.
- Target country.
- Sales channel: DTC, Amazon, retail media, marketplace, offline retail, B2B sales, or mixed.
- Existing assets: site, listing, reviews, CRM, pixel, app, email list, previous campaigns, creator content.
- Budget range.
- Launch stage: pre-launch, first launch, scaling, repositioning, or retention.
- Constraints: inventory, shipping, claims, language, compliance, brand safety, creator rights.

If margin is missing, do not give a precise ROI. Use scenario ranges.

## Pipeline Overview

1. Product-market semantic card.
2. Label and vector representation card when concepts repeat or need retrieval/modeling.
3. LLM context segment scoring when text samples exist or the user asks for intent, no-intent, reason, or barrier percentages.
4. LLM semantic prior hypothesis when a profile, segment, account, or context must be scored against a treatment, using rubric, scenarios, and calibration when needed.
5. Country and platform availability check.
6. Audience taxonomy and sizing card.
7. Treatment library.
8. Causal hypothesis and HTE map.
9. Activation adapter: platform, ecommerce bidder, creator/KOL, content, sales workflow, or no treatment.
10. Budget and expected net incremental value model.
11. Measurement and monitoring plan.
12. Decision-focused evaluation and policy pilot.
13. Experiment memory update.

## Step 1: Product-Market Semantics

Use `45-product-market-semantics.md`.

Extract:

- Product type.
- Designed-for use case.
- Demand jobs.
- Product attributes and claims.
- Price tier.
- Competitors and substitutes.
- Search/query language.
- Marketplace facets.
- Review themes if available.
- Claims that need proof.

Do this before demographic audience work when the product is use-case, attribute, occasion, body-context, or environment-led.

Output:

- Product-Market Semantic Card.

## Step 1A: Label And Vector Representation

Use `52-label-vector-representation.md`.

Create labels for:

- Product features.
- Use cases.
- Demand jobs.
- Frictions.
- Mechanisms.
- HTE dimensions.
- Treatment families and arms.
- Content angles.
- Platform proxies.
- Creator types.
- Risks and suppression reasons.

Add embeddings when concepts need:

- search/query matching
- review or Q&A clustering
- creator/KOL matching
- treatment variant grouping
- similar experiment retrieval
- CATE/HTE model features
- OPE for many actions

Output:

- Label Vector Representation Card.

## Step 1B: LLM Context Segment Scoring

Use `53-llm-context-segment-scoring.md`.

Use this step when:

- Reviews, search terms, social comments, KOL comments, tickets, sales calls, survey answers, or forum posts are available.
- The user asks what percentage of a group has intent, no intent, objections, reasons, or treatment fit.
- The team needs to turn raw language into HTE dimensions or treatment hypotheses.

Output:

- LLM Context Segment Scoring Card.

Rules:

- Report sample-level percentages with denominator, source mix, country, time window, and collection method.
- Do not report sample percentages as country share, market share, reachable audience, persuadable share, lift, or ROI.
- Pass high-confidence reason, barrier, mechanism, and treatment-fit labels to `51-causal-hte-hypothesis-map.md`.
- Pass only calibrated or clearly marked candidate shares to `44-audience-taxonomy-and-sizing.md`.

## Step 1C: LLM Semantic Prior Hypothesis

Use `54-llm-semantic-prior-hypothesis.md`.

Load:

- `55-llm-semantic-prior-rubric.md` when scoring high, medium, low, or unknown.
- `56-llm-semantic-prior-scenarios.md` when the user needs examples, edge cases, or boundary language.
- `57-semantic-prior-calibration.md` when numbers, budget moves, suppression rules, or scale decisions depend on the prior.

Use this step when:

- The user gives a person, segment, account, or buyer context.
- The user asks whether a specific ad, content angle, offer, KOL, or channel is likely to work for that context.
- The team needs a fast hypothesis before experiment data exists.

Output:

- LLM Semantic Prior Hypothesis.

Rules:

- Judge treatment-context fit, not conversion certainty.
- Strong explicit signals such as stated dislikes, stated needs, recent search, and product behavior should dominate weak demographic proxies.
- Low semantic fit should trigger reframe, suppress, research, or test decisions.
- Do not call the result causal effect, CATE, lift, ROI, or validated exclusion.
- Use categories by default. Use numeric probabilities only after calibration.

## Step 2: Country And Platform Reality Check

For the target country, check:

- Available ad platforms.
- Relevant ecommerce or marketplace platforms.
- Retail media access.
- Creator marketplace availability.
- Local language and cultural constraints.
- Shipping, taxes, payment, and returns.
- Sensitive category or claim rules.
- Platform targeting options and country coverage.

Stable method lives in this skill. Current availability must be checked at execution time.

Output:

- Country activation inventory.

## Step 3: Audience Taxonomy And Sizing

Use `44-audience-taxonomy-and-sizing.md`.

Build audience cards from:

- Product semantics.
- Search intent.
- Marketplace product behavior.
- Category interest.
- Competitor/substitute interest.
- Brand familiarity.
- Funnel stage.
- Recency and frequency.
- Price sensitivity.
- Content and creator affinity.
- Causal role if evidence exists.

Sizing method:

`reachable_target_size = country_reachable_users * category_or_intent_share * activation_match_rate * eligibility_rate`

Then:

`expected_persuadable_size = reachable_target_size * persuadable_share`

If persuadable share is unknown, say unknown and propose exploration.

Output:

- Audience Taxonomy And Sizing Cards.

## Step 4: Treatment Library

Create treatment options before choosing channels.

Treatment families:

- No treatment.
- Search ad.
- Shopping or product ad.
- Sponsored product, category, ASIN/SKU, or retail media placement.
- Social video ad.
- Creator/KOL organic content.
- Creator/KOL paid amplification.
- Expert review or comparison content.
- Landing page or product detail page change.
- Offer, discount, bundle, or threshold incentive.
- Retargeting sequence.
- Email or CRM.
- Sales outreach or B2B quote guidance.

Each treatment needs:

- `treatment_id`
- treatment family
- target demand job
- target audience card
- platform or channel
- content angle
- cost model
- claim boundary
- expected mechanism
- measurement route
- risk

Output:

- Treatment Library.

## Step 5: Causal Hypothesis And HTE Map

Use `51-causal-hte-hypothesis-map.md`.

Use causal language before model language.

For each audience-treatment pair:

- Why should this treatment change behavior?
- What would happen without treatment?
- Who might be a sure thing?
- Who might be a lost cause?
- Who might be a sleeping dog?
- What segment or product-semantic feature could create HTE?
- What evidence exists?

Good hypothesis:

`For UK runners comparing sports earbuds, expert demonstration content should increase purchase among category-aware comparison shoppers by reducing fit and outdoor-safety uncertainty. Discount treatment may cannibalize sure things and reduce margin.`

Output:

- Causal hypothesis and HTE map.

## Step 6: Activation Adapter

Use:

- `42-platform-audience-activation.md` for ads, retail media, ecommerce bidding, and audience proxies.
- `43-creator-kol-causal-procurement.md` for creator/KOL, media, and community activation.
- `48-b2b-sales-causal-system.md` for account, lead, quote, rep, or buying committee decisions.

For each treatment, specify:

- Activation path.
- Platform proxy.
- Match quality.
- Country availability.
- Required first-party asset.
- Exclusions and suppression.
- No-treatment or holdout design.

Do not force a weak causal segment into a platform if the platform cannot express it.

Output:

- Platform Audience Activation Map.
- Creator/KOL Causal Procurement Brief when relevant.
- B2B Revenue Intervention Brief when relevant.

## Step 7: Budget And ROI Model

Use expected net incremental value, not platform ROAS.

For paid media:

`expected_net_value = incremental_conversions * contribution_margin - media_spend - production_cost - risk_penalty`

For creator/KOL:

`total_cost = creator_fee + production_cost + usage_rights + exclusivity + product_cost + shipping + agency_fee + paid_amplification_budget`

`expected_net_value = incremental_conversions * contribution_margin + incremental_ltv - total_cost - risk_penalty`

For B2B sales:

`expected_net_value = incremental_revenue_or_profit - sales_time_cost - discount_cost - relationship_risk_penalty`

Budget allocation rule:

- Fund treatments with positive expected net value.
- Prefer lower-cost treatments when lift is similar.
- Reserve exploration budget.
- Keep no-treatment holdout.
- Do not spend full budget on unvalidated high-variance estimates.

Output:

- Budget scenario table.
- ROI range.
- Weakest assumption.

## Step 8: Measurement And Monitoring

Choose the strongest feasible design:

- Randomized holdout or A/B.
- Platform lift test.
- Geo or matched-market test.
- Creator paid audience holdout.
- Retail media holdout or AMC analysis.
- Account or cluster experiment for B2B.
- OPE for screening large action spaces.
- Surrogate for early long-term value screen.
- Anytime-valid inference when continuous monitoring is needed.

Rules:

- Affiliate links and coupon codes are tracking aids, not causal proof.
- Platform attributed conversions are not incrementality.
- OPE and surrogate estimates screen decisions; they do not approve high-stakes rollout alone.

Output:

- Measurement Router.
- Sequential Monitoring Plan if relevant.
- OPE And Surrogate Validation Card if relevant.

## Step 9: Decision-Focused Evaluation

Use `46-decision-focused-uplift.md`.

Evaluate:

- Ranking quality.
- Budgeted policy value.
- Incremental margin.
- Treatment distribution.
- Suppression distribution.
- Guardrail movement.
- Online validation.

Do not choose a plan because it has the most sophisticated model. Choose the plan that can make a better decision under constraints.

Output:

- Decision-Focused Uplift Evaluation Card.

## Step 10: Experiment Memory

After execution, store:

- Product semantic card.
- Country and platform availability.
- Audience sizing card.
- Treatment library.
- Activation map.
- Creator/KOL shortlist and rates.
- Budget and ROI scenario.
- Experiment design.
- Results.
- Incremental value.
- Failure modes.
- Updated persuadable, sure thing, lost cause, and sleeping dog hypotheses.

The system improves only if results are written back.

## Required Final Answer Shape

Return:

1. Product-market diagnosis.
2. Target country opportunity and constraints.
3. Audience cards with size and confidence.
4. Label registry and embedding needs when relevant.
5. LLM context scoring summary when text samples are used.
6. LLM semantic prior summary when treatment-context fit is scored.
7. Semantic prior calibration status when probabilities, budget, suppression, or scale depend on LLM priors.
8. Treatment library.
9. Causal hypothesis and HTE map.
10. Recommended channels and activation proxies.
11. Creator/KOL path if relevant.
12. Budget and ROI scenarios.
13. What to suppress, reframe, or leave untreated.
14. Measurement plan.
15. Weakest assumptions.
16. Next artifact or experiment.

If the user asks for HTML, return an HTML Causal Marketing Report as defined in `39-output-artifacts.md` and pass it through `sm-output-taste/references/html-report-output.md`.

For HTML heatmaps:

- Explain how coded dimensions such as `D1` are generated from product mechanism, country/channel context, platform proxy, measurement route, and risk filter.
- Include a provenance table for the coded dimensions when the heatmap does not display the full candidate pool.
- Explain every main allocation cell.
- Add a named reviewer, usually `Causal Activation Reviewer`, to challenge dimensions and main allocation cells before the final recommendation.
- Reflect reviewer downgrades in budget notes, suppression rules, and the final attack pattern.
- Add a maturity gate: current level, defensible claim, missing data, and next experiment.
- Convert budgeted actions into treatment cards with IDs, baseline, cost formula, mechanism, guardrail, and measurement route.
- Add logging gaps when the report implies future OPE, policy learning, retargeting scale-up, or bandit allocation.
- Add short execution advice in the budget table before status.
- Add a platform execution section after the budget table when Google, Amazon Ads, TikTok, Meta, YouTube, retail media, KOL amplification, or retargeting receives budget.
- Link each platform execution row to treatment IDs, D dimensions, platform proxies, consumer language, and measurement route.
- In user-facing tables, show linked treatment IDs and D dimensions as readable labels, for example `T01 Search open-ear` and `D8 long-wear comfort`, not naked ID strings.
- Translate technical specs into consumer language for keywords and creatives; keep raw specs mainly in product facts, feed attributes, or technical review contexts.
- After the cell explanation, state the overall attack pattern: full-matrix saturation, channel-specific anchors, or narrow learning tests.
- Match the user's language for headings, explanations, tables, and recommendations, while keeping useful platform names and technical terms.

## Red Lines

Do not:

- Claim exact country audience share without source.
- Claim persuadable size without causal evidence.
- Treat product positioning as a demographic segment.
- Treat platform ROAS, affiliate sales, or coupon redemptions as incrementality.
- Name specific creators or prices without current country-level sourcing.
- Recommend scaling when match quality is low and no holdout exists.
- Hide margin, fee, rights, usage, production, or amplification costs.

## Tool Needs

Use `50-tooling-and-data-connectors.md` for the full tool and data connector map.

Useful tools or data sources:

- Product feed or product listing parser.
- Review, Q&A, and competitor listing miner.
- Google Ads API or planner for reach, keyword, and custom segment planning.
- Meta Marketing API or Ads Manager estimates for audience and delivery planning.
- TikTok Ads Manager/API and creator marketplace for audience and creator discovery.
- Amazon Ads API, AMC, retail media planners, and product targeting reports.
- KOL marketplace or creator database for rates, audience geography, median views, and brand safety.
- Spreadsheet model for budget, margin, cost, and ROI scenarios.
- Experiment tracker or experiment memory database.
- Causal ML/OPE toolkit for uplift, CATE, policy value, and offline screening.

If these tools are unavailable, produce a assumptions-first plan and mark data gaps explicitly.
