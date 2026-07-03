# HTML Report Output

## Core Position

Use HTML when the answer contains dense tables, heatmaps, budget scenarios, channel plans, source lists, or assumptions that the user needs to inspect.

The HTML report is an audit artifact. It should be readable, printable, source-linked, and clear about what is evidence, assumption, hypothesis, and needs test.

For clickable dashboards, use `interactive-dashboard-output.md` and `../assets/interactive-dashboard-template.html`.

This pattern borrows from taste-skill only where it helps the report: clear hierarchy, disciplined spacing, restrained color, complete sections, and no placeholder output.

## When To Use

Use HTML when the user asks for:

- HTML output
- dashboard-style report
- heatmap
- source-checkable plan
- verifiable plan
- local file
- shareable report
- dense country/channel/persona matrix
- KOL or budget table

Use Markdown when the answer is short, exploratory, or mostly conversational.

## Required Report Sections

Every scientific marketing HTML report should include:

1. Report metadata.
2. Executive decision.
3. Evidence status legend.
4. Product and market facts.
5. Assumption registry.
6. Audience or segment matrix.
7. Dimension generation method when heatmap columns use coded dimensions such as `D1`, `D2`, or semantic tags.
8. Channel heatmap.
9. Heatmap main-cell explanation when a heatmap uses main allocation marks.
10. Reviewer challenge table for dimensions and main heatmap decisions.
11. Strategy synthesis after main-cell explanation and reviewer challenge.
12. Execution gate: maturity level, defensible claim, missing data, and next experiment.
13. Treatment card table when concrete actions receive budget.
14. Budget allocation with a short execution advice column before status.
15. Platform execution playbook when the budget uses named platforms or retail media.
16. Contextual message matrix when content, KOL, review, search, ecommerce, retail media, sales, or retargeting actions are recommended.
17. Priority plays.
18. KOL, creator, media, or partner table when relevant.
19. Measurement plan.
20. Risk and suppression rules.
21. Source registry.
22. Verification checklist.

## Language Rule

Match the user's working language across headings, explanations, table headers, recommendations, and verification notes.

Keep technical proper nouns when they are useful:

- platform names: Google Search, TikTok, Meta, YouTube, Alza, eMAG, MediaMarkt
- metrics and methods: CAC, ROI, HTE, CATE, holdout, lift test, retargeting
- product and brand names
- local query terms

Do not leave ordinary report prose in English when the user asked in Chinese.

## Evidence Labels

Use these labels visibly in the report:

- `Evidence`: sourced fact, observed data, platform doc, official product page, known method, or experiment.
- `Assumption`: business input, scenario estimate, benchmark, or stated margin.
- `Hypothesis`: semantic prior, HTE hypothesis, channel fit, creative fit, or unvalidated audience logic.
- `Needs test`: claim that would change budget, channel, KOL selection, suppression, offer, or scaling.

Every budget, ROI, channel priority, and KOL recommendation needs one of these labels.

## Visual System

Use a restrained operating-dashboard style:

- background: near-white
- text: dark neutral
- accent: deep green or blue
- heatmap colors: green, yellow, orange, red, neutral gray
- avoid decorative gradients, glass blobs, purple AI palettes, and large hero marketing sections
- keep content dense and scannable
- no nested cards
- tables should support horizontal scroll on small screens

Recommended heatmap tokens:

- high: low-saturation green, for example `#dff3e8` with dark green text
- test: low-saturation yellow, for example `#fff1bf` with dark amber text
- small-test: low-saturation orange, for example `#ffe1c2` with dark orange text
- avoid: low-saturation red, for example `#f8d2cf` with dark red text
- neutral: light gray, for example `#f2f4f7` with dark gray text

## Heatmap Explanation Rule

When a heatmap marks cells as main allocation, add a follow-up table that breaks out each main cell.

Required columns:

- channel
- dimension
- direction
- audience or local proxy
- reason
- validation action

After the table, add a short strategy synthesis:

- Decide whether the plan should use full-matrix saturation, channel-specific anchors, or narrow learning tests.
- Explain the choice in plain language.
- Name each channel's anchor point.
- Name the budget condition for scale.
- Name which signals stay in small tests.

Default stance for limited budgets:

- Use channel-specific anchors.
- Test adjacent signals with small budgets.
- Reserve full-matrix saturation for larger budgets, clean tracking, and strong early lift evidence.

## Dimension Generation Rule

When a heatmap uses coded columns such as `D1`, `D2`, or semantic dimension names, add a short section that explains how the dimensions were generated.

Required logic:

- product mechanism: feature, benefit, friction, price, proof need, compatibility, usage scenario, or suppression risk
- country and channel context: local ecommerce path, search behavior, retail media access, creator ecosystem, platform availability
- activation proxy: keyword, category visitor, product viewer, cart abandoner, custom audience, creator audience, interest, content viewer, or retailer segment
- measurement route: A/B test, holdout, geo split, UTM, retail report, creator post report, platform lift test, or manual evidence review
- risk filter: sensitive traits, stereotypes, post-treatment leakage, unmeasurable labels, low platform availability, and margin risk

Required dimension provenance fields:

- dimension id
- dimension name
- source logic
- activation proxy
- product mechanism or resistance mechanism
- measurement route
- reviewer concern
- status: keep, test, small test, suppress only, needs data, or delete

If the full candidate dimension pool is larger than the displayed heatmap, state why the displayed subset was selected.

## Reviewer Challenge Rule

Add a named reviewer before final strategy synthesis when the report uses coded dimensions or heatmap-based budget recommendations.

Default reviewer name: `Causal Activation Reviewer`.

The reviewer challenges:

- whether the dimension is observable before treatment
- whether a channel can actually target or approximate it
- whether it links to a product mechanism, resistance mechanism, or proof need
- whether it can be measured with an experiment, holdout, credible baseline, or platform report
- whether it confuses high relevance with high incremental lift
- whether it creates compliance, sensitive-attribute, stereotype, or margin risk

The reviewer may downgrade a dimension from main allocation to test, small test, suppress only, needs data, or delete. If a reviewer downgrades a dimension, reflect that downgrade in the strategy synthesis and budget notes.

## Execution Gate Rule

When the report recommends paid activation, budget allocation, retargeting, KOL procurement, OPE, policy learning, or scale-up, add an execution gate.

Required fields:

- maturity level: L0 hypothesis, L1 experiment foundation, L2 offline policy learning, or L3 online learning
- current defensible claim
- claims that are not yet defensible
- missing data and logs
- next experiment or data pull
- scale condition

Default for product-country launch reports: L0 or early L1 unless the user provides randomized exposure data and holdout results.

## Treatment Card Rule

When budget is assigned to a concrete paid action, include treatment cards.

Required columns:

- treatment ID
- action
- audience or platform proxy
- baseline or no-treatment option
- cost formula
- expected mechanism
- guardrail
- measurement route

Keep treatment IDs stable across the report, experiment plan, logs, and readout.

## Platform Execution Rule

When the budget table includes named platforms, add execution advice to the budget table and a platform execution section after it.

Budget table execution advice should be short:

- 2-4 concrete operating moves
- linked treatment IDs where possible
- linked D dimensions where useful
- consumer language, not raw technical specs
- the main measurement route
- readable labels: do not show naked IDs such as `T01/T02; D7/D8`. Show `ID + short name` in small tags, for example `T01 Search high-intent`, `D18 price-sensitive`.

Platform execution section should be more detailed and include:

- official platform doc basis
- linked treatment IDs
- priority D dimensions or audience proxy
- campaign/ad group or equivalent setup
- consumer-language creative or keyword direction
- what to exclude or suppress
- measurement and holdout route

Technical specs may appear in product facts or feed attributes, but consumer-facing search terms and creative must translate specs into buyer language. Example: use "sweat and light rain confidence" or the user's language equivalent for `IP57`, unless the audience is explicitly technical.

## Contextual Message Rule

When the report recommends content, KOL, review, search, ecommerce, retail media, sales, or retargeting actions, add a contextual message matrix after the heatmap or platform execution section and before final budget or priority plays.

Required columns:

- platform or vertical
- linked audience label
- linked selling point
- buyer question
- conversation mode
- competitor comparison level
- what to say
- what to avoid
- proof packet
- format
- CTA
- linked treatment ID
- measurement route

Use `sm-causal-personalization/references/62-contextual-message-and-competitive-frame.md`.

Default comparison levels:

- 0-1 for broad media, carrier, public-interest, or brand trust contexts.
- 1-3 for search, creator, retargeting, and owned lifecycle.
- 2-4 for ecommerce, marketplace, and retail media.
- 3-5 for expert review, technical vertical, B2B sales, RFP, or procurement.
- 0-4 for health, medical, finance, safety, children, and other sensitive categories, with domain or legal review before strong claims.

Every row must state what to say and what to avoid. Named competitor comparison needs intent, proof, review, and a measurable treatment.

## HTML Requirements

Create a single `.html` file unless the user asks for a web app.

Required:

- `<!doctype html>`
- an explicit `<html lang>` value
- `<meta charset="utf-8">`
- responsive viewport meta
- descriptive `<title>`
- inline CSS
- semantic sections
- tables with captions or section labels
- source links as real `<a>` tags
- print-friendly CSS
- no external JavaScript
- no remote font dependency

Allowed:

- small inline JavaScript only for table filtering or section toggles when it materially improves inspection
- external source links
- local or remote product image only when the source is stable and the report still works without it

Do not:

- hide assumptions in footnotes only
- use unlabelled ROI
- present platform estimates as population truth
- present KOL prices as sourced unless a current quote or rate card exists
- use "and so on" to replace rows
- include placeholder cells

## Verification Block

Add a final verification block:

- generated date
- data freshness
- sources checked
- assumptions stated
- unverified claims
- required next data pulls
- recommended experiment

## File Naming

Use:

`outputs/YYYY-MM-DD-product-country-report.html`

For examples inside the suite, use:

`examples/product-country-html-report.html`

## Quality Gate

Before final delivery:

- Open the file path mentally or with browser tooling if available.
- Confirm all requested sections exist.
- Search for unfinished markers, placeholder tokens, and filler text.
- Search for banned slop phrases listed in `stop-slop.md`.
- Confirm every source in the source registry is linked.
- Confirm every ROI is marked as assumption, hypothesis, or evidence.
- Confirm coded heatmap dimensions include a generation method and provenance table.
- Confirm each heatmap main cell has a row in the main-cell explanation table.
- Confirm a named reviewer challenges the dimensions and main budget decisions.
- Confirm paid actions have treatment cards.
- Confirm scale recommendations include maturity and logging gates.
- Confirm platform budget rows include execution advice.
- Confirm a platform execution section links budget rows to treatment IDs, D dimensions, platform proxies, consumer language, and measurement routes.
- Confirm contextual message rows include buyer question, comparison level, what to say, what to avoid, proof packet, claim boundary, treatment ID, and measurement route.
- Confirm connection cells use readable labels, not naked treatment or dimension IDs.
- Confirm a strategy synthesis follows the heatmap explanation.
