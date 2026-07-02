# 54 LLM Semantic Prior Hypothesis

## Core Position

Use this layer when a person, segment, account, or buyer context must be judged against a treatment candidate before effect data exists.

The output is a context-conditioned semantic prior. It is a structured hypothesis about treatment-context fit. It is not CATE, lift, conversion probability, ROI, or final targeting logic.

Mathematical position:

`S_i,t = LLM(X_i, T_t, B_t, P)`

Where:

- `X_i` is the person, segment, account, or buyer context.
- `T_t` is the treatment candidate.
- `B_t` is the baseline or no-treatment condition.
- `P` is the product-market semantic card.
- `S_i,t` is the semantic prior output: fit, relevance, resistance, reason, barrier, reframe, HTE labels, and measurement route.

Downstream causal estimation remains:

`tau_i,t = E[Y_i(T_t) - Y_i(B_t) | X_i]`

54 creates `S_i,t` and candidate labels for `tau_i,t` to test. It does not estimate `tau_i,t` by itself.

## When To Use

Use 54 when the user asks:

- Does this ad or content angle fit this audience?
- Why would this person ignore or resist this treatment?
- Should this audience receive this offer, KOL content, expert review, retargeting, or sales outreach?
- Is the audience wrong, or is the framing wrong?
- Which HTE dimensions should we test first?
- Which treatment should be suppressed, reframed, or sent to exploration?

Use 53 first when the input is many text samples and the user needs sample-level distributions. Use 54 when the input is a context-treatment pair.

## Required Inputs

Use only pre-treatment information.

Context fields:

- `context_id`
- country
- language
- subject type: person, segment, account, lead, household, buying committee
- stated needs
- stated dislikes
- purchase job
- use context
- constraints: budget, compatibility, shipping, inventory, legal claim, timing
- search or query behavior
- product or category behavior
- competitor or substitute behavior
- funnel stage
- brand relationship
- price sensitivity
- content or creator affinity
- prior contacts or CRM state

Product fields:

- product category
- designed-for use case
- core selling points
- price tier and margin if available
- claims that need proof
- competitors and substitutes

Treatment fields:

- `treatment_id`
- treatment family
- creative angle
- claim
- channel
- expected mechanism
- cost
- frequency or intensity
- baseline or no-treatment condition
- guardrail risks

Every field needs provenance:

- observed
- self-reported
- first-party behavior
- platform proxy
- inferred
- model-generated
- stale
- sensitive or restricted

## Step 1: Context Audit

Classify signals before scoring.

Strong signals:

- explicit stated need
- explicit stated dislike
- recent search or query behavior
- product detail page, cart, comparison, quote, or demo behavior
- repeated review, support, call, or survey theme
- hard constraint: budget, compatibility, country availability, shipping, inventory, legal claim, device ecosystem

Medium signals:

- category interest
- competitor interest
- content engagement
- creator or community affinity
- prior purchase
- CRM lifecycle state
- sales stage

Weak signals:

- broad demographics
- income proxy
- gender proxy
- age proxy
- broad lifestyle assumption
- old behavior
- platform interest label
- lookalike membership

Restricted signals:

- protected or sensitive traits
- minors
- health, finance, employment, housing, education, or other high-risk context
- inferred vulnerability

Scoring rule:

- Strong signals can drive fit, resistance, and reframe.
- Medium signals can support a judgment.
- Weak signals can describe context, but should not drive mechanism.
- Restricted signals require governance review and should not be used as hidden persuasion or exclusion logic.

## Step 2: Treatment Decomposition

Split every treatment into decision-safe parts:

- treatment family: search ad, social video, creator/KOL, expert review, discount, bundle, product page, retargeting, email, sales outreach, no treatment
- creative angle: sport performance, commute comfort, safety, premium identity, value, proof, convenience, compatibility, status, risk reduction
- mechanism: what friction, uncertainty, effort, risk, or value gap the treatment changes
- claim boundary: what the treatment claims and what proof is required
- cost: media, discount, production, creator fee, sales time, rights, margin loss
- baseline: generic ad, no ad, no discount, usual sales flow, current product page
- intensity: exposure, frequency, discount depth, sales touch level, creator amplification

Do not score vague actions. A treatment must have a concrete angle and baseline.

## Step 3: Semantic Fit

`semantic_fit` answers:

`Does this treatment angle match the context job, preference, constraint, and product meaning?`

Use:

- high
- medium
- low
- unknown

High:

- The treatment angle directly matches a stated need, recent behavior, or hard constraint.
- The product mechanism addresses a live friction.
- The baseline leaves that friction unresolved.

Medium:

- The product fits the context, but the treatment angle is generic or incomplete.
- The treatment addresses one friction while leaving another important friction open.
- The fit depends on proof, offer, timing, or channel.

Low:

- A strong signal conflicts with the treatment angle.
- The treatment emphasizes a use case the context rejects.
- A hard constraint blocks the mechanism.
- The product may fit, but the chosen angle is likely wrong.

Unknown:

- Context is thin.
- Signals conflict without a clear dominant field.
- The treatment is underspecified.

## Step 4: Predicted Relevance

`predicted_relevance` answers:

`Will this treatment feel related to the subject's current task or situation?`

High relevance:

- Direct query, comparison, cart, demo, quote, or stated job matches the treatment.
- The treatment speaks to a current use context.

Medium relevance:

- Category interest exists, but treatment angle is broad.
- The subject has a related need, but no recent signal.

Low relevance:

- The treatment angle is outside the stated task.
- The product category is adjacent, not central.
- The context points to another use case.

Unknown:

- No task, behavior, or need signal is available.

Relevance is not lift. High relevance can still be a sure thing or margin waste.

## Step 5: Predicted Resistance

`predicted_resistance` answers:

`Could this treatment create annoyance, distrust, price expectation, brand harm, or decision friction?`

High resistance:

- explicit dislike or objection conflicts with the treatment
- privacy or tracking concern
- high-frequency retargeting risk
- discount training risk
- claim distrust
- creator or KOL mismatch
- sensitive context
- price shock
- switching or compatibility burden

Medium resistance:

- Some concern exists, but treatment can be reframed or proof-backed.
- The channel may be intrusive.
- The treatment asks for effort or commitment.

Low resistance:

- Treatment is expected in the context.
- Friction is informational, not emotional or trust-based.
- Cost and channel risk are low.

Unknown:

- Resistance signals are missing.

## Step 6: Reframe Decision

Low semantic fit should trigger diagnosis before rejection.

Classify the mismatch:

- product mismatch: product does not solve the job
- audience mismatch: context lacks the demand job
- treatment mismatch: action family is wrong
- creative angle mismatch: claim or scene is wrong
- proof mismatch: user needs evidence, not persuasion
- offer mismatch: value equation is wrong
- channel mismatch: channel is weak or intrusive
- timing mismatch: decision moment is wrong

Recommended actions:

- suppress treatment
- reframe treatment
- change channel
- change proof
- change offer
- lower intensity
- route to research
- run exploration test
- keep no-treatment holdout

## Step 7: HTE Conversion

Convert semantic prior into testable HTE material.

Output labels:

- `mechanism_labels`
- `barrier_labels`
- `hte_dimension_labels`
- `suppression_reason_labels`
- `reframe_labels`
- `guardrail_labels`

Examples:

- `does not like exercise` plus `running-performance ad` -> `BAR_use_case_mismatch`, `HTE_non_sport_context`, `REF_commute_comfort`
- `searches best running earbuds` plus `10% discount` -> `RISK_margin_cannibalization`, `HTE_high_intent_sure_thing_risk`
- `complains about repeated ads` plus `high-frequency retargeting` -> `RISK_fatigue`, `HTE_ad_annoyance`, `ROLE_possible_sleeping_dog`

Every HTE label must be:

- observable before assignment
- actionable or measurable
- tied to a treatment mechanism
- linked to a baseline
- marked as candidate until validated

## Step 8: Causal Role Hypothesis

Map the semantic prior cautiously:

- `likely_persuadable`: high fit, unresolved friction, treatment directly resolves the friction, no strong sure-thing signal.
- `likely_sure_thing`: high relevance, strong purchase intent, treatment mainly discounts or reminds.
- `likely_lost_cause`: product does not solve the job, hard constraint blocks purchase, or user is committed to a substitute.
- `possible_sleeping_dog`: resistance risk is high and treatment may create harm, fatigue, distrust, privacy concern, or margin damage.
- `unknown`: evidence is thin, mixed, stale, or driven by weak signals.

Rules:

- Relevance alone cannot create `likely_persuadable`.
- Demographics alone cannot create a causal role.
- A low fit treatment can coexist with a good product fit if the angle is wrong.
- Strong recommendations need a measurement route.

## Output Table

For each context-treatment pair, output:

- `context_id`
- `treatment_id`
- `baseline`
- `signal_audit`
- `semantic_fit`
- `predicted_relevance`
- `predicted_resistance`
- `main_fit_reason`
- `main_nonfit_reason`
- `mismatch_type`
- `suggested_reframe`
- `mechanism_labels`
- `barrier_labels`
- `hte_dimension_labels`
- `causal_role_hypothesis`
- `recommended_action`
- `confidence`
- `human_review_flag`
- `measurement_route`
- `boundary_note`

## Output Pattern

Return:

1. Context summary.
2. Treatment and baseline.
3. Signal audit.
4. Semantic fit.
5. Predicted relevance.
6. Predicted resistance.
7. Main reason for fit.
8. Main reason for nonfit.
9. Mismatch type.
10. Reframe option.
11. HTE dimension.
12. Causal role hypothesis.
13. Recommended action.
14. Measurement route.
15. Confidence.
16. Human review flag.
17. Boundary note.

## Probability Use

Use categories by default.

Numeric probabilities are allowed only when:

- a rubric is defined
- the same rubric has human labels or historical outcome labels
- calibration quality is reported
- the denominator and evaluation set are stated

Recommended language:

- `semantic_fit_probability`: model prior within this rubric
- `predicted_relevance_probability`: semantic relevance prior
- `predicted_resistance_probability`: semantic resistance prior

Do not call these:

- conversion probability
- incremental lift
- CATE
- ROI
- audience share

## Calibration Dependency

Use `57-semantic-prior-calibration.md` when:

- numeric probabilities are requested
- 54 output will affect budget
- a suppression rule will be scaled
- the user wants to compare LLM priors with actual outcomes
- a market, country, language, or channel changes

## Rubric Dependency

Use `55-llm-semantic-prior-rubric.md` for high, medium, low, unknown definitions and action mapping.

Use `56-llm-semantic-prior-scenarios.md` for examples and boundary patterns.

## Human Review

Require human review when:

- the result excludes a group from a meaningful offer
- sensitive or restricted traits appear
- the treatment is high risk
- budget allocation is material
- the LLM relies on stereotype-like inference
- confidence is low and action is strong
- the output recommends suppression, discounting, or high-frequency contact

## Red Lines

Do not:

- Treat semantic fit as CATE.
- Treat LLM probability as ROI.
- Treat demographics as mechanism.
- Use sensitive traits as hidden targeting reasons.
- Exclude users only because a profile sounds unlike the product.
- Use post-treatment behavior as pre-treatment context.
- Hide fields that drove the judgment.
- Scale a suppression rule without a holdout or credible prior experiment.
