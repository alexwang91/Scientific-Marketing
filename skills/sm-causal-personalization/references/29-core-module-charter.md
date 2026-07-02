# 29 Core Module Charter

## Core Position

Causal personalization is the core module of Scientific Marketing.

It connects marketing action, AI generation, experimental evidence, customer economics, and governance into one decision system.

For product-to-market work, the main flow is `49-product-to-market-causal-pipeline.md`.

The module is not about making personalization sound advanced. It is about deciding which customer should receive which treatment, which customer should receive no treatment, and what evidence justifies that decision.

## What This Module Owns

- Defining the repeated decision point.
- Defining treatment and no-treatment options.
- Building a controlled treatment library.
- Deciding what AI may generate, classify, rank, explain, or monitor.
- Scoring raw language into sample-level intent, reason, barrier, treatment-fit, and causal-role hypotheses.
- Scoring treatment-context semantic fit as an LLM prior before HTE hypothesis mapping.
- Calibrating semantic priors before probability language, budget scaling, or suppression scaling.
- Designing holdouts, experiments, or credible quasi-experiments.
- Estimating incremental effect, net lift, CATE, or HTE.
- Separating persuadables, sure things, lost causes, and sleeping dogs.
- Choosing next-best-treatment or no treatment.
- Turning learning into a policy.
- Mapping causal segments into platform, ecommerce, and creator activation controls.
- Monitoring drift, fatigue, harm, margin, and policy quality.

## What This Module Does Not Own

- General brand strategy, unless brand is part of treatment or guardrail.
- Full market/category diagnosis, unless it changes treatment design.
- Generic creative production, unless creative is a controlled treatment.
- Generic AI visibility, unless answer engines affect context or channel.
- Broad governance, unless it blocks or constrains personalized treatment.

When another module is needed, load only the specific reference that changes the causal personalization decision.

## Decision Grammar

Use this grammar when structuring work:

`For [eligible population], at [decision point], choose [treatment or no treatment], because expected incremental value is [positive/negative/unknown], measured against [baseline], with guardrails [list].`

If the sentence cannot be completed, the work is not ready for modeling.

## Build Order

1. Core thesis and language: make the module precise and non-sloppy.
2. Product-to-market pipeline: if the input is a product, target country, price, selling points, or launch question, use the full pipeline before narrow modeling.
3. Decision framing: identify one repeated marketing decision.
4. Treatment library: define no treatment, low-cost nudges, offers, content, channels, timing, sales actions, and product experiences.
5. LLM context scoring: score reviews, search terms, comments, tickets, transcripts, and survey text into auditable sample-level intent, reason, barrier, and treatment-fit statistics.
6. LLM semantic prior: score whether a treatment semantically fits a person, segment, account, or buyer context; use it for hypotheses, reframes, and suppression tests.
7. Semantic-prior rubric and calibration: apply category rules, scenario boundaries, human review, and calibration before numeric probabilities or scaled action.
8. Causal HTE hypothesis map: convert product semantics, selling points, scored language evidence, and semantic priors into mechanisms, HTE dimensions, audience-treatment pairs, and validation routes.
9. Experiment asset layer: inventory past experiments, controls, treatments, outcomes, covariates, and drift risk.
10. Data contract: log assignment, exposure, content version, policy version, holdout, cost, margin, and outcome.
11. Measurement router: choose holdout, A/B, geo, switchback, quasi-experiment, past-experiment pooling, or online exploration.
12. First lift read: average effect, segment lift, net value, guardrails, and sleeping-dog risk.
13. Model selection: choose simple uplift, CATE/HTE, multi-treatment learning, continuous treatment, policy learning, or bandit only after the decision is defined.
14. Decision-focused evaluation: check ranking quality, budgeted policy value, pROCini/Qini diagnostics, and online validation plan.
15. Policy pilot: simple rule before advanced modeling.
16. OPE and surrogate design: use treatment embeddings, logged propensities, surrogate validation, and anytime-valid monitoring when needed.
17. AI integration: use AI for sensing, generation, embeddings, explanation, monitoring, and review support.
18. Sales orchestration: combine CATE, cost, constraints, channel capacity, and treatment eligibility into an executable allocation.
19. B2B revenue path: when the unit is account, lead, rep, quote, or buying committee, use B2B-specific causal design.
20. Activation adapter: map the policy into ad platform controls, ecommerce bidding controls, creator/KOL procurement, sales workflow, or no-treatment suppression.
21. Adaptive learning: contextual bandit or policy learning only when data and guardrails are ready.
22. Calibration and audit: check CATE calibration, group bias, subgroup stability, policy explanation, and platform activation mismatch.
23. Governance: privacy, consent, bias, sensitive groups, claims, user fatigue, and rollback.

## Hard Dependencies

- Treatment inventory: the team must know what actions can actually be taken.
- Mechanism clarity: each HTE hypothesis must explain why treatment should change behavior versus baseline.
- Label registry: repeated mechanisms, HTE dimensions, treatments, and platform proxies need stable human-readable labels.
- Embedding versioning: any vector used for retrieval, OPE, or HTE features must record source text, model, version, and mapped label.
- Source audit: LLM-scored text needs source type, country, platform, time window, sampling method, denominator, language, dedup status, and known bias.
- Calibration path: sample-level percentages cannot become country share, persuadable share, lift, or ROI without platform, survey, first-party, or experiment calibration.
- Semantic prior boundary: LLM treatment-context fit cannot become CATE, ROI, or exclusion logic without measurement.
- Semantic prior rubric: high, medium, low, and unknown categories need explicit signal rules.
- Semantic prior calibration: probabilities, suppression scaling, and budget scaling need human-label or experiment calibration.
- No-treatment option: the system must be allowed to leave users alone.
- Comparable baseline: holdout or credible counterfactual.
- Clean logs: assignment, exposure, content, policy version, outcome, cost, and guardrails.
- Economic definition: revenue is not enough; cost, margin, and long-term harm matter.
- Enough traffic: small samples can support hypotheses, not stable policies.
- Execution authority: someone must be able to change targeting, offers, channels, or suppression rules.
- Governance authority: risky treatments must be stoppable before scale.
- Optimization boundary: the system must know whether it is optimizing audience selection, treatment choice, budget pacing, discount depth, sales rep capacity, timing, or cross-channel sequencing.
- Experiment memory: past experiments must be searchable by treatment, population, outcome, time, control, and quality.
- Calibration audit: personalized CATE scores must be checked before they are converted into segment claims or budget rules.
- Activation inventory: the team must know which platform controls, ecommerce bidding features, and creator procurement paths are available in each country.
- Price and rights data: creator/KOL recommendations need current fee, usage-rights, exclusivity, amplification, and production assumptions.
- Logged propensities: OPE requires knowing how historical actions were assigned.
- Treatment representation: LLM-generated or high-cardinality actions need metadata or embeddings.
- B2B unit discipline: account, lead, quote, rep, and buying committee decisions cannot be mixed without a measurement design.

## Default First Project

The best first project is narrow:

- One decision point.
- Two to five treatments, including no treatment.
- A short outcome window.
- Clear treatment cost.
- Enough traffic for a holdout.
- Low legal and brand risk.
- A team willing to suppress some users.

Avoid starting with a full customer brain, full journey orchestration, or unconstrained generative AI.

## Review Priorities

When reviewing this module sentence by sentence, check:

- Does the sentence distinguish prediction from causality?
- Does it preserve no treatment?
- Does it force a baseline or holdout?
- Does it include cost or margin when money is involved?
- Does it separate AI-generated hypothesis from validated effect?
- Does it avoid fake certainty?
- Does it produce an action the team can execute?

## Language Standard

Prefer:

- "incremental value"
- "treatment"
- "no treatment"
- "holdout"
- "expected net lift"
- "candidate hypothesis"
- "validated policy"
- "suppression rule"
- "guardrail"

Avoid:

- "AI knows the customer"
- "precision marketing" as a substitute for evidence
- "personalized experience" without saying what changed
- "high-value audience" when value is only predicted
- "closed loop" without naming the loop and owner
