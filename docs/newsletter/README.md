# CGN Hub — Mailchimp newsletter templates

Two ready-to-paste HTML emails that match the look of the CGN Hub. Both must be reviewed and approved by Kate before sending.

| File | For | Audience |
|---|---|---|
| `slides_followup.html` | Sending workshop slides to attendees after a workshop | Workshop attendees (per-workshop list) |
| `article_of_week.html` | Weekly "Article of the Week" blast driving traffic back to the Hub | Coordinators list **or** public CGN newsletter list (separate — pick before sending) |

## How to send one

1. Open the HTML file in a text editor (or GitHub). Find the `{{PLACEHOLDER}}` tags and replace them with the real values (workshop title, article URL, etc.). These are deliberately `{{curly}}` so they don't clash with Mailchimp's own `*|MERGE|*` tags.
2. Copy the full file contents.
3. In Mailchimp: **Create → Email → Classic Builder → "Code your own" → "Paste in code"**.
4. Paste. Set the subject line (the `<title>` in the file is a good starting point).
5. Pick the audience — **check twice** that you are using the right list. Coordinators and the public CGN newsletter are separate lists.
6. Send Kate a test so they can approve it. Only send when she says yes.

## What's already filled in for you

- CGN logo loads from `https://nadiarco.github.io/CGN-Community-Hub/assets/CGN_logo_icon.png` (the live public Hub). No upload to Mailchimp needed.
- Colours and fonts match the Hub: JF brand green (`#1A6B54`), mustard (`#FFD83F`), cream (`#FFFBE0`), brick red (`#80220F`).
- Slides follow-up includes a `?src={{WORKSHOP_ID}}` tag on the Hub link. Set `{{WORKSHOP_ID}}` to the workshop id (e.g. `W3`) and the Hub will greet the visitor with that workshop's slides at the top of the page.
- Mobile responsive (CSS media queries + 600px max width).
- Dark-mode-aware (Apple Mail, iOS).
- Preheader text already drafted (shows next to the subject in the inbox).

## Mailchimp merge tags used

| Tag | What it is |
|---|---|
| `*|FNAME|*` | Recipient's first name |
| `*|ARCHIVE|*` | "View in browser" link |
| `*|UNSUB|*` | One-click unsubscribe |
| `*|UPDATE_PROFILE|*` | Subscriber preferences |
| `*|LIST:COMPANY|*` | Set to "Just Food" in the list settings |
| `*|LIST:ADDRESSLINE|*` | Set to "Just Food Community Farm, 2389 Pépin Court, Ottawa K1B 4Z3" (uses 2389, the mailing address) |

## French versions

Not yet included — French wording is a funding requirement for public comms and needs a French speaker's review. Working EN drafts are in [`CGN_Community_Hub_Emails_DRAFT.md`](../CGN_Community_Hub_Emails_DRAFT.md).

## Preview before sending

Double-click either file to see the rendered email in a browser. The real Mailchimp preview (across clients) is more accurate — always send Kate a test from Mailchimp before the real campaign.
