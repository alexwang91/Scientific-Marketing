# 61 Platform Execution Playbooks

Use this when a product-country report assigns budget to Google, Amazon Ads, TikTok, Meta, YouTube, retail media, KOL amplification, or retargeting.

## Core Rule

Budget allocation must connect to execution controls.

Required bridge:

`budget module -> treatment_id -> D dimension -> platform proxy -> message frame -> consumer language -> measurement route`

If any link is missing, mark the module `Needs data` or `Needs test`.

Connection cells must be readable. Keep IDs for traceability, but always pair them with short names:

- good: `T01 Search high-intent`, `D18 price-sensitive`, `D31 cart abandon`
- bad: `T01/T02; D7/D8/D10`

Use small visual tags when the output format supports them.

## Country Local Platform Search

Before recommending local channels for a new country, search the country context. Do not reuse a previous country's platform list.

Find and source:

- top ecommerce marketplaces in the country
- category-specific retailers and retail media options
- price comparison, coupon, and deal sites
- local-language vertical media, review publishers, forums, and communities
- local creators or KOLs relevant to the product's scenes
- local-language query patterns for category, use case, price, competitor, and objection terms

Add a local platform to the main plan only when at least one of these is true:

- country popularity: materially used by buyers in that country
- category relevance: trusted for the product category
- selling-point fit: can prove, explain, or activate a key selling point

For every added local platform, write the selection basis directly in the platform row or message frame. If the platform is popular but weak for the category or selling point, put it in watch/suppress notes.

Creator/KOL rows need:

- public profile or official page
- avatar or visual source when available
- estimated fee range and fee logic
- country-audience verification requirement
- average reach or recent post performance requirement
- usage rights, whitelisting/Spark/paid partnership, UTM, and content reuse terms

## Consumer Language Rule

Technical specs are evidence. Consumer-facing targeting and creative must use the way buyers describe the problem.

Examples:

- `IP57` -> sweat, light rain, gym bag, running in drizzle, less worry during workouts.
- `AI NPU` -> clearer calls in traffic, office, wind, or crowded streets.
- `38h battery` -> fewer charging interruptions during commute, workweek, travel, or training.
- `open-ear` -> hear traffic, announcements, colleagues, and surroundings.
- `C-bridge design` -> light clip-on fit, no in-ear pressure, feels like an accessory.

Only use the technical term when:

- the audience is technical or review-driven
- the platform field is product spec or feed attribute
- the creative explains the term in plain language

## Message Frame Rule

Use `62-contextual-message-and-competitive-frame.md` when a platform row needs content direction, vertical wording, or competitor comparison.

For each platform execution row, specify:

- buyer question
- conversation mode
- competitive comparison level
- what to say
- what to avoid
- proof packet
- claim boundary

Examples:

- Broad carrier media for a health watch: Level 0-1, social relevance and health awareness, no accuracy superiority claim.
- Health vertical for a blood pressure watch: Level 3-4, validation method, intended use, accuracy boundary, domain review required.
- Ecommerce for earbuds: Level 2-4, product proof, reviews, price, delivery, category tradeoff.
- Search competitor query: Level 3, named competitor only when the query contains competitor intent and claims are sourced.
- Sales battlecard: Level 4-5, structured proof and current competitor data, internal or reviewed use.

## Google Search / Shopping / PMax

Official docs:

- Google Ads Search campaigns: https://support.google.com/google-ads/answer/9510373
- Keyword match types: https://support.google.com/google-ads/answer/7478529
- Responsive search ads: https://support.google.com/google-ads/answer/7684791
- Ad assets: https://support.google.com/google-ads/answer/7331111

Execution pattern:

- Split campaigns by intent: brand, category problem, use case, competitor comparison, price.
- Use exact or phrase match for high-intent terms in early tests.
- Use broad match only with enough conversion data, negative terms, and budget.
- Responsive search ads should map headlines to consumer language, not raw specs.
- Shopping/PMax should use feed titles and assets that expose the primary mechanism.

Report fields:

- linked treatment IDs
- keyword clusters
- negative keyword risks
- buyer question and comparison level
- feed asset direction
- holdout or low-bid control

## Amazon Ads Sponsored Products

Official docs:

- Sponsored Products targeting guide: https://advertising.amazon.com/library/guides/targeting-with-sponsored-products
- Sponsored Products best practices: https://advertising.amazon.com/library/guides/sponsored-products-best-practices
- Getting started with sponsored ads: https://advertising.amazon.com/library/guides/getting-started-with-sponsored-ads

Execution pattern:

- Start with automatic targeting for discovery when query data is missing.
- Split manual campaigns into keyword targeting and product targeting.
- Use product targeting for competitor ASIN adjacency and category pages.
- Add negative keywords or negative products after query waste appears.
- Separate branded, category, competitor, and retargeting-like product-viewer logic where the account allows it.

Report fields:

- linked treatment IDs
- keyword targets
- product/ASIN targets
- negative target plan
- marketplace message frame and proof packet
- retail metric needed: new-to-brand, attributed sales, spend, CPC, conversion, product detail page views

## TikTok Ads

Official docs:

- TikTok Spark Ads: https://ads.tiktok.com/help/article/spark-ads
- Spark Ads creation guide: https://ads.tiktok.com/help/article/spark-ads-creation-guide
- Ad targeting dimensions: https://ads.tiktok.com/help/article/ad-targeting
- Search Ads Campaign: https://ads.tiktok.com/help/article/about-search-ads-campaign
- Creative best practices: https://ads.tiktok.com/help/article/creative-best-practices

Execution pattern:

- Use Spark Ads when creator posts are strong enough to amplify.
- Test creative concepts by hook and scene: problem, demo, comparison, proof.
- Use interest and behavior targeting as weak proxies; do not treat them as causal segments.
- If TikTok Search Ads are available in the market, use consumer-language keywords.
- Track video completion, click quality, landing page behavior, and downstream conversion.

Report fields:

- creator post or brand post to amplify
- hook variants
- target proxy
- conversation mode and what to avoid
- linked D dimensions
- paid amplification rights and UTM

## Meta Ads

Official docs:

- Advantage+ audience: https://www.facebook.com/business/help/273363992030035
- Advantage+ detailed targeting: https://www.facebook.com/business/help/128066880933676
- Advantage+ catalog ads: https://www.facebook.com/business/help/397103717129942
- Dynamic creative: https://www.facebook.com/business/help/170372403538781
- Creative fatigue recommendations: https://www.facebook.com/business/help/1346816142327858

Execution pattern:

- Use catalog or product ads when product feed and retargeting are available.
- Use creator or lifestyle assets for use-case learning.
- Treat detailed targeting and Advantage+ expansion as delivery controls, not proof of segment truth.
- Build custom audiences from product viewers, cart abandoners, video viewers, and purchaser exclusions.
- Watch fatigue signals, frequency, hide, comments, and incremental conversion.

Report fields:

- custom audience source
- audience suggestion
- creative family
- message frame and comparison level
- exclusion and frequency plan
- holdout or geo/time split when feasible

## YouTube / Google Video

Official docs:

- Video campaign formats: https://support.google.com/google-ads/answer/2375464
- YouTube ads and view metrics: https://support.google.com/google-ads/answer/2375431
- Video action campaigns: https://support.google.com/google-ads/answer/10147229
- Demand Gen / Video Action transition note: https://support.google.com/google-ads/answer/15110871

Execution pattern:

- Use review amplification when a category needs explanation.
- Separate proof videos from short conversion creatives.
- Build viewer audiences for retargeting with proof-first messages.
- Use video metrics for content quality, not final ROI.
- When Video Action options have migrated to Demand Gen, state the current campaign type and avoid stale setup instructions.

Report fields:

- video asset
- audience source
- proof claim
- comparison level and proof standard
- retargeting handoff
- view, click, search lift, and conversion measurement

## Retail Media

Execution pattern:

- Ask each retailer for available audience controls before recommending budget.
- Prioritize category visitors, brand searchers, competitor product viewers, product detail page viewers, and cart abandoners.
- Request reporting by new customer, category visitor, search term, SKU, placement, cost, and sales.
- Treat retailer-reported sales as attribution until holdout or credible baseline exists.

Report fields:

- retailer options requested
- audience availability
- reporting fields
- cost model
- retail message frame
- holdout feasibility

## KOL / Creator Amplification

Execution pattern:

- Creator selection lives in the KOL procurement table.
- Platform execution belongs in the platform section: Spark Ads, whitelisting, paid partnership ads, usage rights, UTM, creator code, or landing page.
- First round should buy proof and reusable assets unless past creator lift evidence exists.
- Do not judge first-round creator value only by direct attributed sales.

Report fields:

- creator
- content role
- amplification platform
- conversation mode and claim boundary
- usage rights
- UTM or promo code
- holdout or matched comparison

## Acceptance Checklist

- Budget table has an execution column.
- Platform execution section links each row to treatment IDs and D dimensions.
- Treatment and dimension links show ID plus readable name, not naked IDs.
- Technical specs are translated into consumer language.
- Platform rows include message frame, comparison level, what to say, and what to avoid.
- Official platform docs are listed in the source registry.
- Platform controls are described as proxies, not causal proof.
- Measurement route is explicit for each platform.
