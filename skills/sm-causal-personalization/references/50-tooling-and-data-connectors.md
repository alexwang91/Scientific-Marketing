# 50 Tooling And Data Connectors

## Core Position

The skill should keep methods stable and fetch volatile facts at execution time.

Do not store current audience sizes, creator prices, platform targeting menus, country availability, or CPM/CPC benchmarks as permanent truth.

## Tool Classes

### Product And Ecommerce Semantics

Use for product-market diagnosis:

- Product feed parser.
- Product listing scraper or manual listing input.
- Review, Q&A, and competitor listing miner.
- Google Merchant product data and category taxonomy.
- Amazon Product Type Definitions, browse nodes, item type keywords, search term reports, ASIN/SKU reports.
- Shopify product taxonomy, category metafields, product tags, collections.
- Retailer category, product, search, cart, and purchase logs.

Output supported:

- Product-Market Semantic Card.
- Label Vector Representation Card.
- Product taxonomy and marketplace facet map.
- Search and competitor language.

### LLM Context Scoring

Use for turning raw language into auditable sample-level statistics:

- Review text.
- Q&A text.
- Search queries and search term reports.
- Social comments.
- KOL or creator comments.
- Customer support tickets.
- Sales call transcripts.
- Survey open text.
- Forum and community posts.

Tooling:

- LLM batch classifier.
- Label registry.
- Embedding generator and vector store.
- Deduplication and sampling tools.
- Human review queue.
- Multilingual quality check.
- Source audit table.

Output supported:

- LLM Context Segment Scoring Card.
- Label Vector Representation Card.
- Causal HTE Hypothesis Map inputs.
- Candidate audience sizing inputs after calibration.

Boundary:

- Use LLM scoring for sample-level intent, reason, barrier, treatment fit, and candidate causal-role labels.
- Do not use it as country share, persuadable share, lift, ROI, or final targeting approval without calibration and measurement.

### LLM Semantic Prior Hypothesis

Use for scoring a treatment against a person, segment, account, or buyer context before effect data exists.

Tooling:

- LLM structured-output scorer.
- Label registry for mechanisms, barriers, HTE dimensions, and treatment families.
- Prompt/version registry.
- Human review queue.
- Calibration set from human labels, past experiments, or historical outcomes when available.
- Scenario library for boundary examples.
- Calibration dashboard for agreement, bucket performance, and drift.

Output supported:

- LLM Semantic Prior Hypothesis.
- LLM Semantic Prior Rubric output.
- Semantic Prior Calibration Card.
- Causal HTE Hypothesis Map inputs.
- Treatment reframe candidates.
- Suppression and sleeping-dog hypotheses.

Boundary:

- Use it to predict semantic fit, relevance, resistance, and likely reason.
- Do not use it as conversion probability, CATE, incrementality, ROI, or final exclusion logic without measurement.
- Use numeric probabilities only after calibration.

### Audience And Reach Planning

Use for country sizing and platform activation:

- Google Ads Reach Planner.
- Google Ads Keyword Planner or KeywordPlanIdeaService.
- Google Ads Audience Manager and campaign forecasts.
- Meta Ads Manager audience estimates.
- Meta Marketing API Targeting Search and delivery estimates where available.
- TikTok Ads Manager Audience Size Estimation and Reach Estimator.
- TikTok API for Business.
- Amazon Ads media planner, AMC audience counts, Amazon DSP audiences.
- Retail media planner tools.
- Census, official statistics, industry reports, survey, and panel data.

Output supported:

- Audience Taxonomy And Sizing Card.
- Platform Audience Activation Map.
- Country activation inventory.

### Creator/KOL Discovery And Pricing

Use for creator and content activation:

- TikTok Creator Marketplace or TikTok One.
- YouTube Creator Partnerships and creator boost options.
- Instagram Creator Marketplace and partnership ads.
- Amazon Influencer, Amazon Associates, Amazon Live, or marketplace creator programs.
- Local affiliate and creator platforms.
- Third-party creator databases for rates, audience geography, median views, engagement, brand safety, and historical sponsored content.
- Manual outreach and rate cards when no platform data exists.

Output supported:

- Creator/KOL Causal Procurement Brief.
- Creator shortlist.
- Price, rights, amplification, and ROI scenario.

### Experiment And Causal Measurement

Use for incrementality:

- Experiment tracker.
- Randomization service.
- Holdout audience builder.
- Geo or matched-market tooling.
- Platform conversion lift or brand lift tools.
- Amazon Marketing Cloud and clean rooms.
- First-party event warehouse.
- Uplift, CATE, HTE, OPE, and policy evaluation libraries.
- Embedding generation and vector store for retrieval, clustering, treatment embeddings, and similar experiment lookup.
- Sequential testing or confidence sequence tooling.
- Dashboard for guardrails, margin, fatigue, and drift.

Output supported:

- Measurement Router.
- Lift Readout.
- Decision-Focused Uplift Evaluation Card.
- OPE And Surrogate Validation Card.
- Sequential Monitoring Plan.
- Experiment Memory Entry.
- Label Vector Representation Card.

### Budget And Optimization

Use for spend allocation:

- Spreadsheet model for first pass.
- Linear programming or integer programming solver.
- Knapsack optimizer.
- Contextual bandit framework.
- Scenario simulator.
- Margin and contribution model.
- Inventory, sales capacity, and frequency constraint inputs.

Output supported:

- Constraint Map.
- Budget and ROI scenarios.
- Policy Shadow-Test Report.

## Facts That Require Live Lookup

Always verify at execution time:

- Platform audience targeting options by country.
- Platform audience size or reach estimates.
- Campaign type support.
- Creator marketplace availability.
- Specific creator names, rates, country audience mix, and median views.
- CPM, CPC, CPA, creator rates, usage rights, and paid amplification costs.
- Local privacy, consent, claim, and disclosure rules.
- Amazon/retail media country access and AMC availability.
- Search volume and product/category trend data.

## Facts That Can Be Stable

Store in the skill:

- Causal decision grammar.
- Evidence hierarchy.
- Product-market semantic dimensions.
- Label schema and representation rules.
- LLM context scoring schema and sample-level aggregation rules.
- LLM semantic prior schema and calibration rules.
- LLM semantic prior rubric and scenario library.
- Audience taxonomy method.
- Treatment library schema.
- Budget and ROI formulas.
- Measurement router logic.
- Output artifact templates.
- Stop-slop language rules.

## Minimum Viable Tooling

If no APIs are available, the skill can still produce:

- Product-Market Semantic Card.
- Hypothesis-level Audience Cards.
- Treatment Library.
- Assumption-based budget scenarios.
- Data Gap Register.
- Measurement plan.

But it must not provide:

- Exact country audience share.
- Specific creator price.
- Specific platform reach.
- Confident ROI.
- Scale recommendation.

## Automation Roadmap

Phase 1:

- Manual inputs and web lookup.
- Spreadsheet budget model.
- Simple experiment memory table.

Phase 2:

- Product feed and review miner.
- Label registry and vector store.
- Keyword and reach planner pulls.
- Creator shortlist scraper or marketplace export.
- Experiment memory database.

Phase 3:

- API connectors to Google, Meta, TikTok, Amazon, retail media, and creator platforms.
- Causal model pipeline.
- Budget optimizer.
- OPE and sequential monitoring.
- Automated writeback to experiment memory.

## Data Gap Rule

Every missing tool should become a named data gap:

- Missing data.
- Decision weakened.
- Current workaround.
- Owner.
- Deadline.
- Risk if ignored.
