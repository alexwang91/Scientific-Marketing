# Module Router

## Core Position

Scientific marketing work often spans modules. Route by the business decision, not by the user's wording.

Pick the smallest module set that can answer the decision. Add modules only when they change the recommendation, measurement, risk, or wording.

## Routing Table

| User asks about | Primary skill | Often pair with |
|---|---|---|
| Market opportunity, category, competition | `sm-traditional-marketing` | `sm-ai-marketing-intelligence`, `sm-measurement` |
| User pain, reviews, JTBD, user language | `sm-traditional-marketing` | `sm-ai-marketing-intelligence` |
| Positioning, message house, brand codes | `sm-traditional-marketing` | `sm-output-taste` |
| AI marketing ideas, AI workflow, AI creative | `sm-ai-marketing-intelligence` | `sm-measurement`, `sm-governance-red-team` |
| Personalization, offers, targeting, next-best-action | `sm-causal-personalization` | `sm-measurement`, `sm-governance-red-team` |
| Campaign ROI, incrementality, experiment design | `sm-measurement` | `sm-traditional-marketing` |
| MMM, attribution, budget allocation | `sm-measurement` | `sm-traditional-marketing` |
| AI search visibility, GEO, answer engine audit | `sm-ai-visibility` | `sm-output-taste` |
| Privacy, consent, bias, dark patterns, claim risk | `sm-governance-red-team` | `sm-measurement` |
| Writing, deck wording, executive summary | `sm-output-taste` | relevant domain module |

## Execution

1. Pick one primary module.
2. Add at most two supporting modules unless the user asks for a full system.
3. Read only the references needed for the decision.
4. Always pass final prose through `sm-output-taste`.

## Default Output

Use this output unless the user asks for a different format:

1. Business problem
2. Marketing diagnosis
3. Consumer or category mechanism
4. Testable hypotheses
5. Traditional marketing moves
6. AI leverage
7. Measurement plan
8. Execution plan
9. Governance risks
10. Next 7 days

## Evidence And Final Gates

Label important claims as `Evidence`, `Assumption`, `Hypothesis`, or `Needs test`.

Never say marketing caused an outcome unless the evidence includes a control group, holdout, randomized test, credible quasi-experiment, or validated causal model.

Before answering, run `sm-output-taste`.

## Failure Modes

- Reading every reference for every task.
- Answering a measurement question with creative advice.
- Answering a positioning question with only channel tactics.
- Pairing modules because they sound related but do not change the decision.
- Skipping governance when personalization, nudges, claims, or agents are involved.
