# 41 Research Informed Architecture

## Core Position

The architecture should not be a campaign workflow with models attached.

It should be a causal decision system with twelve durable layers:

1. Decision layer.
2. Treatment layer.
3. Label and vector representation layer.
4. LLM context scoring layer.
5. LLM semantic prior hypothesis layer.
6. Evidence layer.
7. Causal estimation layer.
8. Decision-focused evaluation layer.
9. Allocation layer.
10. Activation layer.
11. OPE, surrogate, and sequential monitoring layer.
12. Learning and governance layer.

This change is required because the useful research is not saying "use a better model." It is saying that personalization works when experiments, treatment definitions, heterogeneity, economics, constraints, and online learning are connected.

For product-to-market work, use `49-product-to-market-causal-pipeline.md` as the main execution flow. This architecture file explains the system layers behind that flow.

## Architecture Change 1: Add Experiment Memory

Past experiments should become reusable assets.

Create an experiment memory before relying on new modeling:

- `experiment_id`
- population
- treatment IDs
- control definition
- assignment unit
- outcome window
- outcome metrics
- covariates available at assignment
- sample size
- control size
- treatment effect
- segment or CATE readout
- time period
- channel
- drift risk
- quality score

Why this matters:

- Past-experiment learning and incrementality representation learning require compatible experiment metadata.
- Large-scale HTE systems depend on experiment selection, recency, base learner choice, and incremental training.
- Without experiment memory, every project starts from zero.

Architecture impact:

- Add `experiment memory` before model selection.
- Search experiment memory before external search.
- Use it to decide whether to run a new test, pool prior tests, or start online exploration.

## Architecture Change 2: Separate Treatment Ontology From Creative Variants

Treatment must be a controlled business action, not an unbounded piece of copy.

Separate:

- Treatment family: offer, nudge, education, sales call, channel change, timing change, product experience.
- Treatment arm: concrete action selected by policy.
- Content variant: copy, image, script, or AI-generated phrasing inside an approved arm.

Why this matters:

- Multi-treatment HTE needs stable treatment IDs.
- AI can generate content variants faster than experiments can learn.
- Measurement breaks if every message is treated as a new unlogged intervention.

Architecture impact:

- Treatment library becomes mandatory before AI creative generation.
- AI output must attach to a treatment arm and content version.
- Causal readout happens at the treatment-arm level first, then content-version level when sample size supports it.

## Architecture Change 2A: Add Label And Vector Representation

Semantics need two forms.

Use labels for human-readable meaning, audit, governance, and token compression. Use vectors for retrieval, clustering, similarity, CATE/HTE features, and large-action OPE.

Why this matters:

- Labels keep strategy explainable.
- Vectors recover language variation across reviews, search terms, listings, and KOL content.
- Treatment embeddings reduce sparsity when AI generates many variants.
- Similarity is useful for retrieval and modeling, but it is not causal evidence.

Architecture impact:

- Add `52-label-vector-representation.md` after product semantics and before hypothesis mapping, OPE, and experiment memory.
- Every embedding used in strategy must map back to a label.
- Every reusable label should have examples, counter-examples, evidence grade, and review status.

## Architecture Change 2B: Add LLM Context Scoring

Raw language needs a scoring layer before it becomes strategy.

Use LLM context scoring for reviews, search terms, social comments, KOL comments, tickets, sales calls, survey answers, and forum posts.

It should produce:

- intent and no-intent labels
- reason labels
- barrier labels
- treatment-fit labels
- candidate causal-role hypotheses
- sample-level distributions with denominator, source mix, and sampling risk

Why this matters:

- The team often asks for "what percentage of this group cares about X" before any representative survey or platform planner exists.
- LLM scoring can make messy language comparable across sources and countries.
- Those percentages are useful for hypothesis ranking, but they are not country audience share or causal lift.

Architecture impact:

- Add `53-llm-context-segment-scoring.md` after label/vector representation and before audience sizing or HTE hypothesis mapping.
- Pass high-confidence reason and barrier labels into `51-causal-hte-hypothesis-map.md`.
- Pass only calibrated or explicitly provisional shares into `44-audience-taxonomy-and-sizing.md`.
- Require human review when a label affects budget, sensitive targeting, or a high-risk claim.
- Never use LLM-scored intent as persuadable share without experiment evidence.

## Architecture Change 2C: Add LLM Semantic Prior Hypotheses

The LLM can judge whether a treatment fits a given context before experiment data exists.

Use it when the input contains a person, segment, account, or buyer context and the question is:

- Would this treatment be relevant?
- Why might this ad be ignored?
- Is this likely a wrong framing?
- Should we suppress, reframe, or test?

Why this matters:

- Many marketing mistakes are semantic mismatches before they are statistical problems.
- Explicit dislikes, needs, recent searches, and product behavior can strongly suggest that a treatment angle is weak.
- The output can create better HTE hypotheses, reframes, and suppression tests.

Architecture impact:

- Add `54-llm-semantic-prior-hypothesis.md` before causal HTE hypothesis mapping.
- Add `55-llm-semantic-prior-rubric.md` for repeatable category scoring.
- Add `56-llm-semantic-prior-scenarios.md` for visible boundary cases.
- Add `57-semantic-prior-calibration.md` for human-label, experiment, and probability calibration.
- Record which fields drove the judgment and which fields were ignored or downweighted.
- Treat demographics as context, not mechanism.
- Use semantic priors to propose HTE dimensions and treatment reframes, not to claim CATE or ROI.
- Require measurement before scaling a suppression or targeting rule.

## Architecture Change 2D: Add Causal HTE Hypothesis Mapping

Mechanism comes before modeling.

Before CATE, HTE, uplift, or policy learning, produce a hypothesis map that connects:

- product feature
- buyer friction
- treatment
- baseline
- mechanism
- HTE dimension
- outcome
- evidence grade
- measurement route

Why this matters:

- Platform audiences and demographics are not causal mechanisms.
- Product-designed-for meaning can create HTE before a model sees data.
- A clean hypothesis map prevents teams from treating high intent as persuadability.

Architecture impact:

- Add `51-causal-hte-hypothesis-map.md` between product semantics, representation, LLM semantic priors, audience sizing, treatment library, and measurement router.
- Require every audience-treatment pair to name a baseline.
- Use models to test and refine the hypothesis map, not to invent it silently.

## Architecture Change 3: Use A Measurement Router

Do not default to one method.

Route by evidence situation:

- Clean randomization available: A/B or holdout.
- Many compatible past experiments: experiment pooling or representation learning.
- Market or store-level intervention: geo, store, or switchback test.
- Visible threshold: threshold design with manipulation checks.
- No randomization but panel data: difference-in-differences or interrupted time series with controls.
- New campaign, new market, or little data: randomized exploration or causal bandit.
- Only synthetic or qualitative signal: hypothesis only.

Why this matters:

- Athey/Keleher/Spiess show predictive targeting can be misleading; evidence design comes before targeting.
- Coupon and promotion studies show HTE can change the recommended target group.
- Budget-constrained bandit work shows offline HTE is weak in cold-start settings.

Architecture impact:

- Add `measurement router` between treatment library and model selection.
- Every recommendation must declare its evidence route.
- Outputs should say what cannot be claimed under the chosen route.

## Architecture Change 4: Add A Model Selection Gate

Model choice should follow the decision, not the other way around.

Use this gate:

- Binary treat/no-treat: uplift, causal forest, R-learner, X-learner, doubly robust learner.
- Multiple discrete treatments: multi-treatment uplift or treatment-specific CATE.
- Discount depth or incentive level: continuous treatment, dose-response, or constrained policy learning.
- Budget or sales capacity constraint: cost-sensitive ranking, knapsack, or constrained optimization.
- Cold-start with budget: budget-constrained causal bandit.
- Repeated journey decision: contextual bandit with holdout and guardrails.
- Executive-facing operating rule: interpretable policy tree or distilled rule.

Why this matters:

- HTE accuracy alone is not the business objective.
- The right model depends on whether the decision is selection, treatment choice, dose, budget pacing, sequence, or suppression.

Architecture impact:

- Add model selection as an explicit artifact.
- Require model choice to name decision type, treatment type, outcome delay, sample size, and constraint.

## Architecture Change 5: Move From Ranking To Constrained Allocation

Most sales decisions are constrained.

The policy should not only rank users. It should allocate actions under constraints:

- budget
- discount budget
- sales rep capacity
- channel frequency
- inventory
- margin floor
- claim eligibility
- privacy and consent
- fatigue limit
- fairness and sensitive-group guardrails

Why this matters:

- Sales teams cannot treat everyone with positive lift.
- A lower-lift customer can be better if the treatment is cheaper, faster, or safer.
- No-treatment is often the best allocation under cost or fatigue constraints.

Architecture impact:

- Add constraint solver after CATE or uplift estimation.
- Optimize expected net incremental value, not response probability.
- Output suppression rules, not only target lists.

## Architecture Change 5A: Evaluate Decisions, Not Only Estimates

Uplift quality should be judged by deployment decisions.

Add decision-focused evaluation for:

- Ranking quality.
- Budgeted policy value.
- Incremental profit or margin.
- Treatment and suppression distribution.
- Top-k targeting depth.
- Guardrail movement.
- Online validation against business-as-usual and no-treatment.

Why this matters:

- CATE error can improve while allocation worsens.
- Qini is useful but not enough for cost-aware deployment.
- pROCini and related ROC-style checks are useful when the goal is uplift ranking.
- End-to-end budget allocation can outperform two-stage estimate-then-optimize systems.

Architecture impact:

- Add a model-to-policy evaluation gate.
- Require the evaluation metric to match the deployment decision.
- Do not scale a model only because its CATE diagnostics look better.

## Architecture Change 6: Add Calibration, Group Bias, And Interpretability Audit

Do not turn individual CATE scores into segment narratives without audit.

Audit:

- CATE calibration.
- Group average treatment effect against experimental readout.
- Segment stability across time.
- Feature leakage.
- Treatment/control balance.
- Policy explanation.
- Harm and guardrail movement.

Why this matters:

- Recent HTE research shows group-level bias can appear when individual CATE predictions are aggregated into broader groups.
- Calibration work shows predicted treatment effects can diverge from direct randomized estimates.
- Interpretable personalized experimentation shows production systems need understandable policies, not only black-box scores.

Architecture impact:

- Add audit before segment naming and budget scaling.
- Use "candidate segment" until group-level evidence is checked.
- Prefer interpretable policy rules when operational trust matters.

## Architecture Change 7: Make AI A Supporting Layer, Not The Causal Authority

AI belongs across the system, but not as the truth source.

AI can support:

- experiment memory extraction
- treatment ontology cleanup
- call-note and review signal extraction
- content variant generation
- policy explanation
- drift and anomaly monitoring
- weak dependency diagnosis

AI cannot:

- replace holdouts
- create causal evidence from propensity
- bypass treatment logging
- generate unconstrained arms
- turn simulated consumers into validated customers

Architecture impact:

- AI role should be declared per layer.
- AI-generated outputs must be labeled as hypothesis, draft, explanation, or monitor.
- Scaling decisions require causal evidence and governance review.

## Architecture Change 8: Add Activation Adapters

The learned policy must be translated into real execution systems.

Add activation adapters for:

- Meta, Google, YouTube, TikTok, Amazon Ads, retail media, and local platforms.
- Ecommerce internal bidding, ranking, recommendation, coupon, and sponsored placement systems.
- Creator and KOL procurement.
- Sales rep routing and CRM workflows.

Why this matters:

- A causal segment may not be directly targetable in an ad platform.
- Platform proxies can change the population and weaken the causal conclusion.
- Creator/KOL execution adds fee, rights, organic reach uncertainty, paid amplification, and country-specific constraints.

Architecture impact:

- Every policy output needs an activation feasibility check.
- If product design carries the targeting logic, produce product-market semantics before audience sizing.
- The output must state the activation proxy and match quality.
- Medium or low match quality requires a fresh measurement plan.
- Creator/KOL recommendations require current country-level sourcing and pricing.
- Platform docs, available countries, targeting options, and creator marketplace access must be checked at execution time.

## Architecture Change 9: Add OPE, Surrogate, And Sequential Inference

AI and LLM treatments create too many actions for full online testing.

Add:

- Treatment embeddings for large action spaces.
- Logged propensities for OPE.
- Short-term and long-term outcome separation.
- Surrogate validation before using early metrics.
- Anytime-valid inference when teams need continuous monitoring.

Why this matters:

- Action-ID OPE collapses when every AI-generated message is a new action.
- Long-term revenue, retention, or margin may not be visible during a short experiment.
- "No peeking" is too blunt; valid sequential methods allow continuous monitoring.

Architecture impact:

- LLM-generated treatments need embeddings, versioning, and propensities.
- Treatment embeddings must retain label IDs and claim boundaries.
- OPE and surrogate estimates can screen policies, not replace online validation.
- Experiment plans should choose fixed-horizon or anytime-valid inference explicitly.

## Architecture Change 10: Add B2B Revenue Intervention Path

B2B sales needs a specialized path because the unit of action is often account, quote, rep, or buying committee.

Add B2B handling for:

- Causal lead scoring.
- Account-level and cluster experiments.
- Rep capacity allocation.
- Human-machine price guidance.
- AI sales coaching HTE.
- GenAI sales serving layer with human review.

Why this matters:

- Propensity lead scoring optimizes the wrong target when sales capacity is scarce.
- Account-level interference breaks user-level randomization.
- Pricing, coaching, and outreach are interventions, not predictions.

Architecture impact:

- Add B2B decision grammar and account-level experiment design.
- Optimize incremental revenue or profit per constrained sales resource.
- Log rep override, AI draft, human approval, and relationship guardrails.

## Optimized End-To-End Flow

For a product, country, and go-to-market question, use the product-to-market pipeline first. For a narrower policy or model question, use this generic flow:

1. Define the repeated decision and eligible population.
2. Build the treatment ontology and treatment library.
3. Build or reuse the label registry and vector representation.
4. Score text samples with LLM context scoring when language evidence is available.
5. Score treatment-context semantic fit with LLM semantic priors when a profile, segment, account, or buyer context is available.
6. Apply semantic-prior rubric and scenario boundaries; calibrate when probabilities, budget, suppression, or scale are involved.
7. Search experiment memory.
8. Choose the evidence route through the measurement router.
9. Create or verify the data contract.
10. Run baseline lift or pool suitable past experiments.
11. Select the model based on decision type and data condition.
12. Estimate lift, CATE, HTE, or policy value.
13. Evaluate ranking or policy value against the deployment decision.
14. Convert effect to expected net incremental value.
15. Solve allocation under business and governance constraints.
16. Map the policy through activation adapters.
17. Use OPE, surrogate value, or anytime-valid inference when the action space, time horizon, or monitoring process requires it.
18. Audit calibration, group bias, interpretability, and activation mismatch.
19. Shadow-test against business-as-usual and no-treatment.
20. Launch with holdout and exploration.
21. Monitor drift, fatigue, harm, margin, policy concentration, platform proxy quality, and long-term surrogate validity.
22. Store results back into experiment memory.

## New Required Artifacts

Add these artifacts to the module:

- Experiment memory schema.
- Measurement router.
- Model selection card.
- Label vector representation card.
- LLM context segment scoring card.
- LLM semantic prior hypothesis.
- LLM semantic prior rubric.
- LLM semantic prior scenarios.
- Semantic prior calibration card.
- Causal HTE hypothesis map.
- Constraint map.
- Calibration and group-bias audit.
- Policy shadow-test report.
- Platform audience activation map.
- Creator/KOL causal procurement brief.
- Decision-focused uplift evaluation card.
- OPE and surrogate validation card.
- Sequential monitoring plan.
- B2B revenue intervention brief.
- Product-to-market causal plan.

## Practical Rule

If the team lacks experiment memory, start there.

If the team lacks treatment ontology, start there.

If the team lacks holdout or credible counterfactual, start there.

If all three exist, then CATE, HTE, policy learning, and bandits become worth discussing.
