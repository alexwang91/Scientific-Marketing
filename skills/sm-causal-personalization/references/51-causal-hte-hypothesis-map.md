# 51 Causal HTE Hypothesis Map

## Core Position

The causal/HTE hypothesis map is the bridge between product semantics and media activation.

It does not prove what works. It states why a treatment might change behavior for one group and not another, then routes the hypothesis to measurement.

Do not start with a model. Start with the mechanism.

## Input

Use inputs from:

- Product-Market Semantic Card.
- Audience Taxonomy And Sizing Cards.
- Treatment Library.
- Label registry and embedding needs from `52-label-vector-representation.md` when concepts repeat, need retrieval, or feed models.
- LLM Context Segment Scoring Card from `53-llm-context-segment-scoring.md` when text samples are scored.
- LLM Semantic Prior Hypothesis from `54-llm-semantic-prior-hypothesis.md` when a profile, segment, account, or context is scored against a treatment.
- LLM Semantic Prior Rubric from `55-llm-semantic-prior-rubric.md` when semantic fit, relevance, resistance, or confidence must be categorized.
- Semantic Prior Calibration from `57-semantic-prior-calibration.md` when numeric probabilities, budget moves, suppression, or scale decisions depend on semantic priors.
- Reviews, Q&A, search queries, competitor listings, and creator/content signals.
- Prior experiments or experiment memory.
- Country constraints and platform activation options.

Minimum fields:

- Product use case.
- Selling point.
- Target demand job.
- Treatment candidate.
- Baseline or no-treatment condition.
- Outcome.
- Cost or margin assumption.

## Output

Produce:

- Causal mechanism map.
- HTE dimension map.
- Label registry subset for mechanisms, HTE dimensions, and treatments.
- Sample-level intent, reason, barrier, and treatment-fit distributions when LLM context scoring is used.
- Context-conditioned semantic priors when a treatment is judged against a specific profile or segment.
- Audience-treatment pair table.
- Persuadable/sure thing/lost cause/sleeping dog hypotheses.
- Evidence grade.
- Measurement route.
- Activation implication.
- Weakest assumption.

## Step 1: Convert Selling Points Into Mechanisms

A selling point is not yet a causal mechanism.

Convert:

- Feature: what the product has.
- Benefit: what the feature helps with.
- Mechanism: why that benefit changes behavior.
- Friction removed: what objection, risk, effort, uncertainty, or cost is reduced.
- Outcome: what should change.

Template:

`[feature] may change [outcome] for [buyer context] by reducing [friction] or increasing [confidence/value/urgency].`

Example:

`Open-ear design may increase purchase among outdoor runners by reducing safety concerns about blocked ambient sound.`

If the mechanism will be reused, create a stable label ID. Use vectors only when the mechanism must be matched against search terms, reviews, creator content, or prior experiments.

## Step 2: Identify HTE Dimensions

HTE dimensions are reasons the same treatment has different effects.

Use these categories:

- Use-case context: sport, commute, work, sleep, gaming, travel, baby care, outdoor, recovery.
- Product-fit context: body fit, compatibility, size, comfort, installation, device ecosystem.
- Environment: noise, weather, movement, public space, home, office, travel.
- Funnel stage: unaware, problem-aware, solution-aware, comparing, ready, post-purchase.
- Category maturity: beginner, experienced, expert, loyalist, switcher.
- Risk or proof need: expert proof, demo, reviews, certification, warranty, social proof.
- Price state: premium buyer, value seeker, deal seeker, margin-sensitive.
- Competitor relation: comparing, dissatisfied, locked in, substitute user.
- Channel state: search intent, marketplace browse, social video engagement, creator affinity, CRM history.
- Timing state: seasonal trigger, replacement trigger, event, injury, routine change, upgrade cycle.
- Causal history: known persuadable, sure thing, lost cause, sleeping dog, unknown.

Use only dimensions that could change treatment effect or activation.

For high-volume text sources, use embeddings to discover candidate dimensions, then convert useful clusters into human-readable labels before using them in a strategy.

When `53-llm-context-segment-scoring.md` is used, prioritize HTE dimensions that appear repeatedly in high-confidence reason and barrier labels. Treat those distributions as sample-level semantic evidence, not causal root causes.

When `54-llm-semantic-prior-hypothesis.md` is used, let the LLM judge whether a treatment semantically fits the given context. Use strong explicit signals such as stated need, stated dislike, recent search, and product behavior more than weak demographic signals. Convert the result into a candidate HTE dimension, reframe, suppression hypothesis, or measurement route. Use `55` for category definitions and `57` for calibration. Do not treat the semantic prior as CATE.

Semantic prior to HTE conversion:

- `semantic_fit` becomes a candidate mechanism or mismatch label.
- `predicted_relevance` helps separate attention fit from incremental value.
- `predicted_resistance` creates sleeping-dog and guardrail hypotheses.
- `mismatch_type` decides whether to reframe, change proof, change channel, change offer, suppress, or test.
- `causal_role_hypothesis` remains candidate until measured against baseline.

## Step 3: Build Audience-Treatment Pairs

Create one row per pair:

- `audience_or_context`
- `treatment`
- `baseline`
- `mechanism`
- `expected_effect_direction`
- `primary_outcome`
- `cost_or_margin_risk`
- `possible_sure_things`
- `possible_lost_causes`
- `possible_sleeping_dogs`
- `evidence_grade`
- `measurement_route`
- `activation_path`

Effect direction:

- positive
- negative
- neutral
- unknown

Evidence grade:

- A: prior randomized or credible causal evidence.
- B: related experiment, strong first-party data, or close historical analog.
- C: behavioral, search, review, or platform proxy.
- D: expert judgment or product logic only.

## Step 4: Assign Causal Role Hypotheses

Use causal role cautiously.

### Persuadables

Likely if:

- They have the demand job.
- They have unresolved friction.
- The treatment directly addresses that friction.
- They are not already at purchase decision.
- Cost and timing are acceptable.

Action:

- Test and prioritize if expected net value is positive.

### Sure Things

Likely if:

- They show high purchase intent.
- They already trust the brand or product.
- They are near checkout or repeat purchase.
- The treatment mostly discounts or reminds them.

Action:

- Suppress costly treatments.
- Use low-cost or no treatment.

### Lost Causes

Likely if:

- The product does not fit the use case.
- Price, compatibility, country availability, or claim gap is blocking.
- The user is committed to a substitute.

Action:

- Do not spend until product, price, or distribution changes.

### Sleeping Dogs

Likely if:

- Treatment increases annoyance, distrust, privacy concern, or price expectation.
- Discount trains buyers to wait.
- KOL or claim mismatch damages credibility.
- Frequency or retargeting creates fatigue.

Action:

- Suppress or cap frequency.
- Use guardrails and harm monitoring.

## Step 5: Map To Measurement

Use the smallest credible test:

- Holdout or A/B for individual-level targeting.
- Geo or matched-market test for market-level media.
- Product-level retail media holdout when ecommerce data allows.
- Creator paid audience holdout for KOL amplification.
- Search incrementality test for high-intent queries.
- Account or cluster test for B2B.
- OPE only for screening large action spaces.
- Surrogate only for early long-term read.

Do not use a model when a clean small test is possible.

## Step 6: Map To Activation

Activation follows measurement logic:

- If mechanism is search intent, use search, Shopping, product/category, or custom query segments.
- If mechanism is trust transfer, use expert review, KOL, creator whitelisting, or publisher content.
- If mechanism is product fit, use product detail page, comparison content, reviews, and retargeting.
- If mechanism is price friction, test offer, bundle, or threshold incentive with margin guardrails.
- If mechanism is habit or lifecycle, use CRM, app, email, or retargeting sequence.
- If mechanism is B2B opportunity, use sales routing, quote guidance, or rep action.

Every activation needs a no-treatment or business-as-usual comparison.

## Step 7: Decide The Next Action

Choose:

- Test: evidence is weak but plausible and cost is acceptable.
- Scale: causal evidence is credible and expected net value is positive.
- Suppress: likely sure thing, sleeping dog, or negative margin.
- Redesign: mechanism is plausible but treatment does not address the friction.
- Research: evidence or audience size is too uncertain.
- Do nothing: no credible mechanism or activation path.

## Hypothesis Syntax

Use:

`For [audience/context], [treatment] versus [baseline] should change [outcome] by [mechanism], especially when [HTE dimension]. Risk: [cost/harm]. Evidence: [grade/source]. Test: [measurement route].`

Example:

`For UK outdoor runners comparing sports earbuds, expert demonstration video versus generic product ad should increase product-page conversion by reducing fit and ambient-safety uncertainty, especially among users searching "running headphones that do not fall out." Risk: creator fee and weak audience match. Evidence: C from search/review logic unless prior lift exists. Test: paid creator audience holdout or geo split.`

## What Not To Do

Do not:

- Treat a demographic as a mechanism.
- Treat platform interest as causal evidence.
- Treat high intent as persuadability.
- Treat coupon redemption as coupon effect.
- Treat KOL tracked sales as KOL incrementality.
- Treat LLM semantic fit as CATE.
- Treat an uncalibrated LLM probability as conversion probability or ROI.
- Write HTE dimensions that cannot be activated or measured.
- Name a segment validated before comparable treatment/control evidence exists.

## Final Output Pattern

Return:

1. Product mechanism list.
2. HTE dimension map.
3. Label registry subset.
4. Embedding needs.
5. LLM context scoring summary when used.
6. LLM semantic prior summary when used.
7. Audience-treatment pair table.
8. Causal role hypotheses.
9. Measurement route.
10. Activation implication.
11. Suppression candidates.
12. Weakest assumption.
13. Next test.
