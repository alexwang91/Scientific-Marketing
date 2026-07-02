# 32 Next Best Treatment

## Core Position

Next-best-treatment is stricter than next-best-action. It requires a reason to believe the action changes behavior.

The system must be allowed to choose no treatment.

AI can expand the treatment menu and personalize message variants. The decision rule still needs incremental value, cost, eligibility, and guardrails.

## Use When

Use this for CRM journeys, app messages, email, sales prompts, offers, and retargeting.

## Do Not Use When

- The business cannot hold out users.
- The team only wants a content recommendation with no causal claim.
- All users must receive the same legal, service, or safety message.

## Method

1. Define the eligible population.
2. List possible treatments.
3. Include no treatment as an option.
4. Define the outcome, cost, and guardrails.
5. Estimate expected incremental effect and cost.
6. Choose the treatment with the best expected net value.
7. Reserve holdout.
8. Separate treatment selection from copy generation. Choosing "retention offer" is a policy decision; writing the message is a creative task.
9. Log the chosen treatment, AI-generated content ID, channel, timing, and suppression reason.

## Inputs

- User state.
- Available treatments.
- Eligibility constraints.
- Treatment cost.
- Outcome window.
- Guardrails.

## Outputs

- Treatment menu.
- Eligibility rules.
- Decision table.
- Holdout plan.
- Suppression logic.
- AI content review checklist.
- Treatment logging requirements.

## Validation

Compare treatment policies against random, business-as-usual, and no-treatment baselines.

The policy should improve incremental value without breaking guardrails.

## Failure Modes

- Recommending the same action to everyone because it has the highest average conversion.
- Treating channel preference as treatment effect.
- No no-treatment option.
- Optimizing for short-term response while increasing unsubscribe, churn, or complaints.
- Letting generative AI create unbounded variants that cannot be compared.
- Mixing treatment effect with creative quality without logging content IDs.

## Language Notes

Say "no treatment" when the best decision is to leave the user alone.

Use "next-best-treatment" when the decision includes causal effect. Use "next-best-action" only for generic workflow prompts.
