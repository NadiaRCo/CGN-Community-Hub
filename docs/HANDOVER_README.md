# Handover to Claude Code — CGN Hubs (Nadia's CGN Hub + CGN Hub)

**From:** Claude (Cowork) · **For:** Claude Code, in the Just Food (JF) project · **Date:** Nov 11, 2026
**Owner / user:** Nadia Rangira, CGN Engagement Coordinator, Just Food Ottawa. **Supervisor:** Kate Veinot. **ED:** Moe Garahan.

> Read this whole note first. It says what exists, what we want, what must not be done, and what to build first. Cowork stays reserved for Nadia's day-to-day JF work; these two websites move to Code.

---

## 0. Ground rules (non-negotiable)
1. **Nothing external goes out without Kate's review.** Just Food is an NGO; public-facing content (the CGN Hub, emails, social posts) is drafted, reviewed by Kate, then published. Never send emails, post, or publish a site live yourself. Produce drafts and test builds.
2. **Don't invent facts.** If something is unknown (dates, URLs, names, French wording), flag it. Every JF link in this note was fetched from justfood.ca on Nov 11, 2026; re-verify before relying on them.
3. **Bilingual EN/FR is a funding requirement** for the public Hub. French text so far is a *draft* needing a French speaker's review.
4. **Continuity.** Nadia may not hold this role long (contract/funding through 2027; she may leave ~Nov 2027 or earlier). The site must be maintainable by a non-developer: one data file to edit, a beginner-friendly maintenance guide, owned by a Just Food Google account — not Nadia's personal one.
5. Plain language, gender-neutral, professional tone; respond-in-48-hours culture for enquiries; use "Thank you for your patience" not "I'm sorry" in external copy.
6. Keep personal data minimal: no names/emails stored unless a visitor types them into the contact form.

---

## 1. Context: what the CGN is
The **Community Gardening Network (CGN)** (est. 1997; at Just Food since 2006) supports community gardening across Algonquin land/Ottawa: it helps start gardens, supports existing gardens and their coordinators, funds gardens (Community Garden Development Fund, CGDF), runs workshops, newsletters, events, signs, soil-testing support, FoodChat (online discussion for coordinators), shared tools, and a garden map. Contact: communitygardening@justfood.ca · 613-824-7771 · Just Food Community Farm, 2389 Pépin Court, Ottawa K1B 4Z3 (*see Open Issues: some internal docs say 2391*).

**Audiences:** (a) general gardeners and the public, (b) garden coordinators (a distinct audience; some messages are coordinator-only), (c) new-garden groups, (d) funders/partners (indirectly), (e) Nadia and Kate internally.

**Nadia's role (why these sites exist):** Since July 2026 Nadia is, in practice, the CGN's day-to-day coordinator: she owns the CGN inbox and voicemail, visits and reaches out to gardens, runs garden-sign design/confirmation/printing/pick-up, sends the annual evaluation surveys, runs workshops (Zoom and in person), and supports events (Fall Farm Fest, New Farmer Gathering, Eco Farm Day Feb 27 2027, Seedy Saturday, SeedLing Saturday). Kate (director, very busy) wants low-maintenance tools.

---

## 2. The two sites

### 2A. Nadia's CGN Hub — INTERNAL workspace (`CGN_Hub.html`, ~320 KB, single file)
**What it is:** A single-file HTML app (retro farm theme: cream/sun-yellow/tulips, Fredoka + Nunito fonts) that replaced Nadia's running Google Doc. Kate and Nadia use it to track work. **Currently live** via Google Apps Script web app on the JF Google Workspace sign-in (Kate reviews it there). Publish routine today: edit local master → paste into Apps Script `hub.html` → deploy new version.

**Pages (sidebar):** Home · Kate's Corner (items for Kate's review, questions, how-to) · Nadia's To-Do List (weekly update, "My Desk Today") · **Engagement Coordinator** (My Role, Milestones, Expectations & Rhythm, Garden Touchpoints tracker, Playbook with Kate's advice + research with sources, Support & Asks) · CGN Workshops (Upcoming with per-workshop workspace + checklist and status badges, Past gallery pointer, **Workshop ideas** brainstorm table) · CSJ Mandate Report (deliverables, workshops record with sign-up table and poster gallery, overview, the new chapter) · CGN Documents → single **All Documents** shelf that opens each guide as a page (Facilitation Toolkit, Zoom Guide, Barn Guide, Past CGN Workshops by series, Promotion & Emails with campaign calendar + template library, Quick Reference) · Archive.

**Features:** contenteditable edit mode (`data-edit`) with card reordering; built-in comment system (sticky notes per card) posting to a Google Apps Script backend that writes rows to a Sheet and emails Nadia (see `CGN_Hub_Backend_Setup.md`); "Kate's Corner" email buttons; font and colour-theme selectors; File System Access API **master-file autosave** (Nadia links the HTML once; Save writes to the same file); status badges (to do / ongoing / done, idea / shortlist / planned) stored in `localStorage`; countdown, archive-a-workshop button (moves a workshop into the Past gallery).
**Known quirks:** content restore from `localStorage` is disabled on purpose (the master HTML is the source of truth); several links are local files (`CGN_W1_Poster.png`, newsletter HTML) that 404 on the hosted version until swapped for Drive links or embedded; status/touchpoint data lives in each browser's `localStorage`, not shared.
**What we want it to become (private):** Nadia wants a **private** Engagement Coordinator space (role, brainstorms, tips) that Kate does *not* automatically see, while Kate keeps Kate's Corner and shared pages. → Needs a real split: shared vs private pages (auth or two builds). Also wants server-backed (shared) state instead of per-browser `localStorage`.

### 2B. CGN Hub — PUBLIC (`CGN_Community_Hub.html`, ~670 KB, single file, test build)
**What it is now:** a bilingual public site, same retro-farm look as 2A (CSS is copied from it), built from a template + data via `source/build_comm.py`. All content is data-driven (`HUB` and `PAGES` JSON blocks inside the file). Posters are embedded as base64 JPEGs so it is self-contained.
**Pages:** Home (hero, quick-start tiles, Article of the Week, month **calendar** of events/workshops, upcoming workshops) · About the CGN · Article of the Week · Gardens: Find a Garden, Start a Garden (7-step path), For Coordinators (offer + "coming soon" tool cards) · Gardening Guides (Garden Guide in 5 languages, recorded workshops, Ottawa season table) · CGN Workshops: Upcoming / Past (by series) / **Slides** (download buttons + tracking) · CGN Resources (29 tagged, searchable links) · FAQ · Contact the CGN (mailto form + phone/address + newsletter signup).
**Features that exist:** EN/FR toggle (persisted); colour + font themes; month calendar (workshops auto-added from data; extra `events` supported); per-workshop slide buttons; resource search/tag filter; engagement tracking hooks (`track()` → Apps Script POST: views, downloads, topic/contact); `?src=W3` links from follow-up emails greet visitors with that workshop's slides; skip/keyboard-friendly nav.
**Placeholders:** `BACKEND_URL=''` (tracking off); workshop `slides:[]` (buttons say "Slides coming soon"); `articles:[]` (empty-state).

**Why it exists (the vision):** (1) Kate set the Hub's mission on Jul 29, 2026: a **public CGN Resource Repository** — resources for gardeners and coordinators, plus facilitator training/onboarding modules; the idea of an e-magazine was dropped. Discussion for coordinators belongs on **FoodChat**, not here. (2) Nadia's own need: after each workshop, share slides with attendees (she has not yet sent slides for the four summer workshops) and **measure engagement** (who downloads what). (3) A weekly **Article of the Week** blast to the CGN list driving traffic back to the Hub, with a "suggest a topic" path (now "Contact the CGN"). (4) Rob Danforth (facilitator, writes many scattered articles) asked for a single resource repository — one place for what's scattered (OWSL, Rob's articles, CGN docs).

---

## 3. Desired features (prioritised for Code)
**P0 — make it real and safe**
1. Project setup: repo, content in JSON/Markdown (not buried in HTML), a build step that outputs (a) a static multi-page or single-page site and (b) an Apps Script-compatible single HTML file. Keep the retro-farm design system (extract CSS into a stylesheet/tokens).
2. **EN/FR properly:** full content parity, language in URL (`/fr/…`), `hreflang`, lang attribute, French review workflow. Where JF has a French page, link to it (URLs below).
3. **Hosting decision** implemented behind a config: Apps Script web app (current pattern) *or* GitHub Pages/Netlify/embed into JF's WordPress. Do not publish; produce a deployable build and instructions. Ask Nadia/Kate about WordPress (open).
4. **Engagement tracking backend** (Apps Script + Sheet, spec in `CGN_Community_Hub_Setup.md`) with a pivot/summary tab: downloads per workshop/resource, views, contact messages. Respect privacy (no IP/names; clear one-line notice).
5. **Slides library:** admin-friendly way to attach slides (Drive file IDs) to a workshop; direct-download links; optional "view" link; recording links; resource attachments.
6. Accessibility pass (WCAG 2.1 AA): contrast, focus order, alt text, labels, reduced motion, mobile layout.
**P1**
7. **Calendar:** month grid + agenda; add `.ics` export / "add to calendar"; optional import from a Google Calendar or Sheet (Kate-approved public events only).
8. **Article of the Week:** content model (title, author, source URL, blurb EN/FR, date, tags), archive page, RSS/JSON feed, and a generator for the weekly newsletter blurb (draft only).
9. Resource library as a proper database: tags, type, language, audience (gardener/coordinator), search, "recently added", link-checker script (CI) that flags dead links.
10. Workshop pages: dedicated URL per workshop (poster, description, facilitator, slides, recording, related resources), structured data (schema.org Event) for upcoming ones.
11. Contact form: keep mailto fallback; optionally a Sheet/Apps Script-backed form that also emails communitygardening@ (needs Kate OK); anti-spam.
12. Print styles; social sharing metadata (Open Graph).
**P2**
13. Coordinator area: templates (season checklist, gardener agreement, meeting agenda, safety/tricky situations flow), downloadable DOCX/PDF; "coordinator-only" content links to FoodChat (static pages can't gate; do not fake auth).
14. Garden directory (read from JF's garden map data if available, else link out) and "garden stories" page (consent-first).
15. Site search across all pages.
16. Admin/maintenance guide for a beginner (screenshots) + a minimal local "content editor" (form that edits the JSON) if feasible.
**Nadia's Hub (internal) tasks**
17. Split **shared vs private** pages (Engagement Coordinator private); decide mechanism (separate private build/Drive-restricted Apps Script, or simple client-side gate is NOT acceptable for sensitive notes).
18. Move per-browser `localStorage` state (statuses, touchpoints, ideas) to a shared store (Sheet) behind the existing Apps Script.
19. Replace local-file links with Drive/CDN links; fix the Save/publish routine (script to produce the Apps Script bundle).
20. Keep the Engagement Coordinator, CGN Workshops (checklists, ideas, archive) and Past Workshops pages working; do not lose Kate's Corner/comments.

---

## 4. Connection to the Just Food website
The Hub **complements** justfood.ca (WordPress/Elementor, EN site + French site at alimentationjuste.ca); it must link to the authoritative JF pages rather than duplicate them, and keep JF as the source of truth for processes and dates (City land process changed Jan 5, 2026; CGDF is rolling). Never copy JF text verbatim without crediting; adapted content is labelled "adapted from the Just Food website".

**Verified JF links (Nov 11, 2026)** — also in `source/comm_content.py` (`PAGES`, `RES`):
- CGN home: https://justfood.ca/community-gardening-network/ · About: …/about-the-cgn/ · FR: https://alimentationjuste.ca/reseau-de-jardinage-communautaire/a-propos-du-reseau-de-jardinage-communautaire/
- Start a garden: …/start-a-community-garden/ · FR: …/creer-un-jardin-communautaire/ · H2S workshop: …/how-to-start-a-community-garden-workshop/ · CGDF: …/community-garden-development-fund/ · New coordinators: …/cg-coordinators-resources/
- Find a garden: …/find-a-community-garden/ · Map: …/community-gardening-network-guide/ · Profiles: …/cgprofiles/
- Resources: …/gardening-resources/ · FR: …/ressources-de-jardinage/ · Garden Guide PDFs (EN/FR/ES/AR/ZH) under justfood.ca/wp-content/uploads/… · Pre-recorded workshops …/gardeningworkshops/ · Additional guides …/gardening-resources/additional-gardening-guides/ · Front yard edible …/gardening-resources/front-yard-edible-gardens/ · Accessible gardening …/accessible-gardening/ · Soil testing: https://justfood.ca/soil-testing-urban-impacted-soils/ and the Ottawa guide PDF · Urban ag specs: https://justfood.ca/urbanag/
- Seeds & events: Seed and Soil https://justfood.ca/seedandsoil/ · Seedy Saturday West …/seed-saving-projects-and-events/seedysaturdayottawa/ · SeedLing Saturday …/seedlingsaturday/ · Ottawa Seed Library Network …/seed-saving-projects-and-events/ottawa-seed-library-network-2/
- Workshops: https://justfood.ca/upcoming-workshops/ · registration listing justfood.ca/workshops · Newsletter signup https://mailchi.mp/justfood/newsletters · Plant-a-Row Share-a-Row …/about-the-cgn/plant-a-row-grow-a-row-donate-a-row/
- City: https://ottawa.ca/gardens · GeoOttawa https://maps.ottawa.ca/geoottawa/
- Contact: https://justfood.ca/contact/ · Donate https://justfood.ca/donate-to-just-food/

(…/ = https://justfood.ca/community-gardening-network/)
**Integration ideas for Code:** a nightly/CI **link checker** against this list; a small "JF links" config file so URLs live in one place; optional read-only fetch of JF's upcoming-workshops page to cross-check dates; an iframe/embed or "Hub" menu entry on justfood.ca (needs John, JF's IT contractor, and Kate); shared branding (JF brand reference in `JF_Brand_Guidelines_Reference.md`, if present, and the CGN logo shown on posters).

---

## 5. Content & data inventory (in this folder)
- `CGN_Hub.html` (internal), `CGN_Community_Hub.html` (public test build) — current outputs.
- `source/comm_tpl.html` (app template + JS), `source/comm_extra.css` (public-hub CSS; the rest is copied from the internal Hub's `<style>`), `source/comm_content.py` (generates `comm_pages.json`: info pages EN/FR + resource list), `source/build_comm.py` (assembler; **paths are hard-coded to the Cowork sandbox — rewrite**), `source/comm_pages.json`.
- `assets/` — posters W1–W4 (summer 2026), W5 Dry Fermentation (Nov 14, 2026) registration + "fully booked" versions.
- `CGN_Community_Hub_Setup.md` (tracking backend, slides, calendar, hand-over), `CGN_Community_Hub_Design_Notes.md` (research, why each page exists, sources, fill-in skeleton), `CGN_Community_Hub_Emails_DRAFT.md` (slides follow-up EN/FR, weekly article blast — drafts for Kate), `CGN_Hub_Backend_Setup.md` (comments backend).
- **Workshop data** (public): W1 Growing with the Land (Cynthia J. Benjamin, OWSL, Jul 8, 20 sign-ups) · W2 Container Gardening (Kate Veinot, Jul 13, 26) · W3 Troubleshooting the Organic Garden (Rob Danforth, COG, Jul 16, 28) · W4 Intensive Intercropping & Companion Planting (Cole Etherington, Jul 29) · W5 Hands-on Dry Fermentation (Li Bo, Chi Garden, Sat Nov 14, 2026, 1:00–2:30 PM, catering kitchen, barn, $15, 15 spots, fully booked + waitlist). Slides for W1–W4: **not yet provided** (Nadia will upload).
- Workshop structure for future: ~$10 PWYC (summer) / $15 with pay-it-forward spots (fall), weekday evenings ~7 pm on Zoom, honorarium agreed with Kate.

---

## 6. Open issues & decisions (ask Nadia; don't guess)
1. **Address:** JF website = 2389 Pépin Court; Nadia's Nov 14 confirmation email/Barn Guide template says 2391. Public Hub uses 2389. Nadia to confirm; fix whichever is wrong.
2. **Hosting & domain:** Apps Script (current) vs static host vs embed on JF's WordPress (Kate raised WordPress; JF IT contractor John). Nadia suggested WordPress "after November" if the test works.
3. **French:** needs a French speaker; also who maintains FR long-term.
4. **Land acknowledgement:** standard JF wording not yet confirmed (barn guide marks TBD). Do not invent; the approved W1 text includes: "on whose unceded territory we garden" (Algonquin Anishinaabe).
5. **Frost-date table** is from published averages; confirm preferred source with Kate.
6. **Calendar content:** only Kate-approved public dates (Seedy Saturday date, SeedLing Saturday 2027 date, Eco Farm Day Feb 27 2027 are unconfirmed for public listing).
7. **Coordinator "coming soon" tools** are unannounced; any coordinator workshop series (winter 2027 ideas live in the internal Hub) needs Kate's approval before appearing publicly.
8. **Private Engagement Coordinator space** design (see 2A).
9. **Ownership:** which JF Google account owns the Apps Script, Sheet and Drive folder.
10. Slides follow-up email and weekly blast: Kate to approve wording and sending list (Coordinators list and the public CGN newsletter list are **separate**; survey reminders are coordinator-only).

---

## 7. Suggested first session for Code (order of work)
1. Read this note, `CGN_Community_Hub_Design_Notes.md` and `CGN_Community_Hub_Setup.md`. Open both HTML files in a browser to see current behaviour.
2. Create the repo; port the CGN Hub to a data-driven structure (JSON/MD content, shared CSS tokens), reproducing the current look. Add tests: link checker, HTML validation, a11y check (axe), build reproducibility.
3. Implement the build outputs and the tracking backend; keep tracking off by default via config.
4. Wire slides (placeholder until Nadia uploads), calendar `.ics`, workshop detail pages, Article of the Week archive + feed.
5. Then tackle the internal Hub items (shared/private, shared state).
6. Write the beginner-friendly maintenance guide as you go. Report back to Nadia with a short plain-language summary and a list of questions from Section 6.

**Acceptance for the CGN Hub v1:** bilingual, mobile-friendly, WCAG-AA clean, all JF links verified, no console errors, tracking optional, content editable from one data file, builds to a single deployable bundle, and a Kate-reviewable preview link/zip. Nothing published without Kate.

## 8. Working with Nadia
Nadia is new to the role and to web development; she is learning JavaScript. Explain decisions in plain language, show screenshots, ask one short question at a time, and prefer small reviewable steps. She keeps a worklog per day in the JF project (Cowork); Code should leave a short summary she can paste there.
