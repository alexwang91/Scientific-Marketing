# 39 Output Artifacts

## Core Position

This module should produce decision artifacts, not just advice.

Every output should help the team decide, test, suppress, scale, or stop a treatment.

## Artifact 1: Causal Personalization Brief

Use when starting a project.

Required sections:

- Decision point.
- Eligible population.
- Available treatments, including no treatment.
- Outcome and outcome window.
- Treatment cost and economic value.
- Guardrails.
- Baseline or holdout design.
- AI role.
- Data gaps.
- Decision owner.

Good brief sentence:

`For renewal-risk users in week 3 before expiry, choose no treatment, education message, service call, or retention offer based on expected net incremental renewal margin, measured against a holdout, with unsubscribe, complaint, and margin guardrails.`

## Artifact 2: Treatment Library

Use before experiments, uplift modeling, bandits, or policy learning.

Required columns:

- `treatment_id`
- `treatment_name`
- `treatment_type`
- `description`
- `no_treatment`
- `eligibility_rule`
- `cost`
- `claim_boundary`
- `content_version_id`
- `channel`
- `human_review_required`
- `guardrail_risk`

Treatment types:

- No treatment.
- Nudge.
- Education.
- Reassurance.
- Offer.
- Discount.
- Sales action.
- Service action.
- Channel change.
- Timing change.
- Product experience.

## Artifact 3: Measurement Plan

Use before launch.

Required sections:

- Hypothesis.
- Assignment unit.
- Randomization or comparison method.
- Treatment and control definitions.
- Primary outcome.
- Guardrail metrics.
- Outcome window.
- Minimum sample or runtime.
- Exclusion rules.
- Readout date.
- Stop rule.

Never accept a plan that measures only openers, clickers, redeemers, or exposed users after the fact.

## Artifact 4: Lift Readout

Use after an experiment or credible quasi-experiment.

Required sections:

- Treated outcome.
- Control outcome.
- Average treatment effect.
- Segment or context lift.
- Incremental revenue.
- Incremental cost.
- Net incremental value.
- Guardrail movement.
- Confidence or uncertainty.
- Decision: scale, retest, suppress, redesign, or stop.

Do not call a segment validated if the evidence is directional only.

## Artifact 5: Policy Spec

Use when moving from campaign learning to repeatable decisioning.

Required sections:

- Policy objective.
- Eligible population.
- Inputs.
- Treatment set.
- No-treatment rule.
- Decision rule.
- Exploration rule.
- Fallback behavior.
- Human review boundary.
- Monitoring dashboard.
- Rollback trigger.
- Owner.

Good policy sentence:

`If predicted net lift is positive and margin guardrail is satisfied, choose the lowest-cost treatment that meets the objective; otherwise choose no treatment and keep the user in monitoring.`

## Artifact 6: AI Role Map

Use whenever AI is part of the system.

Required columns:

- `ai_task`
- `input_data`
- `output`
- `allowed_decision_scope`
- `human_review`
- `causal_evidence_required`
- `blocked_if`

Common AI tasks:

- Signal extraction.
- Treatment ideation.
- Copy generation.
- Segment explanation.
- Policy explanation.
- Drift monitoring.
- Harm detection.

## Artifact 7: Data Gap Register

Use when implementation is blocked or evidence is weak.

Required columns:

- `missing_field`
- `why_it_matters`
- `decision_weakened`
- `workaround`
- `owner`
- `deadline`

Decision weakened should name one of:

- Lift estimation.
- Segment interpretation.
- Treatment selection.
- Bandit learning.
- Policy audit.
- Governance review.

## Artifact 8: Experiment Memory Entry

Use when past experiments should become reusable assets.

Required columns:

- `experiment_id`
- `population`
- `treatment_ids`
- `control_definition`
- `assignment_unit`
- `outcome_window`
- `outcome_metrics`
- `covariates_at_assignment`
- `sample_size`
- `control_size`
- `effect_readout`
- `segment_or_cate_readout`
- `time_period`
- `channel`
- `drift_risk`
- `quality_score`

Use this before pooling past experiments or claiming historical learning.

## Artifact 9: Measurement Router

Use when deciding how evidence should be produced.

Required sections:

- Available randomization.
- Existing experiment memory.
- Unit of intervention.
- Outcome delay.
- Threshold or manipulation risk.
- Feasible comparison method.
- What can be claimed.
- What cannot be claimed.

Recommended route order:

1. Randomized holdout or A/B.
2. Past-experiment pooling.
3. Geo, store, market, or switchback.
4. Difference-in-differences or interrupted time series.
5. Regression discontinuity with manipulation checks.
6. Observational causal ML with explicit assumptions.
7. AI or synthetic simulation for hypothesis only.

## Artifact 10: Model Selection Card

Use before choosing algorithms.

Required sections:

- Decision type.
- Treatment type.
- Outcome delay.
- Sample size.
- Number of treatments.
- Constraint type.
- Recommended model family.
- Why simpler methods are insufficient.
- Validation method.
- Failure mode to watch.

Model family options:

- Uplift model.
- Causal forest.
- R-learner, X-learner, T-learner, or doubly robust learner.
- Multi-treatment CATE.
- Continuous-treatment or dose-response model.
- Policy learning.
- Contextual bandit.
- Budget-constrained causal bandit.
- Interpretable policy tree.

## Artifact 11: Constraint Map

Use before ranking or allocation.

Required columns:

- `constraint`
- `owner`
- `limit`
- `metric`
- `hard_or_soft`
- `blocked_action`
- `tradeoff`
- `monitoring_rule`

Common constraints:

- Budget.
- Discount budget.
- Margin floor.
- Sales capacity.
- Channel frequency.
- Inventory.
- Claim eligibility.
- Privacy and consent.
- User fatigue.
- Sensitive-group guardrail.

## Artifact 12: Calibration And Group Bias Audit

Use before segment claims, policy scaling, or executive readout.

Required sections:

- CATE calibration check.
- Group average treatment effect check.
- Segment stability.
- Treatment/control balance.
- Feature leakage check.
- Policy explanation.
- Guardrail movement.
- Decision: scale, retest, shrink, simplify, or stop.

Use "candidate segment" until this audit passes.

## Artifact 13: Policy Shadow-Test Report

Use before launching a learned policy.

Required sections:

- Candidate policy.
- Baseline policy.
- No-treatment comparison.
- Expected net incremental value.
- Budget impact.
- Treatment distribution.
- Suppression distribution.
- Guardrail risk.
- Exploration and holdout design.
- Rollback rule.

Shadow testing does not prove causality. It catches bad allocation, bad constraints, missing logs, and operational surprises before launch.

## Artifact 14: Platform Audience Activation Map

Use when a causal segment must be executed in an ad platform, ecommerce platform, retail media network, or internal bidder.

Required sections:

- Causal segment.
- Evidence level.
- Platform or system.
- Available audience controls.
- Activation proxy.
- Match quality.
- Country availability.
- Required first-party audience asset.
- Exclusions and suppression.
- No-treatment design.
- Measurement plan.
- Risk of false learning.
- Weakest assumption.

Use match quality:

- High: direct first-party or internal expression.
- Medium: close platform proxy.
- Low: loose proxy.
- Unavailable: cannot activate credibly.

## Artifact 15: Creator/KOL Causal Procurement Brief

Use when a causal segment may need creator, KOL, media, or community influence.

Required sections:

- Causal segment.
- Treatment job.
- Target country.
- Platform availability.
- Recommended creator type.
- Shortlist criteria.
- Candidate sources.
- Price range and source.
- Usage rights and amplification rights.
- Expected reach and effect model.
- Incrementality discount.
- Expected ROI range.
- Measurement design.
- Self-refutation.
- Decision: reject, shortlist, test, negotiate, scale.

Do not state a creator ROI without fee, rights, paid amplification, margin, and incrementality assumptions.

## Artifact 16: Audience Taxonomy And Sizing Card

Use when the team asks "how many people are in this audience in this country and how do we target them."

Required sections:

- Audience name.
- 20-dimensional definition.
- Country.
- Country universe source.
- Platform estimated audience sizes.
- Category or intent share.
- Activation match rate.
- Eligibility and suppression.
- Estimated reachable size.
- Estimated persuadable size.
- Confidence grade.
- Recommended targeting path.
- Measurement plan.
- Weakest assumption.

Rules:

- Report platform estimates as reachable accounts or reachable users, not population truth.
- Do not estimate persuadable share without experiment, uplift, or credible prior evidence.
- Use ranges when inputs are uncertain.

## Artifact 17: Product-Market Semantic Card

Use when the product itself is designed around a use case, feature, form factor, body context, environment, or occasion.

Required sections:

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

Rule:

- Produce this card before the audience sizing card when product design carries the targeting logic.

## Artifact 18: Decision-Focused Uplift Evaluation Card

Use when an uplift, CATE, HTE, or policy model will drive ranking, targeting, budget allocation, or suppression.

Required sections:

- Deployment decision.
- Ranking target.
- Budget or capacity constraint.
- Treatment cost.
- Evaluation metric.
- Qini or pROCini diagnostic if available.
- Policy value estimate.
- Incremental profit or margin.
- Guardrail movement.
- Online validation plan.
- Failure mode if ranking quality is wrong.

Rule:

- Do not choose the model with better CATE diagnostics if it produces worse constrained policy value.

## Artifact 19: OPE And Surrogate Validation Card

Use when evaluating a new policy offline, handling many treatments, or estimating long-term value from short-term logs.

Required sections:

- Action space size.
- Treatment metadata or embedding.
- Label and embedding version.
- Logged propensity availability.
- OPE method.
- Short-term outcome.
- Long-term outcome.
- Surrogate validation status.
- Bias and variance risk.
- Online validation plan.
- Weakest assumption.

Rule:

- OPE and surrogate estimates can screen policies. They do not approve high-stakes rollout without online validation.

## Artifact 20: Sequential Monitoring Plan

Use when the team wants to monitor an experiment continuously or stop early.

Required sections:

- Fixed-horizon or anytime-valid method.
- Confidence sequence or sequential test.
- Minimum runtime or exposure floor.
- Guardrail threshold.
- Stop-for-harm rule.
- Stop-for-success rule.
- Maximum runtime.
- Decision owner.

Rule:

- If the team will peek, use anytime-valid inference. Otherwise commit to fixed-horizon analysis.

## Artifact 21: B2B Revenue Intervention Brief

Use for causal lead scoring, account prioritization, sales outreach, pricing guidance, AI coaching, or ABM.

Required sections:

- Account, lead, quote, rep, or buying committee unit.
- Sales decision point.
- Treatment options, including no action.
- Outcome: incremental revenue, profit, pipeline, renewal, or expansion.
- Sales capacity or margin constraint.
- Baseline or holdout design.
- Account or cluster randomization plan.
- Human-machine routing rule.
- Rep override logging.
- Guardrails.
- Online validation plan.

## Artifact 22: Product-To-Market Causal Plan

Use when the user provides a product, selling points, price, product description, and target country, then asks who to target, how to target, what content or KOL to use, how much to spend, and what ROI to expect.

Required sections:

- Product-market diagnosis.
- Target country opportunity and constraints.
- Product-Market Semantic Card.
- LLM Context Segment Scoring Card when text samples are used.
- LLM Semantic Prior Hypothesis when a profile, segment, account, or context is scored against a treatment.
- Audience Taxonomy And Sizing Cards.
- Treatment Library.
- Causal HTE Hypothesis Map.
- Platform Audience Activation Map.
- Contextual Message Matrix and Competitive Comparison Scale.
- Creator/KOL Causal Procurement Brief when relevant.
- Budget and ROI scenarios.
- Suppression or no-treatment recommendations.
- Measurement Router.
- Decision-Focused Uplift Evaluation Card when model or ranking is used.
- Semantic Prior Calibration Card when LLM semantic priors drive probability language, suppression, budget, or scale.
- HTML Causal Marketing Report when the user asks for source-checkable heatmaps, budget matrices, KOL tables, or shareable output.
- OPE, surrogate, or sequential monitoring plan when relevant.
- Weakest assumptions.
- Next artifact or experiment.

Rules:

- Do not claim exact audience share, creator price, or ROI without current source or clear assumptions.
- Use ranges and confidence grades when data is incomplete.
- Separate platform reported performance from causal incrementality.
- End with the experiment or data pull that would most reduce uncertainty.

## Artifact 23: Causal HTE Hypothesis Map

Use when moving from product semantics and audience sizing into treatment decisions.

Required sections:

- Product mechanism list.
- HTE dimension map.
- Label registry subset.
- Embedding needs.
- LLM semantic prior summary when used.
- Audience-treatment pair table.
- Causal role hypotheses: persuadable, sure thing, lost cause, sleeping dog, unknown.
- Evidence grade.
- Measurement route.
- Activation implication.
- Suppression candidates.
- Weakest assumption.
- Next test.

Required columns for the pair table:

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

Rules:

- Do not treat a demographic, platform interest, or high-intent signal as a causal mechanism.
- Do not label a group validated without comparable treatment/control evidence.
- Each hypothesis must name a baseline.

## Artifact 24: Label Vector Representation Card

Use when concepts repeat across product semantics, HTE hypotheses, treatment variants, search queries, reviews, KOL content, OPE, or model features.

Required sections:

- Label registry subset.
- Concepts that need embeddings.
- Why embeddings are useful.
- Where labels are enough.
- Retrieval, clustering, OPE, or model use.
- Token-saving use.
- Drift and audit rule.
- Next data artifact.

Required fields:

- `label_id`
- `label_name`
- `label_type`
- `definition`
- `examples`
- `counter_examples`
- `evidence_grade`
- `embedding_id`
- `embedding_model`
- `embedding_version`
- `review_status`

Rules:

- Do not use embedding-only concepts in final strategy.
- Do not claim token savings unless a reused label registry exists.
- Do not treat semantic similarity as causal evidence.

## Artifact 25: LLM Context Segment Scoring Card

Use when scoring text samples for intent, no-intent, reasons, barriers, treatment fit, or causal-role hypotheses.

Required sections:

- Source audit.
- Scoring schema.
- Sample-level intent distribution.
- Reason distribution.
- Barrier distribution.
- Treatment-fit distribution.
- Causal-role-hypothesis distribution.
- High-confidence-only distribution.
- Label registry updates.
- Representativeness risk.
- Calibration needed for country sizing.
- HTE hypotheses to pass into `51-causal-hte-hypothesis-map.md`.

Rules:

- Sample percentages are not market percentages.
- Intent share is not persuadable share.
- Reason distribution is not causal root cause.
- Every distribution needs denominator and source mix.

## Artifact 26: LLM Semantic Prior Hypothesis

Use when a profile, segment, account, or buyer context is scored against a treatment candidate.

Required sections:

- Context summary.
- Treatment candidate and baseline.
- Signal audit.
- Semantic fit.
- Predicted relevance.
- Predicted resistance.
- Likely reason for fit.
- Likely reason for nonfit.
- Mismatch type.
- Reframe option.
- Barrier labels.
- Mechanism labels.
- HTE dimension labels.
- Causal-role hypothesis.
- Recommended action.
- Measurement route.
- Confidence and evidence strength.
- Human review flag.
- Calibration status.
- Boundary note.

Rules:

- This artifact is a semantic prior, not CATE.
- Demographics can describe context but should not be the causal mechanism.
- Explicit stated preference, dislike, search, and behavior carry more weight than stereotype-like inference.
- A low fit result should consider treatment reframe before audience rejection.
- Use `55-llm-semantic-prior-rubric.md` for category definitions.
- Use `57-semantic-prior-calibration.md` before numeric probabilities, budget scaling, suppression scaling, or ROI claims.

## Artifact 27: Semantic Prior Calibration Card

Use when 54 output needs calibration before probability language, budget moves, suppression, sales routing, KOL procurement, or scale.

Required sections:

- Calibration target.
- Calibration status: uncalibrated, human_label_calibrated, experiment_calibrated, outcome_correlated, or drift_risk.
- Data source.
- Label definitions.
- Calibration sample size.
- Country, language, platform, and product scope.
- Human agreement rate when available.
- High-confidence error rate when available.
- Bucket-level outcome or lift when available.
- Resistance guardrail readout when available.
- Probability calibration metric when numeric probabilities are used.
- Drift risk.
- Allowed use.
- Blocked use.
- Next calibration step.

Rules:

- Human agreement supports label quality. It does not prove incrementality.
- Historical outcome correlation is weaker than randomized or credible causal evidence.
- Numeric probabilities need stated calibration data.
- A suppression rule needs harm evidence, negative net value evidence, or a small holdout before scale.

## Artifact 28: HTML Causal Marketing Report

Use when the user asks for HTML, a heatmap, a verifiable report, or a shareable country/channel plan.

Required sections:

- Report metadata.
- Executive decision.
- Evidence status legend.
- Product facts.
- Assumption registry.
- Audience taxonomy matrix.
- Dimension generation method and provenance table when the heatmap uses coded dimensions.
- Channel heatmap.
- Main heatmap cell explanation table when the heatmap uses main allocation marks.
- Reviewer challenge table for dimensions and main heatmap decisions.
- Strategy synthesis after heatmap explanation and reviewer challenge: full-matrix saturation, channel-specific anchors, or narrow learning tests.
- Maturity gate and execution-data gaps.
- Treatment card table for concrete paid actions.
- Budget allocation with short execution advice for each module.
- Platform execution playbook when named platforms or retail media receive budget.
- Contextual message matrix when content, KOL, review, search, ecommerce, retail media, sales, or retargeting actions are recommended.
- Priority plays with CAC, sales, margin, and ROI assumptions.
- KOL or creator table when relevant.
- Measurement plan.
- Suppression and risk rules.
- Source registry.
- Verification checklist.

Rules:

- Generate a single `.html` file.
- Use source links for all current facts.
- Mark each budget and ROI as assumption, hypothesis, evidence, or needs test.
- Do not present KOL prices as sourced unless a current quote or rate card is available.
- Keep the visual style operational and dense.
- Use `sm-output-taste/references/html-report-output.md` for output rules.
- Match the user's language for headings, notes, table headers, and recommendations, while keeping useful technical terms.
- If the report uses a heatmap, explain every main allocation cell and then state the recommended attack pattern in simple language.
- If heatmap columns use coded dimensions such as `D1`, explain how those dimensions were generated: product mechanism, country/channel context, platform proxy, measurement route, and risk filter.
- Add a named reviewer, usually `Causal Activation Reviewer`, to challenge the coded dimensions and main heatmap decisions.
- Reviewer challenges must be allowed to downgrade a dimension to test, small test, suppress only, needs data, or delete.
- Do not let a demographic or interest tag enter main budget only because it sounds relevant. It needs an activation proxy and measurement route.
- State the current maturity level using `58-maturity-gates.md`: L0 hypothesis, L1 experiment foundation, L2 offline policy learning, or L3 online learning.
- If budget is assigned to a concrete action, include treatment cards using `59-treatment-card-and-action-library.md`.
- If future OPE, policy learning, or scaling is implied, list missing logging fields from `60-experiment-logging-contract.md`.
- If a named platform receives budget, include platform execution guidance using `61-platform-execution-playbooks.md`.
- Link platform execution to treatment IDs, D dimensions, platform proxies, consumer language, and measurement routes.
- If content, creator, review, ecommerce, search, retail media, sales, or retargeting actions are recommended, include contextual message guidance using `62-contextual-message-and-competitive-frame.md`.
- Link contextual message rows to platform or vertical, audience label, selling point, buyer question, comparison level, proof packet, claim boundary, treatment ID, and measurement route.
- Show linked treatment IDs and D dimensions with readable names. Do not show naked strings such as `T01/T02; D7/D8` in user-facing tables.

## Artifact 29: Contextual Message Matrix

Use when the plan needs to decide what to say in each platform, vertical, content format, sales situation, or KOL brief.

Required columns:

- `message_context_id`
- `platform_or_vertical`
- `audience_or_D_dimension`
- `selling_point`
- `buyer_question`
- `conversation_mode`
- `competitive_comparison_level`
- `what_to_say`
- `what_to_avoid`
- `proof_packet`
- `content_format`
- `CTA`
- `claim_boundary`
- `treatment_id`
- `measurement_route`
- `human_review_required`

Rules:

- Use `62-contextual-message-and-competitive-frame.md`.
- Default to the lowest competitor comparison level that answers the buyer question.
- Named competitor comparison needs intent, proof, review, and a measurable treatment.
- Sensitive and regulated categories need lower default levels and domain or legal review for accuracy, efficacy, safety, risk, or superiority claims.
- Technical specs may support proof, but ads and creator content should use buyer language.
- Every row must say what to say and what to avoid.

## Final Output Rule

End each serious project answer with the next artifact to produce.

Example:

`Next artifact: treatment library, because modeling is premature until treatment IDs, costs, eligibility, and content versions are stable.`
