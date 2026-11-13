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
| `CGN_Internal_Hub.html` | Nadia's internal Hub (hand-edited; also the source of the base CSS for the public Hub) |
| `CGN_Hub.html` | Public CGN Hub — **generated** by `source/build_comm.py` (`CGN_Community_Hub.html` is only a redirect) |
| `content/hub.json` | **Edit this weekly.** Workshops, series, articles, events (calendar). Plain JSON. |
| `source/comm_tpl.html` | Page shell for the public Hub |
| `source/comm_extra.css` | Extra CSS layered on top of the internal Hub's styles |
| `source/comm_content.py` | Info pages (About, Find a Garden, …) + resource list — edit this to add resources or change page copy |
| `source/comm_pages.json` | Generated from `comm_content.py` — don't edit by hand |
| `source/build_comm.py` | The build script |
| `assets/` | Workshop posters (W1–W5) referenced by the Hubs |
| `docs/` | Design notes, setup guides, handover, email drafts |

### Editing content

| To change… | Edit this file | Then run |
|---|---|---|
| A workshop (slides, poster, description, date) | `content/hub.json` | `python3 source/build_comm.py` |
| The calendar (events, deadlines) | `content/hub.json` (`events` list) | `python3 source/build_comm.py` |
| Article of the Week | `content/hub.json` (`articles` list) | `python3 source/build_comm.py` |
| A resource link, or page copy (About, Find a Garden…) | `source/comm_content.py` | `python3 source/comm_content.py && python3 source/build_comm.py` |

---

## Look and feel: the cozy secret garden

The public Hub wears a "cozy game" skin: wooden signboards, parchment, a chalkboard almanac, a watercolour sky with drifting clouds, and garden cut-outs from Nadia's Canva inspiration board. It is a skin only: pages, sidebar and features are unchanged underneath.

| To change… | Edit | Notes |
|---|---|---|
| Colours, fonts, signboard and plank styles | `source/garden_theme.css` | Loaded last, so it wins over older styles |
| Welcome banner, almanac, incident form | `source/garden.js` | Injected by the build |
| This month's garden jobs and veggie notes | `content/hub.json` → `"almanac"` | One entry per month, EN + FR; adapted from the CGN Garden Guide |
| Pictures (bee, clouds, critters…) | `assets/garden/` | Keep the same file names to swap an image |
| Welcome garden picture and the flower border | `assets/garden/garden-scene.webp`, `assets/garden/garden-border.webp` | Each is one composed illustration (barn, greenhouse, shed, pond, beds, flowers, critters arranged into a single garden), not separate stickers. Replace the file to change it |
| Sidebar, page-title and home-tile icons | `source/garden.js` → `G_ICO` | A small hand-drawn icon set in CGN colours (replaces emoji). One entry per page |

- **Garden almanac:** season, frost nights, rain and warmest day come live from [Open-Meteo](https://open-meteo.com/) (free, no account, no visitor data sent beyond a normal web request). If it cannot load, the tiles say so and link to Environment Canada.
- **Sky:** changes with the visitor's clock (dawn, day, dusk, night). Add `?sky=dusk` (or `dawn`, `day`, `night`) to the address to preview one.
- **Incident report page:** an example built from Just Food's EN and FR incident templates. It does not send or store anything yet; Kate decides where reports should go before it is switched on.
- **Re-making the garden pictures:** the working files (cut-outs and the `compose.py` script that arranges them) are in `art-source/` on Nadia's computer only. They are deliberately not uploaded to GitHub. To rebuild both pictures: `python3 art-source/compose.py art-source .` (needs the Pillow library).
- **Before going public:** confirm the Canva elements in `assets/garden/` are covered by Just Food's Canva licence for website use.

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
- Workshops, series, articles, and events now live in `content/hub.json` (not buried in HTML).
- Latest rebuild is byte-identical to the previous `CGN_Community_Hub.html`.
- Engagement tracking: **off** (`BACKEND_URL=''`). Slides placeholders say "Slides coming soon". Articles list is empty.

### Resolved (Nov 11, 2026)

1. **Address 2389 vs 2391 Pépin Court** — both correct. 2389 is the farmhouse, JF's office, and JF's mailing address. 2391 is the Barn (catering kitchen, workshop venue). Use 2389 for contact/mailing; 2391 for in-person workshop venues.
2. **Hosting for the sandbox** — GitHub (repo on github.com; viewable via GitHub Pages once pushed). Whether the Hub ultimately lives as part of justfood.ca (WordPress or embed) is a separate question for later, when Kate is ready to adopt it.
3. **Calendar dates** — not needed yet. Nothing goes in `events` until Kate signs off.
4. **Slides for W1–W4** — Nadia will upload these herself.

### Still open — for Kate / Nadia to answer

- **French reviewer** for public-facing FR text (funding requirement). Workshop descriptions are English only; About / Find a Garden / Start a Garden / FAQ have draft FR that needs review.
- **Land acknowledgement** wording for the public Hub. Approved W1 wording is "on whose unceded territory we garden" (Algonquin Anishinaabe) but a canonical JF version is not confirmed.
- **Frost-date table** source — current public averages. Kate to confirm preferred source or wording.
- **Coordinator "coming soon" tool cards** — placeholders on the For Coordinators page. Nothing promised publicly until Kate approves.
- **Private Engagement Coordinator space** on the internal Hub — design decision pending.
- **Google account ownership** — JF already owns the Google account; using it needs Kate's permission (Apps Script, Sheet, Drive folder for slides).
- **Slides follow-up email + weekly article blast** — drafts in [docs/CGN_Community_Hub_Emails_DRAFT.md](docs/CGN_Community_Hub_Emails_DRAFT.md). Kate to approve wording and sending list before anything is sent.

### Deferred

- **Embedding the Hub into justfood.ca** (WordPress or iframe) — revisit once Kate decides to adopt. Needs John (JF's IT contractor).
