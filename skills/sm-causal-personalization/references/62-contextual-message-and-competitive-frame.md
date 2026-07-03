# 62 Contextual Message And Competitive Frame

Use this when a plan already has product selling points, audience dimensions, and platform or vertical context, then needs to decide what to say, how strongly to prove it, and whether to compare against competitors or substitutes.

## Core Position

A selling point does not have one universal expression.

Translate each `selling point x audience x platform` into a context-specific message frame before writing ads, KOL briefs, landing pages, retail media copy, sales scripts, or review briefs.

The message frame must answer:

- What question is the buyer trying to resolve in this platform or vertical?
- What proof standard does this context expect?
- Should the product be framed against status quo, category alternatives, named competitors, or no comparison?
- What claim boundary and review path are needed?
- Which treatment, metric, and holdout will test this message?

## Required Output

Create a `Contextual Message Card` for each important platform or vertical.

Required fields:

- `message_context_id`
- platform or vertical
- country/category/selling-point selection basis for local platforms
- target audience or D dimension
- selling point
- buyer question
- conversation mode
- competitive comparison level
- what to say
- what to avoid
- proof packet
- content format
- CTA
- claim boundary
- treatment_id
- measurement route
- human review required

## Conversation Modes

Choose one primary mode per row.

| Mode | Use when | Main content |
|---|---|---|
| Category education | Buyer does not understand the category or form factor | What this product type is for, who it suits, tradeoffs |
| Social or brand trust | Broad audience, mass media, carrier, public-interest context | Brand responsibility, trust, everyday relevance, access |
| Product proof | Buyer is close to purchase or needs evidence | Specific mechanism, evidence, reviews, demo, limitations |
| Competitive proof | Buyer is actively comparing alternatives | Differentiated tradeoffs, substantiated comparison, switching reason |
| Price and value proof | Price is a barrier | Total value, warranty, delivery, durability, review evidence |
| Reassurance | Buyer has seen product but hesitates | Objection handling, proof reminder, low-friction next step |
| Boundary clarification | Product can be misunderstood or overclaimed | Who it suits, who should choose another solution, limits |

## Competitive Comparison Scale

Use this scale before writing any competitor-facing message.

| Level | Name | Use when | Allowed expression | Evidence needed | Review |
|---|---|---|---|---|---|
| 0 | No comparison | Mass awareness, sensitive claims, weak proof, brand trust context | Talk about need, responsibility, habit, outcome boundary | Product facts and brand proof | Brand review |
| 1 | Status quo comparison | Buyer problem is old habit or current workaround | Compare against doing nothing, manual work, discomfort, uncertainty | User pain, reviews, usage scenario | Brand review |
| 2 | Category tradeoff | Buyer compares product types | Compare open-ear vs in-ear, smartwatch vs cuff, premium vs budget tier | Product mechanism, category facts, limitations | Claim review |
| 3 | Named competitor adjacency | Search, ecommerce, retail media, or sales context shows active competitor comparison | Mention named competitor only where buyer intent already contains it; focus on substantiated tradeoffs | Public specs, pricing, reviews, own tests, source links | Legal or compliance review |
| 4 | Expert evidence comparison | Technical, medical, finance, enterprise, or professional vertical expects proof | Use test results, standards, benchmarks, methodology, limitations | Third-party test, certification, clinical/technical validation, benchmark design | Legal/compliance plus domain expert |
| 5 | Challenger table | High-intent landing page, review brief, sales battlecard, or RFP response | Structured comparison table with strengths, tradeoffs, and fit boundaries | Fully sourced claims, current competitor data, documented methodology | Legal/compliance signoff |

Default to the lowest level that can answer the buyer question.

## When To Compare Competitors

Use competitor or substitute comparison when at least two conditions are true:

- Buyer intent already contains comparison, such as search query, review visit, product targeting, RFP, sales objection, or marketplace browsing.
- The selling point changes the buyer's choice set, such as form factor, accuracy, compatibility, cost, reliability, warranty, implementation time, or risk.
- The comparison can be substantiated with current public facts, test data, third-party review, platform listing, or verified internal evidence.
- The platform context expects comparison, such as ecommerce, search, review media, technical vertical, sales call, procurement, or marketplace product targeting.
- The comparison can be measured as a treatment, for example competitor keyword ad, comparison landing page, product targeting, creator review, or sales battlecard.

Do not use named competitor comparison when:

- The buyer is in broad awareness and has not shown comparison intent.
- The category is sensitive or regulated and proof is weak.
- The claim depends on private competitor data, stale pricing, unverifiable superiority, or exaggerated wording.
- The platform policy, local law, or brand guideline has not been checked.
- The comparison would mainly create attention while increasing complaint, legal, channel, or brand risk.

## Platform And Vertical Defaults

| Context | Default level | Main question | Recommended frame |
|---|---:|---|---|
| Mass media, carrier, public screen | 0-1 | Why should people care? | Social relevance, brand trust, life situation, category education |
| Search ads | 1-3 | Which answer matches my query? | Query-specific benefit, category tradeoff, competitor only for comparison queries |
| Shopping, marketplace, retail media | 2-4 | Is this product worth buying here? | Product proof, price, reviews, delivery, warranty, fit boundary |
| Local retailer, comparison site, marketplace | 2-4 | Can I buy this safely and at a fair price here? | Local trust, seller status, stock, warranty, delivery, price history, authorized channel boundary |
| Technical review media | 3-5 | How does it perform and for whom? | Evidence comparison, test method, limitations, competitor alternatives |
| Health, medical, wellness vertical | 0-4 | Can I trust the claim and what can it safely mean? | Accuracy evidence, validation method, usage boundary, professional caution |
| Creator/KOL content | 1-3 | Does this fit my real life? | Lived scene, demo, personal tradeoff, light category comparison |
| Retargeting | 1-3 | What doubt remains? | Proof reminder, review, delivery, price, low-frequency reassurance |
| CRM or owned lifecycle | 1-4 | Why is this relevant to me now? | Contextual reason, proof, support, upgrade or replacement logic |
| B2B sales, RFP, partner pitch | 3-5 | Why choose this vendor or solution? | Battlecard, ROI, switching cost, implementation proof, risk controls |

## Category Risk Rules

For low-risk consumer lifestyle categories:

- Use Level 1-3 freely when buyer intent supports it.
- Use creator or review content to show tradeoffs.
- Keep named competitor claims source-linked and current.

For electronics and technical products:

- Use Level 2-5 when specs, tests, and use cases are clear.
- Translate specs into buyer language in ads.
- Keep raw specs in product pages, feed attributes, technical reviews, and comparison tables.

For health, medical, financial, children, safety, legal, employment, housing, or other sensitive categories:

- Start at Level 0-2.
- Move to Level 3-4 only with strong proof and local review.
- Avoid diagnosis, guaranteed outcome, fear language, and sensitive-attribute targeting.
- State limitations and intended use.
- Require domain expert or legal review for accuracy, efficacy, safety, risk, or superiority claims.

For enterprise and B2B:

- Use Level 3-5 inside sales, RFP, partner, and procurement contexts.
- Keep public ads more conservative than sales battlecards.
- Log sales rep overrides and competitor objections if the output feeds causal lead scoring or policy learning.

## Message Frame Matrix

Add this table after the heatmap or activation map and before budget.

Required columns:

- platform or vertical
- linked audience label
- linked selling point
- buyer question
- conversation mode
- comparison level
- what to say
- what to avoid
- proof packet
- format
- CTA
- linked treatment ID
- measurement route

Use readable labels:

- good: `T04 Tech review proof`, `D24 call quality pain`, `SP3 call clarity`
- bad: `T04; D24; SP3`

## Proof Packet

Choose proof by context.

| Proof type | Use for |
|---|---|
| Product facts | Basic attributes, availability, price, warranty |
| User language | Pain, objections, jobs-to-be-done, review themes |
| Demonstration | Wear, setup, usage, comparison, environment |
| Third-party review | Category education, expert credibility, tradeoff explanation |
| Benchmark or test | Technical, medical, B2B, accuracy, durability, speed |
| Certification or standard | Regulated, safety, compliance, enterprise procurement |
| Social proof | Ecommerce, retargeting, creator, marketplace trust |
| Economic model | B2B, high-price consumer, subscription, total cost |

## Causal Connection

The message frame is still a treatment component.

For each message frame, state:

- baseline message or no-treatment option
- expected mechanism: education, proof, reassurance, status shift, risk reduction, switching trigger, price justification, urgency, or support
- HTE dimension that could respond differently
- guardrail: complaint, unsubscribe, negative comment, ad fatigue, claim risk, margin loss, channel conflict
- measurement route: A/B, holdout, lift test, creator holdout, landing-page split, sales script randomization, or matched comparison

## Examples

### Blood Pressure Watch

| Context | Level | What to say | What to avoid |
|---|---:|---|---|
| Carrier or mass media | 0-1 | Family health awareness, daily habit, easier records, brand trust | Accuracy superiority, diagnosis language, fear claim |
| Health vertical | 3-4 | Validation method, intended use, accuracy boundary, when to consult a professional | Guaranteed medical outcome, unsupported competitor attack |
| Ecommerce | 2-4 | Price, warranty, reviews, how measurement works, fit with phone and app | Medical certainty, stale competitor pricing |
| Doctor/community education | 0-2 | Record-keeping habit and conversation aid | Replacing medical diagnosis or treatment |

### Open-Ear Earbuds

| Context | Level | What to say | What to avoid |
|---|---:|---|---|
| Search | 2-3 | Open-ear comfort, calls, awareness, competitor comparison only when query asks | Calling it a noise-cancelling replacement |
| Creator running content | 1-2 | Hear surroundings, light clip-on fit, sweat and light rain confidence | Overstated safety promise |
| Tech review | 3-5 | Tradeoffs versus in-ear and bone conduction, call demo, battery, leakage boundary | Unsourced superiority |
| Retargeting | 1-3 | Reviews, price, delivery, warranty, remaining objection | High-frequency pressure |

## Acceptance Checklist

- Each major platform has a message frame row.
- Competitor comparison has a level from 0 to 5.
- Named competitor comparison appears only with intent, proof, review, and measurement.
- Sensitive or regulated categories have lower default levels and human review.
- Every message row links to a treatment ID, D dimension or audience label, and measurement route.
- Claims are separated into product fact, proof, hypothesis, and needs review.
- The output says what to say and what to avoid.
