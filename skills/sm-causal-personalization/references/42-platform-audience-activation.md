# 42 Platform Audience Activation

## Core Position

Causal segments do not automatically exist inside ad platforms.

The practice layer must translate a validated or candidate causal segment into available activation controls, then state the mismatch, measurement risk, and holdout plan.

Do not say "target this segment on Meta/Google/TikTok/Amazon" unless the platform has an available proxy or a first-party audience can be uploaded legally.

## Activation Adapter

For each causal segment, produce:

- Product-market semantic definition when the product is use-case or attribute-led.
- Causal segment definition.
- 20-dimensional audience definition when country sizing or platform mapping is required.
- Evidence level: validated, directional, hypothesis.
- Required observable signals.
- Platform activation proxy.
- Match quality: high, medium, low, unavailable.
- Exclusions and no-treatment group.
- Country or market constraints.
- Privacy and consent constraint.
- Measurement plan.
- Failure mode.

## Platform Control Types

Use these primitives when mapping segments:

- First-party list: customer match, custom audience, CRM upload, app or site event audience.
- Retargeting: visitors, viewers, cart users, purchasers, product viewers, engaged users.
- Lookalike or similar audience: modeled expansion from a seed list.
- Interest or affinity: long-term interest proxy.
- In-market or intent: recent purchase or research signal.
- Detailed demographics: age, gender, household, education, life stage, or similar platform-defined fields.
- Location and language: country, region, city, radius, language.
- Device and operating system: device type, OS, carrier, connection, price tier when available.
- Contextual or product/category targeting: keywords, topics, placements, product categories, ASINs, SKUs, search terms.
- Broad or automated targeting: platform algorithm finds users under loose constraints.
- Internal bidder feature: ecommerce or marketplace ranker uses product, user, query, price, inventory, and margin signals.
- Suppression audience: no treatment, existing customer, sure thing, recent purchaser, sensitive group, fatigue group.

Before choosing a primitive:

1. Use `45-product-market-semantics.md` if the product is use-case, attribute, or listing-led.
2. Use `44-audience-taxonomy-and-sizing.md` to estimate the country audience and platform reach.

## Common Platform Mapping

### Meta

Typical controls:

- Custom audiences from customer lists, website, app, engagement, video, lead forms, or shopping behavior.
- Lookalike audiences from high-quality seed lists.
- Detailed targeting for demographics, interests, and behaviors where available.
- Location, age, gender, and language.
- Advantage or automated audience expansion.
- Partnership ads when creator content is amplified through paid media.

Useful when:

- The causal segment can be uploaded as a first-party list.
- The causal segment has a strong seed list for lookalike expansion.
- Creator content can be tested as an ad treatment.

Watch:

- Platform automation may expand beyond the intended proxy.
- Some detailed targeting categories vary by country and policy.
- Aggregated event measurement and privacy changes can weaken attribution.

### Google Ads And YouTube

Typical controls:

- Your data segments from website, app, customer match, YouTube users, or offline data.
- Affinity segments.
- In-market segments.
- Detailed demographics.
- Life events where available.
- Custom segments using keywords, URLs, or apps.
- Combined segments.
- Optimized targeting or AI-powered campaigns.
- YouTube creator partnership boosts when creator videos are linked into campaigns.

Useful when:

- The causal segment is intent-based and can be proxied through search terms, URLs, categories, or in-market segments.
- The user has first-party behavior that can become a data segment.
- Creator content should be amplified through video campaigns.

Watch:

- Search intent and treatment effect are not the same thing.
- Optimized targeting can move beyond the chosen segment.
- Some audience segments are observation-only or behave differently by campaign type.

### TikTok

Typical controls:

- Demographics.
- Custom audiences.
- Lookalike audiences.
- Interest and behavior targeting.
- Device targeting.
- Smart targeting.
- Creator marketplace for creator discovery and campaign reporting.

Useful when:

- The treatment is content-led and creative format is part of the effect.
- The causal segment maps to content consumption, interest, behavior, or creator community.
- The country has enough TikTok inventory and relevant creators.

Watch:

- Available targeting locations vary by market.
- Over-narrow targeting can starve delivery.
- Creator audience and paid ad audience may not be the same population.

### Amazon Ads And Retail Media

Typical controls:

- Amazon audiences based on buying, browsing, and streaming signals.
- Advertiser audiences from custom inputs and remarketing.
- Third-party audiences where available.
- Product/category/contextual targeting.
- Keyword and ASIN targeting for sponsored ads.
- DSP inventory across Amazon and third-party supply.
- AMC custom audiences where available.

Useful when:

- The causal segment is tied to product browsing, purchase behavior, category interest, or competitor products.
- The intervention is close to purchase.
- Retail media can connect exposure to transaction behavior.

Watch:

- Availability varies by country and advertiser access.
- Sponsored ads and DSP have different controls and measurement.
- ROAS is not incrementality unless a lift design exists.

### Ecommerce Internal Bidding

Typical controls:

- Search query.
- Category path.
- Product view or cart behavior.
- Price sensitivity.
- Promotion eligibility.
- Inventory and delivery promise.
- Seller margin.
- Customer lifecycle.
- Membership or loyalty tier.
- Historical response to ads, coupons, or placements.

Useful when:

- The platform owns user, product, query, inventory, and transaction logs.
- The treatment is ranking, sponsored placement, coupon, recommendation, or homepage module.
- The bidder can include no-treatment or organic baseline.

Watch:

- Auction metrics can reward cannibalization.
- Seller-funded discounts may shift margin across parties.
- Marketplace fairness and seller exposure rules can constrain personalization.

## Country And Market Layer

Always check by country:

- Platform availability.
- Audience targeting availability.
- Creator marketplace availability.
- Privacy and consent requirements.
- Sensitive category rules.
- Language and localization needs.
- Local platforms that matter more than global platforms.
- Payment, affiliate, and tax rules for creators.
- Minimum spend, managed-service thresholds, or account access limits.
- Planning tool availability and whether the estimate represents people, accounts, devices, cookies, households, or reachable impressions.

Do not assume a US activation plan works in Germany, Japan, Brazil, India, KSA, or China.

## Size And Share Rule

Do not invent country percentages.

Estimate in this order:

1. Country reachable universe.
2. Platform estimated audience size.
3. Category or intent filter.
4. Activation match rate.
5. Eligibility and suppression.
6. Persuadable share from experiment or uplift evidence.

If step 6 is unavailable, report reachable audience size but label persuadable size as unknown.

## Mapping Quality

Use this scale:

- High: first-party audience or internal bidder can directly express the causal segment.
- Medium: platform proxy is close but incomplete, such as in-market category for purchase intent.
- Low: proxy is loose, such as broad interest for a nuanced causal segment.
- Unavailable: no legal or practical platform control exists.

If match quality is medium or low, the output must say what will be lost in translation.

## Measurement Rule

Platform reported conversions are not enough.

Use one of:

- Platform conversion lift or brand lift where available.
- Holdout audience.
- Geo or market split.
- Incrementality experiment with suppressed audience.
- Matched market test.
- Internal conversion and margin readout after exposure logs are joined.

When platform automation is used, holdout should sit outside the automated delivery system where possible.

## Output Pattern

Return:

1. Causal segment.
2. 20D audience definition.
3. Platform proxy.
4. Match quality.
5. Country estimated share and reachable size.
6. Required audience asset.
7. Exclusions and no-treatment.
8. Measurement plan.
9. Risk of false learning.
10. Next artifact.

## Example

Causal conclusion:

`High prior-category buyers with low recent activity respond to education content but not discounts.`

Activation:

- Meta: custom audience from CRM or site events; exclude recent purchasers; test education creative against no-contact holdout.
- Google/YouTube: your data segment plus custom segment around category research; use video education treatment; measure lift, not view-through conversions alone.
- TikTok: creator or interest proxy if content-led; match quality medium unless first-party audience can be uploaded.
- Amazon/Retail media: remarketing or category viewer audience; suppress discount arms; measure incremental category purchase and margin.

Weakest dependency:

`If the platform cannot express low recent activity, the activation proxy becomes category buyers only and may include sure things.`
