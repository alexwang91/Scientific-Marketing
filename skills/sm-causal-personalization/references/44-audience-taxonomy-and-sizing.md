# 44 Audience Taxonomy And Sizing

## Core Position

Ad platforms provide selectable audience controls, but they do not provide a universal customer taxonomy.

Use this reference to define the target audience in our own dimensions first, then map those dimensions to each platform's available controls and estimate reachable size by country.

Do not treat a platform segment as the real audience. It is an activation proxy.

If the product itself is designed for a use case, occasion, body context, environment, or feature claim, read `45-product-market-semantics.md` first. Audience dimensions are downstream of product-market semantics.

## Platform Audience Reality

Most mainstream platforms expose some combination of:

- Demographics.
- Location and language.
- Device and connection.
- Interests or affinity.
- In-market or intent.
- Search or shopping query.
- Product/category browsing.
- Purchase or conversion history.
- Site, app, video, social engagement, or lead-form behavior.
- Customer list or CRM upload.
- Lookalike or similar audience.
- Contextual, placement, keyword, product, or content targeting.
- Automated or broad algorithmic targeting.
- Suppression and exclusion audiences.

The exact options vary by platform, campaign type, country, policy category, account access, and time.

## 20-Dimensional Audience Taxonomy

Use these dimensions to describe an audience before opening an ad account.

This is not a complete ontology of demand. It is an activation-oriented audience card. Product-designed-for meaning belongs in the product-market card.

1. Country and sub-region.
2. Language.
3. Age band.
4. Gender where allowed and relevant.
5. Household or life stage.
6. Income, spending power, or price tier where available.
7. Device, operating system, and connection context.
8. Category interest.
9. In-market or purchase intent.
10. Search/query intent.
11. Product or SKU interest.
12. Competitor or substitute interest.
13. Brand familiarity: cold, aware, engaged, customer, loyal.
14. Funnel state: unaware, problem-aware, solution-aware, comparing, ready, post-purchase.
15. Recency: recent visitor, recent viewer, recent cart, lapsed user, dormant buyer.
16. Frequency or intensity: heavy category user, occasional buyer, deal seeker, high-value repeat buyer.
17. Price sensitivity or promotion response.
18. Content and creator affinity.
19. Channel preference: search, social video, marketplace, email, app, retail media, sales.
20. Causal role: persuadable, sure thing, lost cause, sleeping dog, unknown.

Optional dimensions when relevant:

- Business role, company size, industry, seniority, and buying committee.
- Sensitive category constraints.
- Local culture and trust source.
- Inventory, shipping, or service availability.

## Product Semantics Gate

Before using the 20D audience card, ask:

- Is the product positioned by use case, such as sport, commute, sleep, travel, gaming, baby care, outdoor, work, or recovery?
- Is the product differentiated by form factor, fit, body context, compatibility, environment, or performance claim?
- Do marketplace filters expose this distinction?
- Do search queries contain this modifier?
- Do reviews repeatedly mention this use case or pain?
- Would targeting or creative change if the distinction is true?

If yes, produce a Product-Market Card first. Then map the result into audience dimensions and platform controls.

## Platform Mapping Matrix

For each dimension, map to platform controls:

- Direct: first-party list, internal bidder field, product/category behavior, search query, or CRM segment.
- Close proxy: in-market, affinity, interest, category, keyword, product targeting, lookalike seed.
- Weak proxy: broad interest, demographic proxy, creator audience proxy.
- Not targetable: cannot be expressed legally or technically.

Required columns:

- `dimension`
- `target_value`
- `evidence_source`
- `Google_proxy`
- `Meta_proxy`
- `TikTok_proxy`
- `Amazon_or_retail_media_proxy`
- `internal_bidder_proxy`
- `match_quality`
- `country_availability`
- `notes`

## Common Platform Controls

### Google Ads

Common audience controls:

- Affinity segments.
- In-market segments.
- Detailed demographics.
- Life events where available.
- Your data segments from website, app, customer match, YouTube, or offline data.
- Custom segments using keywords, URLs, or apps.
- Combined segments.
- Targeting or observation settings.
- Optimized targeting or AI campaign expansion depending on campaign type.
- Location, language, device, and content controls.

Sizing tools:

- Reach Planner for YouTube and video planning.
- Keyword Planner for search demand proxy.
- Audience Manager and campaign forecasts where available.

### Meta

Common audience controls:

- Custom audiences.
- Lookalike audiences.
- Saved audiences.
- Detailed targeting where available.
- Location, age, gender, and language.
- Advantage+ audience and automated expansion.
- Engagement audiences.
- Partnership ads for creator content.

Sizing tools:

- Ads Manager estimated audience size and campaign forecasts where available.
- First-party list match size.
- Experiment or lift study readouts.

### TikTok

Common audience controls:

- Demographics.
- Custom audiences.
- Lookalike audiences.
- Interest and behavior targeting.
- Device targeting.
- Smart targeting.
- Creator or content-community proxy through creator marketplace and Spark Ads where available.

Sizing tools:

- Audience Size Estimation in TikTok Ads Manager.
- Reach Estimator and campaign forecasts where available.
- Creator audience insights where available.

### Amazon Ads And Retail Media

Common controls:

- Search query and keyword targeting.
- Product, ASIN, SKU, and category targeting.
- Automatic and manual targeting for sponsored ads.
- Amazon Audiences.
- Advertiser audiences.
- Third-party audiences where available.
- Remarketing and product-view audiences.
- AMC custom audiences.
- Retailer first-party segments: category buyers, competitor purchasers, lapsed customers, loyalty tiers, cart abandoners.

Sizing tools:

- Amazon Ads planner and media planning suite where available.
- AMC audience counts.
- Retailer audience insights and campaign forecasts.
- Internal search, browse, cart, purchase, and loyalty data.

## Country Sizing Method

Estimate in layers. Do not use one number without source and confidence.

### Layer 1: Country Universe

Define:

- total population
- adult population
- internet users
- smartphone users
- platform monthly reachable users
- category buyer population
- ecommerce buyer population

Sources:

- census or official statistics
- platform planning tools
- industry reports
- retailer or marketplace category data
- first-party CRM and traffic logs

### Layer 2: Platform Reachable Audience

Use platform estimates:

- Google Reach Planner or campaign forecasts.
- Meta estimated audience size.
- TikTok Audience Size Estimation.
- Amazon Ads planner, AMC audience counts, or retail media audience insights.

Label these as reachable account estimates, not true population.

### Layer 3: Category And Intent Filter

Estimate:

- category interest share
- in-market share
- search demand
- product/category viewer share
- competitor shopper share
- lapsed buyer share
- cart or high-intent audience share

Sources:

- platform audience estimates
- keyword volume
- marketplace search rank and category data
- retailer first-party segments
- survey or panel data
- first-party site/app analytics
- LLM context scoring from `53-llm-context-segment-scoring.md` only as sample-level evidence or calibrated input

### Layer 4: Causal Filter

Estimate:

- persuadable share
- sure thing share
- lost cause share
- sleeping dog share
- unknown share

Sources:

- holdout experiments
- uplift model
- past experiment memory
- geo or matched market tests
- directional proxy only if no causal data exists

Do not assign causal shares from platform data alone.

## LLM Context Scoring Boundary

Use `53-llm-context-segment-scoring.md` to summarize intent, no-intent, reasons, barriers, treatment fit, and causal-role hypotheses inside text samples.

Use it for:

- candidate category or intent share
- reason mix
- barrier mix
- treatment-fit mix
- product and HTE label discovery
- priority signals for platform mapping

Do not use it directly as:

- country audience share
- reachable audience size
- persuadable share
- lift
- ROI
- final targeting approval

To move from sample share to market share, calibrate against platform reach planners, search volume, category buyer data, retailer first-party audience counts, representative survey/panel data, or experiment memory.

## Sizing Formula

Use a range:

`reachable_target_size = country_reachable_users * category_or_intent_share * activation_match_rate * eligibility_rate`

Then separate:

`expected_persuadable_size = reachable_target_size * persuadable_share`

And:

`expected_treatable_size = expected_persuadable_size - suppressed_users - governance_blocked_users`

If there is no causal readout, set `persuadable_share = unknown` and treat the plan as exploration.

## Confidence Grades

Use:

- A: platform estimate plus first-party or experiment support.
- B: platform estimate plus category/search data.
- C: third-party report plus platform proxy.
- D: assumption only.

Never hide a D-grade assumption inside a precise percentage.

## How To Decide How To Target

Use this order:

1. Product, category, search, ASIN/SKU, or feed-based targeting when the use case is product-encoded.
2. Direct first-party or internal bidder segment if available and consented.
3. Retargeting or product/category behavior if the causal segment is behavioral.
4. Search, query, product, or contextual targeting if intent is explicit.
5. Custom segment from keywords, URLs, apps, or competitor signals if platform allows.
6. Lookalike or similar audience from a validated seed.
7. Interest, affinity, or in-market proxy.
8. Broad or automated targeting with strong creative and holdout.
9. Creator or KOL treatment when trust, education, demonstration, or community entry is the persuasion job.

If only weak proxies exist, prioritize learning over scaling.

## Audience Card Output

Return one card per target audience:

- Audience name.
- 20D definition.
- Country.
- Platform proxies.
- Match quality.
- Estimated country share.
- Estimated reachable size.
- Estimated persuadable size.
- Confidence grade.
- Recommended targeting path.
- Suppression rules.
- Measurement plan.
- Weakest assumption.

## Example

Audience:

`UK category-aware comparison shoppers who have researched premium cordless vacuums, are price-aware but not discount-only, and respond to expert demonstration.`

Possible mapping:

- Google: custom segment from category and competitor URLs/search terms; in-market household appliance segment if available; YouTube creator or review content placement.
- Meta: custom audience if site visitors exist; lookalike from high-margin buyers; interest proxy around home cleaning and premium appliances; match quality medium.
- TikTok: interest/behavior around home cleaning, product reviews, creator communities; match quality low to medium unless creator audience is strong.
- Amazon/retail media: keyword, ASIN, category, competitor product viewers, cart abandoners; match quality high if retailer data is available.
- Internal bidder: query intent, product view, basket, margin, inventory, price sensitivity; match quality high if logs exist.

Sizing stance:

`Do not claim the UK percentage until platform estimates, keyword volume, and retailer/category data are collected. If no holdout exists, persuadable share is unknown.`
