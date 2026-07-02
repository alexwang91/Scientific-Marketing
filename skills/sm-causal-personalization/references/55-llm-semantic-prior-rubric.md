# 55 LLM Semantic Prior Rubric

## Core Position

This rubric turns 54 into a repeatable scoring process.

Score treatment-context fit with categories first. Use numbers only after calibration.

## Required Scoring Axes

Score every context-treatment pair on:

- signal strength
- semantic fit
- predicted relevance
- predicted resistance
- confidence
- causal role hypothesis
- recommended action

## Signal Strength

### Strong Signal

Use as a primary driver.

- explicit stated need
- explicit stated dislike
- recent search query
- product page, cart, comparison, quote, or demo behavior
- repeated support, review, call, or survey theme
- hard constraint: budget, compatibility, shipping, country availability, inventory, legal claim, device ecosystem

### Medium Signal

Use as supporting evidence.

- category interest
- competitor interest
- creator or community affinity
- content engagement
- prior purchase
- CRM lifecycle state
- sales stage
- first-party segment with clear definition

### Weak Signal

Use as context only.

- broad demographic
- income proxy
- gender proxy
- age proxy
- lifestyle stereotype
- old behavior
- platform interest label
- lookalike membership

### Restricted Signal

Use only with governance approval and clear necessity.

- protected or sensitive trait
- inferred vulnerability
- minors
- health, finance, employment, housing, education, or comparable high-risk context

## Semantic Fit

### High

Use high when:

- treatment angle directly matches a stated need or current task
- mechanism addresses a live friction
- baseline leaves that friction open
- product use case and treatment scene match
- hard constraints do not block the action

Example:

`Outdoor runner searching for running earbuds` plus `fit and ambient-awareness demo`.

### Medium

Use medium when:

- product fits the context, but treatment angle is incomplete
- one friction is addressed and another remains
- fit depends on proof, offer, timing, channel, or frequency
- signals are positive but not recent

Example:

`Commuter interested in open-ear comfort` plus `generic sports earbuds ad`.

### Low

Use low when:

- a strong signal conflicts with the treatment angle
- treatment emphasizes a rejected use case
- hard constraint blocks the mechanism
- channel or intensity creates likely resistance
- product may fit, yet the current angle is weak

Example:

`Dislikes exercise` plus `running-performance ad`.

### Unknown

Use unknown when:

- context is thin
- treatment is vague
- signals conflict
- important fields are stale or inferred

## Predicted Relevance

### High

The treatment will likely feel related to the subject's active task.

Signals:

- direct search or comparison
- current product/category behavior
- explicit need
- active funnel stage

### Medium

The treatment is adjacent to the subject's task.

Signals:

- category interest
- related content engagement
- old behavior
- partial use-case match

### Low

The treatment angle sits outside the subject's stated task.

Signals:

- unrelated scene
- product category only loosely related
- context points to another job

### Unknown

No task or behavior signal exists.

## Predicted Resistance

### High

Use high when the treatment may create harm or backlash.

Signals:

- explicit dislike
- privacy or tracking concern
- repeated ad fatigue
- claim distrust
- price shock
- creator mismatch
- sensitive context
- high sales pressure
- discount training risk

### Medium

Use medium when resistance can be reduced through proof, lower intensity, or reframe.

Signals:

- uncertain trust
- moderate price concern
- intrusive channel risk
- unclear claim proof
- effort required from user or buyer

### Low

Use low when the treatment is expected in the context and carries little friction.

Signals:

- requested information
- low-pressure educational content
- low-cost reminder
- transparent offer

### Unknown

Resistance signals are missing or stale.

## Confidence

### High

Use high when:

- two or more strong signals agree
- data is recent
- treatment and baseline are concrete
- field provenance is clear
- no restricted signal drives the judgment

### Medium

Use medium when:

- one strong signal exists
- several medium signals agree
- treatment is concrete
- one important field is missing

### Low

Use low when:

- only weak signals exist
- signals conflict
- treatment is underspecified
- country or language context may shift meaning
- source is inferred or model-generated

## Causal Role Mapping

### likely_persuadable

Use when:

- semantic fit is high or medium-high
- an unresolved friction is clear
- treatment directly targets the friction
- no strong sure-thing signal exists
- cost and timing are acceptable

### likely_sure_thing

Use when:

- relevance is high
- purchase intent is strong
- treatment mainly discounts or reminds
- baseline conversion is likely

### likely_lost_cause

Use when:

- product does not solve the job
- hard constraint blocks purchase
- user is committed to a substitute
- current price or availability makes action infeasible

### possible_sleeping_dog

Use when:

- resistance is high
- treatment can create annoyance, distrust, privacy concern, margin damage, or brand harm
- high frequency or aggressive channel is present

### unknown

Use when:

- evidence is thin
- signals conflict
- confidence is low
- causal role depends on a missing baseline

## Recommended Action Mapping

Use this table:

| Semantic Fit | Relevance | Resistance | Default Action |
|---|---|---|---|
| high | high | low | test or scale only with causal evidence |
| high | high | medium | test with guardrails |
| high | high | high | test lower intensity or proof-first treatment |
| medium | high | low | reframe or test |
| medium | medium | medium | research or exploration test |
| low | high | low | reframe before suppression |
| low | medium | medium | reframe, change proof, or research |
| low | low | high | suppress treatment or run harm-focused test |
| unknown | any | any | collect data or human review |

## Numeric Probability Bands

Use these only after calibration:

- high: above 0.70 within the calibrated rubric
- medium: 0.40 to 0.70
- low: below 0.40

Report:

- calibration sample
- label definition
- model version
- Brier score or calibration curve status if available
- drift risk

## Required Boundary Sentence

Every 54 output should include:

`This is a semantic prior for hypothesis generation. It needs measurement before budget scaling, suppression scaling, or ROI claims.`
