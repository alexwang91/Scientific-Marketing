# 45 Product Market Semantics

## Core Position

Do not start with audience demographics when the product itself encodes the market.

Many products are designed around a use case, body context, environment, occasion, constraint, or identity. A sports earbud, clip-on earbud, open-ear headphone, sleep headphone, gaming headset, travel stroller, hiking shoe, or office chair already carries a product-market hypothesis.

The right sequence is:

`product semantics -> demand job -> observable platform proxy -> causal segment -> treatment -> measurement`

Audience taxonomy is downstream of product-market semantics, not a replacement for it.

## Why This Layer Exists

Ecommerce systems do not only classify people. They classify products.

Useful product-market signals can come from:

- Category tree.
- Product type.
- Product attributes.
- Marketplace browse nodes.
- Search queries.
- Product titles.
- Bullet points.
- Images and videos.
- Review language.
- Q&A language.
- Product filters and facets.
- Competitor ASINs, SKUs, or item IDs.
- Price, rating, shipping, and availability.
- Product feed attributes.
- Retail media and marketplace targeting controls.

These signals often reveal the use case more directly than a platform audience segment.

## Product Semantic Dimensions

Use these dimensions before building an audience card:

1. Category tree: broad category, subcategory, niche category.
2. Product type: platform or merchant-defined type.
3. Form factor: physical or experiential format.
4. Designed-for use case: sport, commute, work, sleep, gaming, travel, baby care, outdoor, recovery, study, gifting.
5. Occasion: daily use, workout, commute, holiday, event, emergency, replacement, upgrade.
6. User context: beginner, expert, parent, student, athlete, creator, professional, traveler, elder user.
7. Body or fit context: ear shape, skin type, body size, hand size, posture, mobility, comfort need.
8. Environment: indoor, outdoor, office, gym, rain, heat, cold, noise, low light, travel, public transport.
9. Core job-to-be-done: what progress the buyer wants.
10. Main pain removed: discomfort, risk, complexity, time, cost, embarrassment, uncertainty, social friction.
11. Performance claim: waterproof, battery life, latency, durability, noise reduction, stability, speed, precision.
12. Proof requirement: demo, expert test, certification, review, comparison, clinical proof, creator proof.
13. Constraint: budget, compatibility, size, shipping, installation, regulation, privacy, safety.
14. Price tier: entry, value, premium, luxury, professional.
15. Brand position: trusted incumbent, challenger, specialist, lifestyle, technical, local.
16. Substitute set: what the buyer would use instead.
17. Competitor anchor: products or brands buyers compare against.
18. Search language: keywords, modifiers, problem terms, comparison terms.
19. Marketplace facets: category filters, brand filters, rating filters, price filters, feature filters.
20. Listing claims: title, bullets, hero image, product highlights, A+ content, storefront.
21. Review themes: praised benefits, complaints, unexpected use cases.
22. Purchase trigger: replacement, upgrade, new routine, seasonal need, gift, injury, event, trend.
23. Channel fit: search, marketplace, social video, retail media, creator, sales, affiliate.
24. Compliance boundary: claims that need evidence or cannot be targeted.
25. Causal hypothesis: which treatment should change behavior for which demand job.

## Ecommerce Evidence Sources

### Amazon And Retail Media

Use:

- Product targeting by individual products, categories, brands, or product features.
- Category refinement by attributes such as brand, price range, ratings, Prime shipping eligibility, and similar marketplace facets where available.
- Search term reports.
- ASIN/SKU/product detail page behavior.
- Product Type Definitions, browse nodes, item type keywords, and category-specific attributes.
- Reviews, Q&A, best-seller lists, and competitor product pages.

Good for:

- Competitor conquesting.
- Category intent.
- Product feature matching.
- Substitute and complement targeting.
- High-intent retail media activation.

### Google Merchant And Shopping

Use:

- `google_product_category`.
- `product_type`.
- Title, description, image, GTIN, brand, price, availability, variant attributes, product highlights, and custom labels.
- Shopping campaign product groups.
- Search terms and custom segments.

Good for:

- Search and Shopping intent.
- Product-feed-driven bidding and reporting.
- Granular merchant-defined product segmentation.
- Mapping use cases into query language.

### Shopify And DTC Catalogs

Use:

- Standard Product Taxonomy.
- Category metafields and product attributes.
- Product type.
- Variant options.
- Collections.
- Tags.
- Product page content.
- Reviews and post-purchase surveys.

Good for:

- Building a clean internal product-market taxonomy.
- Syncing product attributes into Google, Meta, marketplaces, and storefront filters.
- Defining first-party segments based on product interactions.

## Use-Case Mapping

When a product is designed for a use case, map it like this:

1. Product claim: what the listing or product design says.
2. Demand job: what buyer progress it implies.
3. Buyer context: who is likely to face that job.
4. Observable signals: search terms, product views, category behavior, content interests, creator communities.
5. Platform controls: query, category, ASIN/SKU, product feed, custom audience, interest, creator, or broad algorithm.
6. Causal test: which treatment should work if the use-case hypothesis is true.

## Example: Sports Earbuds

Product semantics:

- Category: electronics > audio > headphones.
- Product type: wireless earbuds.
- Form factor: open-ear, clip-on, in-ear, neckband, or ear hook.
- Designed-for use case: running, gym, cycling, outdoor workout.
- Environment: sweat, movement, wind, outdoor noise, safety awareness.
- Performance claims: secure fit, sweat resistance, water resistance, battery life, awareness mode, low weight.
- Pain removed: falling out, discomfort, blocked ambient sound, sweat damage.
- Substitute set: regular earbuds, sports headphones, bone conduction headphones, cheap wired earbuds.

Demand jobs:

- "I need audio that stays comfortable and stable during movement."
- "I need to hear surroundings while exercising outside."
- "I need sweat resistance without overpaying for studio audio."

Platform proxies:

- Amazon/retail media: sports earbuds category, competitor ASINs, category filters, product targeting, search queries like running headphones or sweatproof earbuds.
- Google: Shopping product type, custom segments from sport earbud queries and competitor URLs, YouTube review content.
- Meta/TikTok: fitness content interests, running/gym creator communities, first-party site visitors to sports-earbud PDPs, lookalikes from sports-earbud buyers.
- Internal bidder: query, PDP view, cart, prior category purchase, margin, inventory, review themes.

Causal caution:

Fitness interest does not prove the sports-earbud treatment works. It is only an activation proxy. Use holdout, geo test, or product-level lift readout.

## Product-Market Card

Return:

- Product semantic definition.
- Designed-for use case.
- Demand jobs.
- Buyer context.
- Product attributes and claims.
- Marketplace facets and filters.
- Search/query language.
- Competitor and substitute set.
- Platform activation proxies.
- Audience dimensions affected.
- Causal hypothesis.
- Measurement plan.
- Weakest assumption.

## When Not To Overbuild

Do not create unnecessary dimensions if the marketplace does not expose them and buyers do not use them.

Use finer product semantics only when:

- Product design clearly encodes a use case.
- Search queries contain use-case modifiers.
- Marketplace filters or attributes expose the feature.
- Reviews show repeated use-case language.
- Competitor listings use the same positioning.
- The treatment or targeting decision changes because of the distinction.

If no platform, feed, search, review, or catalog signal supports the distinction, keep it as a qualitative hypothesis.
