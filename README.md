# CGN Hubs

Two websites for the Just Food **Community Gardening Network (CGN)**, maintained by Nadia Rangira.

- **Internal Hub** — `CGN_Hub.html` — Nadia + Kate's shared workspace (currently live via Google Apps Script).
- **Public Community Hub** — `CGN_Community_Hub.html` — bilingual public site, **test build only**, not yet published anywhere.

**Nothing goes external without Kate's review.** For full background, see [docs/HANDOVER_README.md](docs/HANDOVER_README.md).

---

## Rebuild the public Hub

Both commands run from this folder:

```bash
python3 source/comm_content.py     # only if you edited content in comm_content.py
python3 source/build_comm.py       # always — rewrites CGN_Community_Hub.html
```

After it runs, double-click `CGN_Community_Hub.html` to open it in your browser.

The build keeps a one-time backup called `CGN_Community_Hub.prev.html` so you can compare before/after. Safe to delete after you've looked.

---

## What lives where

| Path | What it is |
|---|---|
| `CGN_Hub.html` | Internal Hub (hand-edited; also the source of CSS + hero + sidebar-art for the public Hub) |
| `CGN_Community_Hub.html` | Public Hub — **generated** by `source/build_comm.py` |
| `source/comm_tpl.html` | Page shell for the public Hub |
| `source/comm_extra.css` | Extra CSS layered on top of the internal Hub's styles |
| `source/comm_content.py` | Info pages (About, Find a Garden, …) + resource list — edit this to add resources or change page copy |
| `source/comm_pages.json` | Generated from `comm_content.py` — don't edit by hand |
| `source/build_comm.py` | The build script |
| `assets/` | Workshop posters (W1–W5) referenced by the Hubs |
| `docs/` | Design notes, setup guides, handover, email drafts |

The **workshop list, events calendar, and articles** currently live inside `CGN_Community_Hub.html` itself in a `const HUB = {…}` block. Moving that out into a plain JSON file is the next planned step.

---

## Ground rules

Short version — see [docs/HANDOVER_README.md](docs/HANDOVER_README.md) for the full list:

1. Public-facing content is drafted, reviewed by Kate, **then** published.
2. Don't invent facts (dates, URLs, French wording). Flag anything uncertain.
3. Bilingual EN/FR for the public Hub is a funding requirement. French text is draft until a French speaker reviews.
4. The site must stay maintainable by a non-developer. Keep edits to one data file wherever possible.
5. Plain language, gender-neutral, professional tone.
6. No personal data stored unless someone types it into the contact form.

---

## Status (Nov 11, 2026)

- Build runs locally from this folder (no more Cowork sandbox paths).
- Latest rebuild is byte-identical to the previous `CGN_Community_Hub.html`.
- Engagement tracking: **off** (`BACKEND_URL=''`). Slides placeholders say "Slides coming soon". Articles list is empty.
- Open questions (ownership, hosting, French reviewer, address 2389 vs 2391, land acknowledgement wording, Kate-approved calendar dates) are listed in [docs/HANDOVER_README.md](docs/HANDOVER_README.md) §6.
