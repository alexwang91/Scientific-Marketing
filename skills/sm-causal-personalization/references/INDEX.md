# Reference Index

Task-oriented navigation for this module's 34 references. Numbers are stable IDs, not a reading order; the sequence starts at 29 for historical reasons — no files 01-28 exist in this module.

`49-product-to-market-causal-pipeline.md` is the main execution entry point: use it whenever the user provides a product, selling points, price, and target country and asks who to sell to, where, with what message and budget.

## By Task

| The user asks for | Read first | Then as needed |
|---|---|---|
| Full product-to-country launch plan, budget, KOL, ROI | `49` | `44`, `42`, `43`, `61`, `62`, `59` |
| Scope, build order, phases | `29`, `36` | `30` |
| Who is persuadable, uplift segments | `31` | `46`, `51` |
| Which action/offer next per user | `32` | `33`, `34` |
| Audience definition and country sizing | `44` | `45`, `42` |
| Product semantics before targeting | `45` | `52` |
| Turning selling points into testable HTE hypotheses | `51` | `54`, `55`, `56`, `57` |
| Scoring raw text (reviews, comments, tickets) into percentages | `53` | `52`, `57` |
| Does treatment X fit context Y (semantic prior) | `54` | `55`, `56`, `57` |
| Mapping segments into ad-platform controls | `42` | `61`, `50` |
| Creator/KOL selection, pricing, validation | `43` | `61`, `62` |
| Platform-specific execution once budget is set | `61` | `59`, `60` |
| Message frames, claim boundaries, competitor comparison | `62` | `43` |
| Treatment cards for every budgeted action | `59` | `60` |
| Logs needed for OPE, holdouts, policy learning | `60` | `37` |
| Before recommending CATE/OPE/bandits/automation | `58` | `47` |
| Ranking/allocation evaluation (Qini, policy value) | `46` | `47` |
| Large action spaces, surrogates, sequential monitoring | `47` | `38` |
| B2B accounts, leads, quotes, sales reps | `48` | `40` |
| System architecture for experiment reuse | `41` | `36`, `38` |
| What AI can and cannot do here | `35` | `30` |
| Output templates (briefs, readouts, HTML report) | `39` | `sm-output-taste` references |
| Papers, tools, citation anchors | `38` | — |
| Data fields and measurement hygiene | `37` | `60` |
| Tools, APIs, planners, live-lookup rules | `50` | `38` |

## File List

- `29-core-module-charter.md` — scope, build order, hard dependencies
- `30-causal-personalization.md` — core causal frame
- `31-uplift-segmentation.md` — persuadables, sure things, lost causes, sleeping dogs
- `32-next-best-treatment.md` — action design per user/context
- `33-contextual-bandit.md` — adaptive allocation
- `34-policy-learning.md` — decision policies
- `35-ai-role-in-causal-personalization.md` — AI capabilities and limits
- `36-execution-blueprint.md` — project phases and deliverables
- `37-data-contract.md` — required logs and fields
- `38-reference-map.md` — theory, industrial, and activation citation anchors
- `39-output-artifacts.md` — reusable output templates
- `40-sales-causal-orchestration.md` — sales/marketing orchestration
- `41-research-informed-architecture.md` — system architecture
- `42-platform-audience-activation.md` — causal segments to platform controls
- `43-creator-kol-causal-procurement.md` — creator/KOL procurement
- `44-audience-taxonomy-and-sizing.md` — audience dimensions and sizing
- `45-product-market-semantics.md` — product taxonomy and use-case semantics
- `46-decision-focused-uplift.md` — decision-matched evaluation
- `47-ope-surrogates-sequential-inference.md` — OPE, surrogates, anytime-valid inference
- `48-b2b-sales-causal-system.md` — B2B causal revenue system
- `49-product-to-market-causal-pipeline.md` — main product-to-market pipeline
- `50-tooling-and-data-connectors.md` — tools and data connectors
- `51-causal-hte-hypothesis-map.md` — mechanisms to HTE hypotheses
- `52-label-vector-representation.md` — labels vs embeddings
- `53-llm-context-segment-scoring.md` — LLM text-sample scoring
- `54-llm-semantic-prior-hypothesis.md` — LLM treatment-context fit priors
- `55-llm-semantic-prior-rubric.md` — semantic prior scoring rubric
- `56-llm-semantic-prior-scenarios.md` — worked examples and boundaries
- `57-semantic-prior-calibration.md` — calibrating semantic priors
- `58-maturity-gates.md` — gates before advanced methods
- `59-treatment-card-and-action-library.md` — treatment cards
- `60-experiment-logging-contract.md` — experiment logging contract
- `61-platform-execution-playbooks.md` — per-platform execution
- `62-contextual-message-and-competitive-frame.md` — message frames and comparison scale
