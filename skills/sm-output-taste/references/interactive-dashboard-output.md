# Interactive Dashboard Output

Use this when the user asks for an interactive dashboard, clickable board, visual cockpit, or a follow-up artifact generated from a prior handoff.

## Core Position

Build a decision instrument from a prior scientific marketing report or handoff.

The dashboard must let the user click audience, platform, selling point, message frame, treatment, budget, KOL, or heatmap cell and immediately see what changes.

Use `assets/interactive-dashboard-template.html` as the starting point when a single-file HTML dashboard is enough.

Keep the background calm and static. Do not add WebGL, Three.js, or other persistent animation unless the user explicitly asks for it and it is visually checked.

## Full-Fidelity Template Contract

Use `assets/interactive-dashboard-template.html` as the canonical full-fidelity dashboard shell. Do not recreate the visual system from scratch when this template can be used.

Replace these placeholders:

- `__LANG__`
- `__DASHBOARD_TITLE__`
- `__DASHBOARD_SHORT_LABEL__`
- `__DASHBOARD_H1__`
- `__DASHBOARD_SUBTITLE__`
- `__SEARCH_PLACEHOLDER__`
- `__MARGIN_BADGE__`
- `__BUDGET_FLOW_TITLE__` (budget section heading, matching `product.currency`, e.g. `€50,000 从预算流到平台、Treatment 和验证` or `kr 420,000 flowing to platforms, treatments, and measurement`)
- `__DASHBOARD_FOOTER_NOTE__`
- `__DASHBOARD_DATA_JSON__`
- `__KOL_META_JSON__`

Rules:

- Put all product, market, price, KOL, logo, source, budget, message, and heatmap content in `__DASHBOARD_DATA_JSON__` and `__KOL_META_JSON__`.
- Keep the template case-free. Never save generated product-country data back into the template.
- The template must preserve the current interaction system: View Transition detail-panel update, low-opacity pointer gloss, click confirmation pulse, section reveal, readable heatmap labels, static calm background, and `prefers-reduced-motion`.
- The default (no-selection) lens is derived from data: main/holdout dimensions, main-priority platforms, all treatments and budgets. Override with the optional `DATA.defaultLens` object when a different first view tells the story better.
- The template UI chrome (navigation, legends, detail-panel headings) ships in Chinese. When the user's language differs, translate those static strings during generation; the placeholder contract does not cover them yet.
- Validate the generated file with `assets/validate-dashboard.mjs` (see Validation below). `assets/interactive-dashboard-minimal-data.json` is a minimal `DATA` object that passes it and doubles as the smallest working example.

## Validation

Run the bundled validator on the generated dashboard (or on a bare `DATA` JSON file):

```bash
node skills/sm-output-taste/assets/validate-dashboard.mjs outputs/your-dashboard.html
```

It checks ID cross-reference integrity across dimensions/sellingPoints/platforms/treatments/budgets/messages/kol, heatmap shape and grades, budget sums against `product.budget`, message completeness, the Asset Gate, leftover `__PLACEHOLDER__` strings, and inline-script syntax. Fix every ERROR before delivery; treat WARN lines as a review checklist.

## Country Local Platform Discovery

When the dashboard is for a product-country plan, do the local discovery before finalizing platform rows.

Search and source at least these country-specific layers:

- dominant ecommerce marketplaces and electronics/category retailers
- retail media or sponsored placement options from those retailers
- price comparison sites and deal/coupon contexts
- vertical publishers, review media, forums, and communities for the category
- local creators or KOLs that match the selling point and buyer scene
- local-language search terms buyers use for the category, use case, price, and competitors

Each local platform needs a selection basis in the `say` or `summary` field:

- country popularity: materially used in the target country
- category relevance: credible for this product category
- selling-point fit: can explain, prove, or activate a key selling point

If a large local platform lacks category or selling-point fit, keep it in watch/suppress notes. Do not put it in the main matrix just because it is popular.

For KOL and local media rows, include public profile/source URL, role, estimated fee logic, required verification fields, and avatar/logo source when available. Use public/sourceable profile images only. If an avatar cannot be verified, use a neutral labeled placeholder and say what still needs sourcing.

## Price And Margin Evidence Gate

For product-country dashboards, price is not optional.

Use this order:

- official local brand store or local product page price
- major local retailers with product pages
- local price-comparison sites
- large nearby cross-border marketplace only as a secondary reference
- non-local launch price only as a fallback and clearly labeled as fallback

If a reliable country-local price cannot be found, say it cannot be found and ask the user for the price. Do not silently use another country's price as the main anchor.

Every price block must show:

- local currency price
- source name and URL
- check date
- whether it is official, retailer, comparison-site floor, or fallback
- gross margin assumption and unit gross margin
- exchange-rate source when budget or ROI uses another currency

## Asset Gate

Dashboards with local platforms, creators, or KOLs must include visual assets.

Required:

- `DATA.assets.basePath`
- non-empty `DATA.assets.icons`
- `logoIds` on main platform rows and message rows where logos help recognition
- KOL/media `avatar`, `avatarSource`, `profileUrl`, `logoIds`, and fee logic

Rules:

- Cache platform logos or favicons locally when possible.
- Use public/sourceable profile photos only for named people.
- For media packages, use the media logo as the avatar and label the row as media.
- For unnamed creator pools, use a neutral labeled placeholder and say the real candidate photos must be sourced before procurement.
- Do not omit images silently. If an image cannot be found or downloaded, show a placeholder and explain the missing asset in `avatarSource` or the source registry.

Network-restricted fallback (when the agent environment blocks image downloads):

1. Inline exact SVG marks as data URIs for brands whose geometry is public and unambiguous (play button, camera glyph, pharmacy cross). These always render.
2. Reference remote favicon URLs (site favicon or a favicon service) for the rest. They load when the user opens the file with internet access.
3. Fill `DATA.assets.fallback` with `{ logoId: ["2-4 char text", "#brandColor"] }`. The template's built-in `onerror` chain swaps any failed logo `<img>` for a brand-color letter badge and any failed KOL avatar for the neutral placeholder (using `kolMeta[id].initials`), so nothing renders as a broken image.
4. State in `assets.note` and in `avatarSource` which images are remote and what still needs local caching before formal delivery.

## Heatmap Label Gate

Heatmap columns must be readable to the user.

Rules:

- Show `D id` and the audience meaning as separate visual units.
- Use the user's language for the audience label.
- The label must describe the audience or intent, not an internal model shorthand.
- Avoid vertical text unless it has been visually checked.
- Do not show naked IDs such as `D7 / D18` without a readable label.
- If the label is too long, shorten it to a decision phrase such as `比价/价格敏感`, then keep the full definition in the right detail panel.

## Required Sections

- Overview and KPI strip.
- Pivot: selling points, audience dimensions, platforms.
- Relationship graph: `Product -> Selling Point -> Audience -> Platform -> Message -> Treatment -> Measurement`.
- Platform x audience heatmap.
- Contextual Message Matrix with competitor comparison level.
- Budget flow and ROI ranges.
- Treatment cards.
- KOL or creator table when relevant.
- Execution checklist.
- Reviewer challenges.
- Source registry.
- Right detail panel.

## Handoff Contract

A prior report or handoff should provide this data. If a field is missing, generate the dashboard with the field marked `Needs data`.

```json
{
  "product": {
    "name": "",
    "category": "",
    "market": "",
    "budget": 0,
    "currency": "",
    "grossMargin": "",
    "priceRange": "",
    "maturity": "",
    "scaleThreshold": ""
  },
  "dimensions": [
    {
      "id": "D1",
      "name": "",
      "cn": "",
      "status": "main|test|quote|holdout|suppress",
      "proxy": "",
      "logic": "",
      "objection": "",
      "sellingPointIds": [],
      "treatmentIds": []
    }
  ],
  "sellingPoints": [
    {
      "id": "SP1",
      "name": "",
      "consumerLanguage": [],
      "proofNeeded": [],
      "formats": [],
      "linkedAudienceIds": [],
      "linkedPlatformIds": [],
      "linkedTreatmentIds": []
    }
  ],
  "platforms": [
    {
      "id": "",
      "name": "",
      "logoIds": [],
      "role": "",
      "budget": 0,
      "priority": "",
      "summary": "",
      "execute": "",
      "consumerLanguage": "",
      "risk": "",
      "metric": "",
      "docs": [],
      "linkedTreatmentIds": [],
      "linkedSellingPointIds": []
    }
  ],
  "messageContexts": [
    {
      "id": "MC01",
      "platformIds": [],
      "logoIds": [],
      "audienceIds": [],
      "sellingPointIds": [],
      "treatmentIds": [],
      "vertical": "",
      "buyerQuestion": "",
      "mode": "",
      "comparisonLevel": "0|1|2|3|4|5 or range",
      "say": "",
      "avoid": "",
      "proofPacket": "",
      "format": "",
      "cta": "",
      "claimBoundary": "",
      "measurement": ""
    }
  ],
  "treatments": [
    {
      "id": "T01",
      "name": "",
      "hypothesis": "",
      "message": "",
      "audienceIds": [],
      "platformIds": [],
      "sellingPointIds": [],
      "budget": 0,
      "metric": "",
      "format": "",
      "holdout": "",
      "risks": []
    }
  ],
  "budgets": [
    {
      "id": "B01",
      "name": "",
      "amount": 0,
      "pct": 0,
      "status": "Method|Needs test",
      "treatmentIds": [],
      "platformIds": [],
      "audienceIds": [],
      "rationale": "",
      "action": ""
    }
  ],
  "heatmapColumns": ["D1"],
  "heatmapRows": [
    { "platformId": "", "grades": ["H|T|S|N|A per column, same length as heatmapColumns"] }
  ],
  "plays": [
    {
      "id": "P01",
      "name": "",
      "budget": "",
      "cac": "",
      "roiMin": 0.0,
      "roiMax": 0.0,
      "platformIds": [],
      "audienceIds": []
    }
  ],
  "kol": [
    {
      "id": "",
      "type": "",
      "name": "",
      "range": "",
      "reason": "",
      "pricingBasis": "",
      "fit": "",
      "profileUrl": "",
      "avatar": "",
      "avatarSource": "",
      "logoIds": [],
      "audienceIds": [],
      "treatmentIds": []
    }
  ],
  "tasks": [
    {
      "id": "TK01",
      "task": "",
      "owner": "",
      "platformIds": [],
      "treatmentIds": [],
      "status": "",
      "timing": "",
      "evidence": "Evidence|Assumption|Hypothesis|Needs test"
    }
  ],
  "reviewerChallenges": [
    { "id": "RC01", "target": "", "challenge": "", "response": "", "evidence": "" }
  ],
  "sources": [
    { "id": "S01", "title": "", "url": "", "usedFor": "" }
  ],
  "kpis": [
    ["label", "value", "note with evidence tag"]
  ],
  "kolMeta": {
    "K01": {
      "profileUrl": "",
      "avatar": "",
      "avatarSource": "",
      "initials": "2-char fallback shown when the avatar fails to load",
      "logoIds": [],
      "pricingBasis": "",
      "verify": ["optional per-KOL pre-procurement checklist"]
    }
  },
  "assets": {
    "basePath": "",
    "icons": { "logoId": "file path, https URL, or data URI" },
    "fallback": { "logoId": ["2-4 char text", "#brandColor"] },
    "platformLogoDefaults": {},
    "messageLogoDefaults": {},
    "note": ""
  }
}
```

Optional root fields the template also reads:

- `defaultLens`: overrides the derived no-selection highlight set (same shape as a relations object: `sellingPointIds`, `audienceIds`, `platformIds`, `treatmentIds`, `budgetIds`, `messageIds`, `kolIds`).
- `measurementLabel`: name of the measurement node in the graph and detail panel; defaults to `Holdout + UTM + Gross Margin`.
- `measurementHoldouts`, `measurementRules`: lists for the measurement detail panel; generic defaults apply when absent.
- `kolVerifyDefault`: default pre-procurement checklist when a KOL row has no `verify` list.
- `product.defaultRecommendation`, `product.nextStepCards`: overview detail-panel content; generic defaults apply when absent.

Field notes:

- `messageContexts[].format` is the canonical field; the template also accepts legacy `contentFormat`.
- `kpis` rows are `[label, value, note]` tuples, not objects.
- `budgets[].amount` values must sum to `product.budget`; treatment budgets should too.
- All money amounts (`platform.budget`, `treatment.budget`, `budget.amount`) render through `product.currency` (defaults to EUR; NOK/SEK/DKK render as a `kr ` prefix, unrecognized codes fall back to `"CODE "`). Do not hardcode a currency symbol in free-text fields when the amount is dynamic.

## Contextual Message Rule

Every major platform row needs a message context.

Required fields:

- buyer question
- conversation mode
- competitor comparison level
- what to say
- what to avoid
- proof packet
- CTA
- claim boundary
- linked treatment ID
- measurement route

Use `sm-causal-personalization/references/62-contextual-message-and-competitive-frame.md` for the comparison scale.

The `what to say` field should be rich enough for a media buyer, content strategist, or creator lead to use directly. Prefer a short brief over a slogan.

Include:

- why this platform or vertical is selected
- buyer question in that local context
- local-language keyword or copy directions
- narrative sequence or script structure
- proof to show on the first screen or first seconds
- when competitor or substitute comparison is allowed
- how to connect the content to the treatment and measurement route

Local platforms should enter the dashboard only when at least one of these is true:

- country popularity: the platform is materially used in the target country
- category relevance: the platform is credible for the product category
- selling-point fit: the platform can explain, prove, or activate a key selling point

Do not add a large local platform only because it has traffic. If it does not fit the category or selling point, put it in a watch/suppress note rather than the main message matrix.

## Visual Density Rule

Message rows can be long. Render them as wide brief cards, not narrow table columns.

Recommended structure:

- left block: platform/vertical name, local logos, message ID, mode, comparison level, format
- middle block: buyer question and full `what to say` brief
- right block: proof packet, what to avoid, treatment tags, measurement route

Use small logos for platform recognition when they can be sourced or cached. Keep logo size around 18-24 px.

KOL cards should show avatar, name, channel logos, fee range, fee logic, fit, and required verification. If the person is not named, use a neutral placeholder and label it as a creator pool.

## Visual Interaction Rule

Use the dashboard as an operating cockpit, not a decorated article.

Default visual system:

- white or near-white left navigation rail
- glassmorphism panels with translucent white/gray surfaces
- calm gray page background
- static white/gray background treatment, no decorative GPU-heavy background by default
- no loud glow, heavy color bloom, saturated animation, or visual effect that competes with the decision content

Navigation behavior:

- the left navigation active state follows both click and scroll
- the active nav item should change immediately on click
- hash links should still work

Layout behavior:

- at about 980 px and below, move the right detail panel below the main workspace and narrow the left rail
- keep the relationship graph readable in normal 100% browser zoom
- make the relationship graph compact before relying on horizontal scroll
- message proof blocks and KOL text must wrap inside their own cards
- use `min-width: 0`, `overflow-wrap: anywhere`, and responsive single-column fallbacks for long proof text, URLs, creator explanations, and tags

Interaction polish:

- Use micro-interactions only when they clarify state: selection, hover, detail-panel updates, section entry, and clickable heatmap cells.
- Keep motion short: about 120-260 ms for feedback and up to about 420 ms for first section reveal.
- Prefer native CSS/JS: View Transition API for the right detail panel, CSS transitions for cards, IntersectionObserver for one-time section reveal.
- Add pointer-follow gloss only as a low-opacity surface highlight on cards or heatmap cells.
- Respect `prefers-reduced-motion`.
- Do not add Three.js, WebGL, looping particles, loud glow, bouncing, parallax, or persistent animation unless explicitly requested and visually checked.
- Do not animate text content in a way that makes reading slower.

## Generation Steps

1. Read the handoff block and source report.
2. Search local country platforms, category retailers, vertical media, price comparison sites, creator profiles, and local-language terms.
3. Resolve price and margin evidence using the Price And Margin Evidence Gate.
4. Prepare local assets using the Asset Gate. Keep an asset-source note for each image. Use labeled placeholders when images are unavailable.
5. Fill a single `DATA` object. Do not scatter insight text across UI.
6. Use the template sections without turning the first screen into a landing page.
7. Keep current language aligned to the user's language.
8. Render missing or weak data as `Needs data`, `Needs test`, or `Hypothesis`.
9. Keep IDs readable in UI: show `T01 Search BP capture`, `D18 比价/价格敏感`, not naked ID lists.
10. Verify all interactive entities can update the right detail panel.

## Quality Gate

- One source of truth named `DATA`.
- Product price uses a country-local source. If unavailable, the dashboard says so and requests user input.
- Unit margin and ROI use the stated gross-margin assumption and named exchange-rate source when currencies differ.
- Main platforms have local logos or labeled placeholders.
- The relationship graph includes the Message layer.
- The message matrix has at least one row for each budgeted platform.
- Every message row has what to say and what to avoid.
- Local platforms have country/category/selling-point selection rationale.
- KOL rows have profile URL, fee logic, required verification, avatar, logo IDs, and avatar/logo source or a clearly labeled placeholder.
- Heatmap columns show readable audience labels in the user's language, not only naked D codes.
- Long message rows use a readable brief-card layout.
- The left nav is white or near-white and active state follows click/scroll.
- The background is calm, static, and does not consume GPU memory for decoration.
- Relationship graph is readable at normal 100% browser zoom.
- Message proof blocks and KOL cards do not overflow in narrower windows.
- Every named competitor comparison has comparison intent, proof, review, and measurement.
- Heatmap cells are clickable.
- Budget rows are clickable.
- Treatment cards are clickable.
- Right detail panel changes after selection.
- Script passes a JavaScript syntax check.
- `node assets/validate-dashboard.mjs <file>` reports 0 errors.
- Scan for banned slop phrases before delivery.

## Recommended File Name

For examples:

`examples/product-country-interactive-dashboard.html`

For outputs:

`outputs/YYYY-MM-DD-product-country-interactive-dashboard.html`
