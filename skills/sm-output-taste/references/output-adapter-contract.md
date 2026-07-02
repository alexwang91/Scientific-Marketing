# Output Adapter Contract

## Core Position

`sm-output-taste` is an adapter. It takes a domain draft and returns a final answer. It does not add strategy unless the draft has a gap that would make the answer unsafe, vague, or unusable.

## Interface

### Input

The adapter expects:

- `domain_draft`: the answer produced by a scientific marketing module.
- `evidence_notes`: claim labels such as `Evidence`, `Assumption`, `Hypothesis`, or `Needs test`.
- `audience`: who will read it, if known.
- `format_request`: the user's requested shape, such as brief, table, memo, checklist, deck outline, or review.
- `html_request`: whether the user wants a local HTML report, heatmap, dashboard, or source-checkable artifact.

### Output

Return the final answer only. Do not show the internal review, scoring, or pass list unless the user asks for it.

When HTML is requested, return:

- the local HTML file path
- a short summary of what the file contains
- verification status

The HTML file itself should contain the full report, evidence labels, assumptions, source links, and verification checklist.

## Pass Order

Run the passes in this order:

1. Evidence pass.
2. Professional language pass.
3. Huawei language pass.
4. Stop-slop pass.
5. Completeness pass.
6. HTML report pass when requested.

The order matters. Do not make prose cleaner before checking whether a claim needs a label or a test.

## Evidence Pass

Check every important claim:

- Keep `Evidence` when the draft names a source, observed data, experiment, or stable method.
- Use `Assumption` when the answer relies on a stated business condition.
- Use `Hypothesis` when the answer comes from reasoning, AI simulation, or unvalidated pattern recognition.
- Use `Needs test` when the claim would change budget, audience, offer, channel, message, or product priority.

Rewrite any causal claim unless it has a control group, holdout, randomized test, credible quasi-experiment, or validated model.

## Professional Language Pass

Keep professional terms when they carry method:

- Frameworks: STP, 4P, 5C, AARRR, JTBD, GTM, CRM, RFM.
- Metrics: CAC/LTV, margin, retention, uplift, incremental profit, guardrail metric.
- Measurement: holdout, geo test, MMM, DAG, CATE, HTE, response curve, adstock, saturation.
- Behavior: choice architecture, loss aversion, default effect, social proof.
- AI decisioning: contextual bandit, next-best-treatment, policy learning.

Translate terms that perform sophistication:

- "Empower" becomes what a person can now do.
- "Closed loop" becomes who records what and who changes what.
- "Precision reach" becomes segment, treatment, channel, and timing.
- "Data-driven" becomes which data prevents which wrong decision.
- "AI-native" becomes the step AI performs.

## Huawei Language Pass

Keep Huawei-style operating language when it names how the work runs:

- End-to-end: user steps, owners, metrics, and data sources.
- Campaign or battle: phases, goal, owner, decision cadence.
- Frontline insight: raw language from sales, service, retail, partners, and social.
- Metric-driven: metric and decision trigger.
- Scenario-led: situation, user task, and product behavior.
- Experience loop: touchpoint, feedback source, owner, and fix cadence.

Rewrite decorative seriousness:

- "Strengthen frontline insight" becomes the weekly source mix, quote count, tags, owner, and review cadence.
- "Build an end-to-end loop" becomes the steps, owners, metrics, and data sources.
- "Customer-centric" becomes the customer evidence used and the decision it changes.

## Stop-Slop Pass

Remove:

- Throat-clearing: "Here is the thing", "It is worth noting", "At its core".
- Fake contrast: "not just X, but Y", "X is not the problem, Y is".
- Vague business language: "landscape", "deep dive", "game changer", "moving forward".
- Pull-quote endings.
- Passive voice that hides the actor.
- Abstract nouns acting like people.

Prefer:

- A human or team as the subject.
- A concrete verb.
- A metric or decision when a recommendation changes work.
- Short paragraphs with varied sentence length.

## Completeness Pass

Check the user's request against the answer:

- Every requested file, module, section, or option is present.
- No "and so on", "etc.", "similar for the rest", or "if you want I can continue" replaces actual content.
- Long answers stop only at a clean breakpoint and state what remains.

## HTML Report Pass

Use `html-report-output.md`.

Check:

- The report is a complete single-file HTML artifact.
- Dense tables are scannable and horizontally scrollable.
- Heatmap colors have labels.
- Every estimate is labeled as evidence, assumption, hypothesis, or needs test.
- The source registry links to the sources used.
- The assumption registry lists margin, budget, CAC, conversion, KOL fee, and ROI assumptions.
- The verification block states what remains unverified.

## Rewrite Rules

Rewrite any sentence that could fit any brand.

Rewrite any recommendation that lacks an actor, action, metric, or next step when those details are knowable.

Rewrite any claim that sounds precise but has no basis.

Rewrite any paragraph that is polished but does not help the reader decide, test, fund, cut, or change something.

## Before And After

Bad:

`AI empowers full-funnel precision marketing and builds a closed growth loop.`

Good:

`Use first-party behavior data to decide who receives the offer, who stays in holdout, and who gets suppressed. Report incremental orders and margin, not platform ROAS.`

Bad:

`Strengthen frontline insight to support customer-centric campaign iteration.`

Good:

`Each week, collect 20 raw quotes from sales, support, retail, and social. Tag each quote as trigger, barrier, competitor substitute, price objection, or proof need. The campaign owner reviews the tags every Friday and changes one message at a time.`
