# 47 OPE Surrogates Sequential Inference

## Core Position

LLM and AI-generated treatments create a large action space. Standard action-ID-based evaluation breaks when each message, offer, or creator brief becomes a new action.

Use action embeddings, long-term surrogate evaluation, and anytime-valid monitoring to make experimentation practical without pretending that offline estimates replace online validation.

## Large Action Space OPE

Use large-action OPE when:

- There are many creatives, messages, offers, or recommendations.
- New policy actions are similar to logged actions but not identical.
- Treatment variants have meaningful embeddings or structured metadata.
- Full online testing of every action is infeasible.

Preferred pattern:

1. Represent treatments with structured metadata and embeddings.
2. Log propensities from the policy that generated historical actions.
3. Use embedding-aware OPE to estimate candidate policy value.
4. Use the estimate to screen policies, not to approve full rollout.
5. Validate shortlisted policies online.

Use `52-label-vector-representation.md` to keep treatment embeddings tied to human-readable treatment labels.

## LLM Treatment Rule

For LLM-generated treatments:

- Use LLM embeddings as treatment features.
- Keep human-readable treatment labels and claim boundaries.
- Keep standard causal or OPE estimators as the measurement layer.
- Version prompts, model, generated content, and approval state.
- Cluster or bucket treatment variants before analysis when sample size is limited.
- Do not let LLM choose, generate, and judge treatment value without causal logging.

The most useful LLM role is representation and generation under measurement discipline.

## Long-Term Value And Surrogates

Short-term experiments can miss long-term value.

Use surrogate or long-term OPE only when:

- Short-term outcomes are measured quickly.
- Long-term outcomes are expensive or slow.
- Historical experiments link short-term signals to long-term outcomes.
- The surrogate has been validated against direct long-term readouts.

Practical rule:

- Use surrogate estimates to screen or prioritize.
- Use direct long-term measurement for high-stakes launch decisions.

## Anytime-Valid Monitoring

Do not simply say "no peeking."

Use fixed-horizon tests when the decision process is fixed. Use anytime-valid inference or confidence sequences when teams need continuous monitoring and data-dependent stopping.

Required fields:

- Sequential method.
- Stopping rule.
- Guardrail threshold.
- Minimum runtime or exposure floor.
- Maximum runtime.
- Decision owner.

Peeking is not the problem if the inference method is designed for continuous monitoring.

## Output Pattern

Return:

1. Action space size.
2. Treatment representation.
3. Label and embedding version.
4. Logged propensity availability.
5. OPE method.
6. Short-term and long-term outcomes.
7. Surrogate validation status.
8. Sequential monitoring method.
9. Online validation plan.
10. Weakest assumption.

## Failure Modes

- Treating each LLM-generated copy as a separate action without enough data.
- Evaluating new policies without logged propensities.
- Using surrogate metrics as final launch proof.
- Peeking at fixed-horizon tests and pretending the p-value is valid.
- Letting OPE approve a policy that has never faced a randomized holdout.

## Reference Anchors

- Saito and Joachims, MIPS: embedding-aware OPE for large action spaces.
- OffCEM and learned action embeddings: reduce large-action OPE variance using action structure.
- Spotify LOPE, WWW 2024: long-term off-policy evaluation using short-term rewards and experiment data.
- Netflix surrogate index evaluation: 200 A/B tests, useful screening but weaker launch recall.
- Netflix, Microsoft, Adobe production patterns: anytime-valid inference and confidence sequences for continuous experiment monitoring.
