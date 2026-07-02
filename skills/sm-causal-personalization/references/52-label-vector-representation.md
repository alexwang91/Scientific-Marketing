# 52 Label Vector Representation

## Core Position

Use labels and vectors together.

Labels are the semantic contract. Vectors are the computational representation.

Do not replace labels with embeddings. Do not rely on labels alone when the system must search, cluster, match, generalize, or evaluate many text-like treatments.

## Why This Is Worth Doing

This layer has practical value when it reduces repeated explanation or improves matching.

It can save tokens by:

- Reusing stable label IDs instead of re-explaining long mechanisms.
- Loading only the labels relevant to the task.
- Summarizing repeated product, audience, treatment, and creator concepts into compact cards.
- Retrieving similar prior experiments instead of pasting all history.

It can improve precision by:

- Matching variant language, search terms, reviews, and KOL content that share meaning but not exact words.
- Finding similar products, treatments, and historical experiments.
- Feeding embeddings into CATE, HTE, OPE, or policy models.
- Reducing action sparsity when LLM-generated treatments create many variants.

It does not replace causal evidence.

## Use Labels For

- Product-market semantic cards.
- Causal mechanisms.
- HTE dimensions.
- Treatment ontology.
- Audience-treatment pair tables.
- Evidence grades.
- Activation proxies.
- Measurement routes.
- Governance and claim boundaries.
- Human review, reporting, and decision records.

Labels should be short, stable, and defined.

## Use Vectors For

- Search query clustering.
- Review, Q&A, and social listening clustering.
- Competitor listing similarity.
- Creator/KOL content and audience matching.
- Treatment variant clustering.
- LLM-generated copy grouping.
- Similar experiment retrieval.
- Large action OPE.
- CATE/HTE feature input when text or product semantics matter.
- Cold-start transfer from related products or treatments.

Vectors should be versioned and tied back to labels.

## Dual-Track Schema

Use this structure:

- `label_id`
- `label_name`
- `label_type`
- `definition`
- `parent_label_id`
- `examples`
- `counter_examples`
- `source`
- `evidence_grade`
- `activation_proxy`
- `measurement_status`
- `embedding_id`
- `embedding_model`
- `embedding_version`
- `created_from_text`
- `review_status`
- `owner`

Label types:

- product_feature
- product_use_case
- demand_job
- friction
- mechanism
- hte_dimension
- treatment_family
- treatment_arm
- content_angle
- audience_context
- creator_type
- platform_proxy
- measurement_route
- risk
- suppression_reason

## Representation Rules

1. Start with labels when the concept affects decision, budget, claim, or governance.
2. Add vectors when the concept must be retrieved, clustered, matched, modeled, or generalized.
3. Never use an embedding-only concept in a final strategy without a human-readable label.
4. Never use a label-only concept for high-volume search, KOL matching, LLM variant grouping, or large-action OPE.
5. Version embeddings when the model, prompt, source text, or label definition changes.
6. Store examples and counter-examples to prevent label drift.

## Product And Audience Use

Use labels for:

- "open-ear safety awareness"
- "secure fit during running"
- "premium comparison shopper"
- "price-sensitive deal seeker"

Use vectors for:

- mapping "running headphones that do not fall out" to secure fit
- mapping "hear traffic while jogging" to outdoor safety awareness
- clustering reviews about discomfort, falling out, sweat, and ambient sound
- finding similar products or prior experiments

## Treatment And OPE Use

For each treatment:

- Keep `treatment_family` and `treatment_arm` as labels.
- Store content, prompt, and claim boundary.
- Create embedding for the treatment content or treatment metadata.
- Use embeddings to group similar variants before OPE or HTE modeling.

This is especially important when AI creates many message variants.

## KOL And Content Use

Use labels for:

- creator_type
- treatment_job
- claim_boundary
- brand_safety_risk
- country
- platform

Use vectors for:

- creator content similarity.
- audience-language similarity.
- matching creator themes to product mechanisms.
- detecting whether a creator's past content fits the treatment job.

Do not choose a creator by embedding similarity alone. Use price, audience geography, median views, brand safety, and measurement design.

## HTE Modeling Use

Labels are useful model features when:

- They are stable.
- They are available before treatment assignment.
- They can be audited.
- They are not post-treatment leakage.

Vectors are useful model features when:

- Product text, reviews, search queries, or treatment content contain signal not captured by labels.
- There are many related but not identical treatments.
- Cold-start transfer matters.

Guardrail:

- Do not feed post-treatment outcomes or post-treatment text as pre-treatment HTE features.

## Token Economy Rule

For long-running projects, use labels as compression:

- First mention: define the label.
- Later mentions: use `label_id` plus short name.
- Load full definition only when the label is disputed or used for a decision.

Example:

- `MECH_ambient_safety`: buyer wants audio while hearing surroundings.
- `HTE_outdoor_runner`: buyer context where ambient-safety mechanism may matter.
- `TRT_expert_demo_video`: video treatment that demonstrates fit and safety.

This saves tokens only if the label registry is reused and not pasted in full every time.

## Quality Checks

Before using a label:

- Is it defined?
- Does it have examples and counter-examples?
- Is it observable before treatment?
- Does it affect treatment effect or activation?
- Is it too broad to act on?

Before using an embedding:

- What source text created it?
- Which model and version created it?
- Does it map back to a label?
- Is it being used for retrieval, clustering, OPE, or model features?
- Has semantic drift been checked?

## Output Pattern

Return:

1. Label registry subset.
2. Which concepts need embeddings.
3. Why embeddings are useful.
4. Where labels are enough.
5. Model or retrieval use.
6. Token-saving use.
7. Drift and audit rule.
8. Next data artifact.

## Failure Modes

- Embedding-only strategy that no stakeholder can audit.
- Too many labels that duplicate the same meaning.
- Labels created after seeing outcomes and used as if they were pre-treatment features.
- Embeddings from unversioned prompts or changing models.
- Similarity treated as causality.
- Token-saving claim without a reused label registry.
