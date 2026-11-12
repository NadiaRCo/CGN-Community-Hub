# CGN Hub — setup, updating and hand-over guide

The public CGN Hub is **one HTML file**: `CGN_Community_Hub.html`. It works by double-clicking it (test), and can be published through Google Apps Script the same way as the internal Hub. This is a **test build** — nothing here has been shared outside, and Kate should see it before any link goes to attendees.

## What it does
- Workshops page: posters, full approved descriptions, **Download slides** buttons, recording link; upcoming workshops show Register / waitlist instead.
- Resource library (search + tags), Article of the Week page, "Suggest a topic" form.
- English / French toggle (the interface is bilingual; workshop descriptions are in the language they were approved in — French versions still need translating and Kate's review, a funding requirement).
- Engagement tracking: every slide download, resource click, article click and topic suggestion is logged to a Google Sheet. Links in follow-up emails carry `?src=W3` (the workshop ID) so you can see which workshop the visitor came from, and the home page greets them with that workshop's slides.

## 1. Add slides to a workshop (5 minutes)
1. Upload the slides (PDF is best) to the CGN Drive folder. Share: **Anyone with the link → Viewer**.
2. Copy the file ID from the link (`drive.google.com/file/d/`**FILE_ID**`/view`).
3. Open `CGN_Community_Hub.html` in a text editor, find the workshop in `const HUB = {...}` and fill `slides`:
   `"slides":[{"label":"Slides (PDF)","label_fr":"Diapositives (PDF)","url":"https://drive.google.com/uc?export=download&id=FILE_ID"}]`
4. Save, republish (step 3 below).

## 2. Turn on engagement tracking (10 minutes)
1. Create a Google Sheet **CGN Hub — Engagement** (in the CGN drive).
2. Extensions → Apps Script → paste the code below → save → Deploy → New deployment → Web app → Execute as **Me**, access **Anyone** → copy the URL.
3. Paste the URL into `const BACKEND_URL = '';` at the top of the script in the HTML.

```javascript
function doPost(e){
  var p=(e&&e.parameter)||{};
  var ss=SpreadsheetApp.getActive(), sh=ss.getSheetByName('Log');
  if(!sh){sh=ss.insertSheet('Log');sh.appendRow(['When','Source workshop','Event','Page','Detail']);}
  sh.appendRow([new Date(),p.section||'',p.type||'',p.page||'',String(p.text||'').slice(0,500)]);
  if(p.type==='topic'){ MailApp.sendEmail(Session.getEffectiveUser().getEmail(),'CGN Hub — new topic idea',p.text); }
  return ContentService.createTextOutput('ok');
}
```
Events logged: `view` (page / description / article), `download` (slides, resources), `topic`. Count downloads per workshop with a pivot table on the Log sheet. No names or emails are stored unless someone types them into the topic form — add a one-line privacy note on the page before sharing widely.

## 3. Publish
Same routine as the internal Hub: Apps Script project → add the HTML as `hub.html` → deploy a new version (Anyone access). Posters are already embedded in the file, so nothing else needs hosting.

## 4. Weekly rhythm (about 30 minutes)
1. Pick the article of the week; add it to `"articles"` at the **top** of the list: `{"title":"…","title_fr":"","author":"Rob Danforth","date":"2026-11-18","blurb":"One-line why it matters","url":"https://…"}`.
2. Republish. 3. Send the newsletter blast (draft in `CGN_Community_Hub_Emails_DRAFT.md`) with the "suggest a topic" link. 4. Glance at the Log sheet.

## 5. Continuity — if someone else takes this over
- Everything lives in three places: the HTML file, the Engagement Sheet + Apps Script, and the Drive slides folder. Keep all three in the CGN shared drive owned by Just Food, not a personal account.
- Anyone who can edit a text file can update it: only the `HUB` data block and `BACKEND_URL` change week to week.
- If Just Food moves to WordPress later, the same content (posters, descriptions, slide links, article list) copies across directly.
- Ask Kate which Just Food Google account should own the script.

## 6. Calendar
The home-page calendar shows every workshop automatically (from its `date`). To add other dates, add items to `"events"` in the `HUB` block:
`{"date":"2027-02-27","title":"Eco Farm Day","time":"All day","where":"Just Food Community Farm","url":"https://…","type":"event"}` — `type` can be `event`, `deadline` or `coffee` (colours differ). Only add public dates that Kate has approved.
