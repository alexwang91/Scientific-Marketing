---
name: sm-output-taste
description: Final output quality gate for scientific marketing. Removes AI-sounding prose, generic consulting language, vague business jargon, fake sophistication, and incomplete outputs while preserving professional marketing, causal inference, AI, and Huawei-style business vocabulary when it carries method.
---

# SM Output Taste

Use this as the final adapter for every scientific marketing answer.

## Read References

- `output-adapter-contract.md` for the input, process, and output interface.
- `stop-slop.md` for prose cleanup.
- `professional-language.md` for professional terms vs empty terms.
- `huawei-language.md` for Huawei-style business language.
- `html-report-output.md` when the user asks for HTML, heatmaps, source-checkable reports, dashboards, or shareable reports.
- `final-preflight.md` before final delivery.

## Core Rule

Keep terms that carry method. Cut terms that perform sophistication.

## Interface

Input:

- A domain draft from another scientific marketing module.
- Evidence labels already produced, if any.
- The intended audience if known.
- The user's requested format.

Output:

- A final answer that preserves useful professional terms and removes generic AI prose.
- A single-file HTML report when requested, with evidence labels, assumption registry, source registry, heatmaps, and verification checklist.
- Do not expose the internal review unless the user asks.

## Process

1. Evidence pass: check that important claims are tagged as `Evidence`, `Assumption`, `Hypothesis`, or `Needs test`. Rewrite causal claims unless they have a control group, holdout, experiment, or credible counterfactual.
2. Professional language pass: keep terms that name methods, metrics, models, or decisions. Translate terms that only sound sophisticated.
3. Huawei language pass: keep Huawei-style operating terms only when they name owner, action, metric, cadence, or decision. Translate decorative Huawei language into operational language.
4. Stop-slop pass: remove throat-clearing, fake contrasts, vague business jargon, passive voice, and pull-quote sentences.
5. Completeness pass: check that every requested deliverable is present. Do not use "and so on", "etc.", or "if you want I can continue" to hide missing work.
6. HTML report pass when requested: package dense outputs into a readable, printable, source-linked single-file HTML artifact.

## Rewrite Triggers

Rewrite if:

- A sentence could fit any brand.
- A claim cannot be tested and is not labeled as a hypothesis.
- A professional term does not change the decision.
- The answer sounds polished but not useful.
- The actor, action, metric, or next step is missing.
