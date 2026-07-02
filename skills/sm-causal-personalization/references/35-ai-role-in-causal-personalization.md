# 35 AI Role In Causal Personalization

## Core Position

AI should make causal personalization more usable, not less accountable.

Use AI to expand the treatment space, read weak signals, draft variants, explain policies, and monitor drift. Use causal evidence to decide what deserves budget.

## What AI Can Do

- Build treatment libraries from campaigns, offers, lifecycle journeys, sales scripts, and product experiences.
- Turn unstructured data into candidate context: reviews, tickets, call notes, CRM notes, community posts, and search behavior.
- Generate controlled variants of message, offer framing, objection handling, and channel copy.
- Cluster customers or situations into candidate hypotheses for uplift testing.
- Assist CATE, uplift, or policy modeling when experimental or quasi-experimental data exists.
- Explain why a policy selected no treatment, a light touch, a discount, a sales call, or suppression.
- Monitor drift, fatigue, complaint spikes, policy concentration, and unusual treatment allocation.

## What AI Must Not Do

- Claim causality from historical targeting without a credible comparison.
- Replace holdouts with synthetic consumers.
- Generate unlimited treatment variants that cannot be logged, compared, or governed.
- Personalize sensitive claims, medical/financial pressure, or vulnerable-user nudges without red-team review.
- Hide treatment cost, margin impact, unsubscribe, complaint, return, or long-term retention harm.

## AI Work Split

1. Sensing: AI reads market and user signals, then labels each output as fact, quote, inference, or hypothesis.
2. Treatment generation: AI drafts candidate treatments under a treatment taxonomy.
3. Causal estimation: models estimate lift or CATE only from suitable data.
4. Policy decision: the system chooses treatment or no treatment using expected net incremental value.
5. Creative execution: AI writes copy inside approved treatment and claim boundaries.
6. Monitoring: AI watches for drift, harm, fatigue, and unexplained allocation.

## Required Human Review

Human review is required for:

- New treatment categories.
- New discount or pricing logic.
- Claims about product performance, savings, health, safety, finance, or compliance.
- Sensitive audiences.
- Policy launches, rollback rules, and guardrail thresholds.

## Output Pattern

For each AI role, state:

- AI task.
- Input data.
- Output artifact.
- Human reviewer.
- Causal evidence required before scaling.
- Guardrail that can block the action.

## Failure Modes

- AI creates good-sounding segment stories from noisy lift tables.
- AI improves message quality but the business mistakes this for incremental effect.
- AI-generated variants are not versioned, so measurement cannot identify what worked.
- AI creates a policy that is hard to explain, hard to pause, or hard to audit.

## Language Notes

Say "AI-generated hypothesis" before validation.

Say "AI-assisted treatment design" when AI creates candidate actions.

Say "causal decisioning" when the system chooses actions based on incremental value.
