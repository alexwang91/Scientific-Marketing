---
name: sm-causal-personalization
description: "Design AI-assisted causal personalization for marketing: treatment libraries, uplift, CATE, HTE, persuadables, sure things, lost causes, sleeping dogs, next-best-treatment, contextual bandits, policy learning, holdouts, and incremental value."
---

# SM Causal Personalization

Use this module when personalization, targeting, offers, recommendation, lifecycle, CRM, or next-best-action needs a causal decision system.

Core idea: AI can propose, classify, generate, and allocate marketing treatments. Causal measurement decides whether those treatments create incremental value.

Do not use this module to make a high-propensity audience look scientific. Use it only when the business decision depends on incremental effect.

This is the primary module of the Scientific Marketing suite. Other modules are supporting context unless the user explicitly asks for them.

## Read References

Start with:

- `29-core-module-charter.md` for scope, build order, and hard dependencies.
- `30-causal-personalization.md` for the core frame.
- `36-execution-blueprint.md` for project phases and deliverables.
- `49-product-to-market-causal-pipeline.md` when the user provides a product, selling points, price, product description, target country, or go-to-market question.

Load execution references as needed:

- `31-uplift-segmentation.md` for persuadable segments.
- `32-next-best-treatment.md` for action design.
- `33-contextual-bandit.md` for adaptive allocation.
- `34-policy-learning.md` for decision policies.

Load AI, data, and evidence references as needed:

- `35-ai-role-in-causal-personalization.md` for what AI can and cannot do.
- `37-data-contract.md` for required logs, fields, and measurement hygiene.
- `38-reference-map.md` for stable papers, tools, and industrial anchors.
- `39-output-artifacts.md` for reusable brief, library, experiment, readout, and policy templates.
- `40-sales-causal-orchestration.md` for research-informed sales and marketing orchestration.
- `41-research-informed-architecture.md` for the system architecture implied by HTE, past-experiment learning, causal bandits, and sales constraints.
- `42-platform-audience-activation.md` for mapping causal segments into ad platform and ecommerce bidding controls.
- `43-creator-kol-causal-procurement.md` for country-level creator/KOL selection, pricing, effect forecast, ROI, and causal validation.
- `44-audience-taxonomy-and-sizing.md` for 20-dimensional audience definition, platform mapping, country sizing, and reach planning.
- `45-product-market-semantics.md` for product taxonomy, use-case semantics, ecommerce facets, and product-designed-for targeting.
- `46-decision-focused-uplift.md` for ranking, constrained allocation, pROCini/Qini evaluation, and experiment-pool CATE assets.
- `47-ope-surrogates-sequential-inference.md` for large action OPE, LLM treatment embeddings, long-term surrogate value, and anytime-valid monitoring.
- `48-b2b-sales-causal-system.md` for causal lead scoring, sales intervention, B2B pricing, account experiments, and human-machine routing.
- `49-product-to-market-causal-pipeline.md` for the full product-to-country activation workflow: product input, audience sizing, treatment design, platform/KOL activation, budget, ROI, and experiment memory.
- `50-tooling-and-data-connectors.md` for data sources, APIs, planners, creator databases, causal tooling, and which facts require live lookup.
- `51-causal-hte-hypothesis-map.md` for turning product semantics and selling points into causal mechanisms, HTE dimensions, audience-treatment pairs, and validation designs.
- `52-label-vector-representation.md` for deciding when to use human-readable labels, embeddings, or both for product semantics, HTE, treatment, OPE, KOL, and retrieval.
- `53-llm-context-segment-scoring.md` for LLM-based sample scoring of intent, no-intent, reasons, barriers, treatment fit, and sample-level percentages.
- `54-llm-semantic-prior-hypothesis.md` for scoring treatment-context semantic fit from a person, segment, or account context before forming HTE hypotheses.
- `55-llm-semantic-prior-rubric.md` for high, medium, low, unknown scoring rules for semantic fit, relevance, resistance, confidence, causal role, and action.
- `56-llm-semantic-prior-scenarios.md` for worked examples and boundary patterns.
- `57-semantic-prior-calibration.md` for human-label, experiment, holdout, and probability calibration of semantic priors.
- `58-maturity-gates.md` before recommending CATE, OPE, contextual bandit, policy learning, or automated allocation.
- `59-treatment-card-and-action-library.md` when ads, KOL content, retail media, retargeting, discount, or sales touches need to become measurable actions.
- `60-experiment-logging-contract.md` when a plan needs experiment logs, propensity logs, OPE, policy evaluation, or scaling gates.
- `61-platform-execution-playbooks.md` when budget is assigned to Google, Amazon Ads, TikTok, Meta, YouTube, retail media, KOL amplification, or retargeting.
- `62-contextual-message-and-competitive-frame.md` when a platform, vertical, audience, or selling point needs a content angle, message frame, claim boundary, proof packet, or competitor comparison decision.

## Guardrail

Do not optimize for predicted conversion when the business question is incremental effect. Keep holdouts.

Always include "no treatment" as an eligible option unless the action is legally or operationally mandatory.

Any AI-generated treatment must be tested as a treatment, not accepted as a truth claim.

## Output Interface

Return:

1. Decision point.
2. Treatment options.
3. Eligible population.
4. Outcome and guardrails.
5. Incrementality design.
6. Segment or policy recommendation.
7. Holdout and learning plan.
8. AI role and human review points.
9. Data contract gaps.
10. Activation path: platform audience, ecommerce bidder, creator/KOL, sales workflow, or no treatment.
11. Product-market semantic card when product design carries targeting logic.
12. Audience sizing method when country share or reachable size is requested.
13. Product-to-market causal plan when the user asks for a full country launch, activation, budget, KOL, or ROI recommendation.
14. LLM context scoring summary when text samples or intent/reason percentages are requested.
15. LLM semantic prior when the user asks whether a treatment fits a given profile, segment, account, or buyer context.
16. Semantic prior calibration status when probabilities, budget scaling, suppression scaling, or ROI claims depend on LLM priors.
17. Maturity gate when the recommendation depends on causal evidence, policy learning, OPE, or bandit logic.
18. Treatment card table when budget is allocated to concrete actions.
19. Logging contract gaps when future evaluation depends on exposure, propensity, cost, or outcome logs.
20. Platform execution playbook when budget rows need channel-specific operating guidance.
21. Contextual message matrix when a recommendation needs platform-specific, vertical-specific, or competitor-comparison wording.
22. Next artifact to produce.

Send final prose through `sm-output-taste`.
