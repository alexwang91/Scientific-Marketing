# 56 LLM Semantic Prior Scenarios

## Core Position

Use these scenarios to make 54 concrete. They show how to judge fit, avoid overclaiming, and turn semantic priors into HTE hypotheses.

Each scenario follows:

- Input
- Semantic prior output
- HTE hypothesis
- Recommended action
- Measurement route
- Boundary sentence

## Scenario 1: Dislikes Exercise, Running Ad

Input:

- Context: high-income male, self-reported dislike of exercise, long commute.
- Product: open-ear earbuds.
- Treatment: running-performance social video ad.
- Baseline: generic product ad or no ad.

Semantic prior output:

- `semantic_fit`: low
- `predicted_relevance`: low to medium
- `predicted_resistance`: medium
- `main_nonfit_reason`: explicit exercise dislike conflicts with running-performance angle
- `mismatch_type`: creative angle mismatch
- `suggested_reframe`: commute comfort, ambient awareness, long-wear comfort, call clarity
- `causal_role_hypothesis`: unknown for product; likely lost cause for running-performance treatment
- `confidence`: medium if dislike is self-reported and recent

HTE hypothesis:

`For non-sport commuters, commute-comfort framing versus running-performance framing may improve product-page engagement by matching the daily use context.`

Recommended action:

- Reframe before audience suppression.

Measurement route:

- A/B: running-performance ad versus commute-comfort ad.
- Keep no-ad or generic-ad holdout if budget permits.

Boundary sentence:

`This does not say the person will not buy earbuds. It says the running-performance treatment has weak semantic fit.`

## Scenario 2: Runner With High Purchase Intent, Discount Ad

Input:

- Context: frequent runner, searches "best running earbuds 2026", viewed product page three times.
- Product: sports earbuds.
- Treatment: 10 percent discount ad.
- Baseline: no discount.

Semantic prior output:

- `semantic_fit`: high
- `predicted_relevance`: high
- `predicted_resistance`: low
- `main_fit_reason`: product and running task match
- `risk`: sure-thing and margin cannibalization risk
- `causal_role_hypothesis`: likely sure thing until discount incrementality is measured
- `suggested_reframe`: expert proof, fit demo, low-cost reminder

HTE hypothesis:

`For high-intent runners, proof content or low-cost reminder may preserve margin better than discount, because many may buy under baseline.`

Recommended action:

- Test discount only with holdout and margin guardrail.

Measurement route:

- Holdout: discount versus no discount.
- Guardrail: contribution margin per eligible user.

Boundary sentence:

`High intent supports relevance. It does not prove discount lift.`

## Scenario 3: Price-Sensitive User, Premium Brand Ad

Input:

- Context: searches "cheap", "discount", "under $50"; complains similar products are expensive.
- Product: $199 premium earbuds.
- Treatment: premium identity brand ad.
- Baseline: generic function ad.

Semantic prior output:

- `semantic_fit`: low to medium
- `predicted_relevance`: medium
- `predicted_resistance`: high
- `main_nonfit_reason`: price-value friction is explicit
- `mismatch_type`: offer and proof mismatch
- `suggested_reframe`: durability, warranty, long-term cost, bundle, financing, entry offer
- `causal_role_hypothesis`: possible lost cause at current price; possible persuadable with value proof or offer

HTE hypothesis:

`For price-sensitive category shoppers, value-proof or offer framing may outperform premium identity framing by reducing price-value friction.`

Recommended action:

- Test value proof and offer; avoid premium-only scale.

Measurement route:

- Multi-arm A/B: premium identity versus value proof versus offer versus holdout.
- Guardrail: margin and return rate.

Boundary sentence:

`Price sensitivity is a barrier label. It is not proof that the user lacks demand.`

## Scenario 4: Ad Fatigue, Retargeting

Input:

- Context: visited product page, closed ads repeatedly, comment says "stop showing me this."
- Product: smart home device.
- Treatment: high-frequency retargeting.
- Baseline: low-frequency reminder or no ad.

Semantic prior output:

- `semantic_fit`: medium
- `predicted_relevance`: medium
- `predicted_resistance`: high
- `main_fit_reason`: product interest signal exists
- `main_nonfit_reason`: high-frequency channel conflicts with annoyance signal
- `mismatch_type`: channel and intensity mismatch
- `causal_role_hypothesis`: possible sleeping dog
- `suggested_reframe`: lower frequency, educational content, cooling period

HTE hypothesis:

`For product visitors with ad-fatigue signals, high-frequency retargeting may reduce net value through annoyance, while lower-frequency education may keep relevance with less harm.`

Recommended action:

- Cap frequency or suppress high-frequency treatment.

Measurement route:

- Frequency-cap A/B with complaint, unsubscribe, hide-ad, and conversion guardrails.

Boundary sentence:

`A visit signal shows possible relevance. Fatigue signal creates harm risk.`

## Scenario 5: B2B Account, Expensive Sales Outreach

Input:

- Context: mid-market company hiring data engineers; visited data governance pages.
- Product: B2B data governance SaaS.
- Treatment: sales rep outbound call.
- Baseline: automated email nurture.

Semantic prior output:

- `semantic_fit`: high
- `predicted_relevance`: high
- `predicted_resistance`: medium
- `main_fit_reason`: organizational signals match product job
- `risk`: sales capacity cost and contact fatigue
- `causal_role_hypothesis`: possible persuadable, capacity constrained
- `suggested_reframe`: low-cost content qualification before rep call

HTE hypothesis:

`For accounts with hiring and product-page signals, sales outreach may increase qualified pipeline, especially after content qualification.`

Recommended action:

- Route only highest-fit accounts to sales; keep account-level holdout.

Measurement route:

- Account-level randomized routing test.
- Outcome: incremental pipeline or profit per sales hour.

Boundary sentence:

`Sales outreach is a costly treatment. Relevance alone does not justify rep time.`

## Scenario 6: High-Intent Search, Expert Review

Input:

- Context: searches "best air purifier for allergies", reads comparison pages.
- Product: premium air purifier with medical-grade claim boundary.
- Treatment: expert comparison content.
- Baseline: standard shopping ad.

Semantic prior output:

- `semantic_fit`: high
- `predicted_relevance`: high
- `predicted_resistance`: low to medium
- `main_fit_reason`: comparison and proof need are explicit
- `risk`: claim proof and compliance
- `causal_role_hypothesis`: likely persuadable if proof gap is unresolved
- `suggested_reframe`: certified proof, comparison table, allergen use context

HTE hypothesis:

`For comparison-stage allergy shoppers, expert proof content may increase qualified conversion by reducing claim uncertainty.`

Recommended action:

- Test expert proof content before discount.

Measurement route:

- Search or landing-page A/B with compliance review.

Boundary sentence:

`The need for proof is a plausible mechanism. Effect size needs measurement.`

## Scenario 7: Creator Fit, Claim Trust Risk

Input:

- Context: audience follows a creator for minimalist home design.
- Product: countertop appliance with strong performance claim.
- Treatment: creator lifestyle post.
- Baseline: expert review or product demo.

Semantic prior output:

- `semantic_fit`: medium
- `predicted_relevance`: medium
- `predicted_resistance`: medium to high
- `main_fit_reason`: creator-audience style fit
- `main_nonfit_reason`: lifestyle creator may not resolve performance claim uncertainty
- `mismatch_type`: proof mismatch
- `causal_role_hypothesis`: unknown; possible sleeping dog if claim feels overstated
- `suggested_reframe`: creator demo plus third-party proof

HTE hypothesis:

`For style-affinity audiences, creator content may create attention, while expert proof may be needed to convert claim-sensitive shoppers.`

Recommended action:

- Pair creator content with proof asset.

Measurement route:

- Creator paid audience holdout plus content-version comparison.

Boundary sentence:

`Creator fit does not resolve claim trust by default.`

## Scenario 8: Strong Causal Segment, Weak Platform Proxy

Input:

- Context: validated experiment suggests commute-safety framing works for urban cyclists.
- Product: open-ear earbuds.
- Treatment: commute-safety ad.
- Platform: social platform only offers broad cycling interest and city targeting.
- Baseline: generic ad.

Semantic prior output:

- `semantic_fit`: high
- `predicted_relevance`: high for true segment
- `predicted_resistance`: low to medium
- `main_risk`: activation proxy changes the reached population
- `mismatch_type`: activation mismatch
- `causal_role_hypothesis`: likely persuadable only for validated segment; unknown for platform proxy

HTE hypothesis:

`For true urban cycling commuters, commute-safety framing may work, but broad cycling interest may include weak-fit recreational users.`

Recommended action:

- Use proxy with measurement and conservative budget.

Measurement route:

- Platform lift test or geo split.
- Report match quality.

Boundary sentence:

`A valid causal segment can lose validity when the platform proxy changes the population.`
