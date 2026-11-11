# CGN Hub Backend — Setup Guide (10 minutes, no coding)

The Hub's "server" is a **Google Apps Script** attached to a Google Sheet in your Drive.
Every comment or answer left on the Hub → appears as a row in the Sheet (your archive) → and emails you instantly.

---

## Step 1 — Create the Sheet
1. In Google Drive, create a new Google Sheet named: **CGN Hub — Comments**
2. That's it — the script fills in the columns automatically.

## Step 2 — Add the script
1. In the Sheet: **Extensions → Apps Script**
2. Delete whatever is in the editor, and paste ALL of this:

```javascript
const NOTIFY_EMAIL = 'nadiarangira@gmail.com';

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName('Comments');
  if (!sh) {
    sh = ss.insertSheet('Comments');
    sh.appendRow(['When', 'Author', 'Type', 'Page', 'Section', 'Text']);
  }
  return sh;
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  sheet_().appendRow([new Date(), p.author || '', p.type || 'comment', p.page || '', p.section || '', p.text || '']);
  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '🌻 CGN Hub — new ' + (p.type || 'comment') + ' from ' + (p.author || 'someone'),
      body: 'Page: ' + (p.page || '') + '\nSection: ' + (p.section || '') + '\n\n"' + (p.text || '') + '"\n\n— sent automatically by the CGN Hub'
    });
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  const vals = sheet_().getDataRange().getValues();
  const rows = vals.slice(1).slice(-30).reverse().map(function(r) {
    return {
      when: Utilities.formatDate(new Date(r[0]), Session.getScriptTimeZone(), 'MMM d, h:mm a'),
      author: r[1], type: r[2], page: r[3], section: r[4], text: r[5]
    };
  });
  const json = JSON.stringify(rows);
  const out = p.callback ? p.callback + '(' + json + ')' : json;
  return ContentService.createTextOutput(out)
    .setMimeType(p.callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}
```

3. Click 💾 (save), name the project **CGN Hub Backend**.

## Step 3 — Deploy it
1. Click **Deploy → New deployment**
2. Gear icon ⚙️ → select type: **Web app**
3. Settings:
   - Description: `CGN Hub comments`
   - Execute as: **Me**
   - Who has access: **Anyone**  ← important (this is what lets the Hub file talk to it; the URL is unguessable)
4. Click **Deploy** → **Authorize access** → choose your Google account → Advanced → Go to CGN Hub Backend → Allow
5. **Copy the Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`)

## Step 4 — Paste the URL into the Hub
1. Open `CGN_Hub.html` in a text editor (or ask Claude to do it)
2. Find the line near the bottom:
   `let BACKEND_URL = 'PASTE_APPS_SCRIPT_URL_HERE';`
3. Replace the placeholder with your copied URL (keep the quotes)
4. Do the same in `CGN_Community_Hub_TEST.html` if using the test page
5. Save. Done! 🎉

## Step 5 — Test
- Open the Hub → 💬 Comment → leave a comment anywhere → click away
- Within seconds: a new row in the Sheet + an email in your inbox 💌
- Kate answering a question box works the same way

---

## 🌐 PART 2 — Host the Hub as a real website (Apps Script, ~15 min)

This gives Kate ONE LINK — no downloads, no copies. The link always shows the latest published version.

### Step 1 — Create a second Apps Script project
1. Go to **script.google.com** → **New project** (standalone — NOT inside the comments Sheet)
2. Name it: **CGN Hub Site**

### Step 2 — The serving code
Replace the editor contents with exactly this:

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('hub')
    .setTitle('CGN Hub 🌻')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

### Step 3 — Add the Hub page
1. In the Apps Script editor: **+ (Files) → HTML** → name it exactly: **hub** (it will show as `hub.html` — the name must match or you'll get "No HTML file named hub was found")
2. Delete the default contents of hub.html
3. **Get the Hub's real source code — ⚠️ don't copy from TextEdit!** (Mac TextEdit displays HTML as a formatted page, so copying gives you the visible text, not the code.) The reliable way:
   - Open `CGN_Hub.html` in **Chrome**
   - Press **⌘ + Option + U** (View Source)
   - **⌘A** → **⌘C** to copy all the code
4. Paste into the Apps Script **hub.html** file → check the first line is `<!DOCTYPE html>` and the last is `</html>` → Save

### Step 4 — Deploy
1. **Deploy → New deployment → Web app**
2. Execute as: **Me** · Who has access: **Anyone** *(or "Anyone with a Google account" for tighter access — Kate signs into Google first; recommended for internal content)*
3. Deploy → copy the Web app URL → **that's Kate's link!** 🎉
4. Optional: put the link in LinkTree/bookmark so nobody types it.

### Publishing updates (the 2-minute routine)
1. Nadia + Claude update the master `CGN_Hub.html` as usual
2. Open the CGN Hub Site project → hub.html → Select All → paste the new version → Save
3. **Deploy → Manage deployments → ✏️ (edit) → Version: New version → Deploy**
4. Same URL, new content. Kate never does anything.

### Good to know
- Visitors on the hosted link land in **review mode automatically** (no role question) — comments and answer boxes work, admin buttons hidden. The 🎨 theme and font selectors stay visible so Kate can pick her own vibe.
- The 💌 send buttons still deliver to the comments Sheet + your email — both Apps Scripts work together.
- Nadia keeps editing in the local master file (workspace folder); the hosted site is the published view. Clean frontend/backend split.

### ⚠️ Before you paste — final checklist (updated Jul 31)
1. **Copy the CURRENT master** — open `CGN_Hub.html` in a text editor fresh (it changed a lot today: themes, Email button, toolkit pages, Kate's Corner rework). Select All → Copy → paste into the script's `hub.html` file, replacing everything.
2. **Access setting:** for internal content, "**Anyone with a Google account**" is the safer choice — Kate signs into Google once and it keeps random passers-by out. ("Anyone" also works if sign-in proves annoying.)
3. **Test as Kate before sending:** open the deployed link in an Incognito window — you should land in review mode (no Edit/Save buttons). Try: expand a deliverable · type in a green answer box · hit 💌 Send · check the Sheet + your inbox · switch a theme 🎨.

### Known quirks on the hosted version (all minor)
- **Local file links won't work there.** Links that point to files in the workspace folder — the classic Toolkit HTML (Quick Reference page), the final W4 newsletter HTML, the classification .xlsx, the old .md docs — will 404 on the hosted site, because those files live on Nadia's computer. All the Google Sheets / Drive / Canva links work perfectly. **Fix when convenient:** upload those few files to the CGN Drive and swap the links in the master, then republish. Not a blocker for Kate's review.
- **✉️ Email Nadia / 🔔 buttons:** inside the hosted page these may open a blank tab before the email window, depending on browser — normal for embedded apps.
- **Edits Kate makes on the hosted page** (answer boxes, comments) live in her browser + flow to the Sheet — but they don't change the published page itself. The Sheet + email is the record; the master file stays yours. (This is the intended design.)

---

## 🔔 Optional upgrade — notify other people too (backend v2)

The current script emails only NOTIFY_EMAIL. To let the Hub also ping Kate (or others) on demand, replace the `doPost` in the COMMENTS script with:

```javascript
function doPost(e) {
  const p = (e && e.parameter) || {};
  sheet_().appendRow([new Date(), p.author || '', p.type || 'comment', p.page || '', p.section || '', p.text || '']);
  const ALLOWED = [NOTIFY_EMAIL /*, 'kate@... — add approved recipients here'*/];
  const to = (p.notify_to && ALLOWED.indexOf(p.notify_to) >= 0) ? p.notify_to : NOTIFY_EMAIL;
  try {
    MailApp.sendEmail({
      to: to,
      subject: '🌻 CGN Hub — new ' + (p.type || 'comment') + ' from ' + (p.author || 'someone'),
      body: 'Page: ' + (p.page || '') + '\nSection: ' + (p.section || '') + '\n\n"' + (p.text || '') + '"\n\n— sent automatically by the CGN Hub'
    });
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}
```
Then: Deploy → Manage deployments → ✏️ → New version → Deploy. (Until then, the Hub's 🔔 notify Kate button opens a prefilled email from your own mailbox — works today, no redeploy needed.)

---

### Notes
- **Privacy:** the URL is effectively a secret key — anyone with it can post a comment (not read the Sheet's other data). Only share the Hub file internally. Never put logins/passwords in comments.
- **Changing the notification email:** edit `NOTIFY_EMAIL` at the top of the script and re-deploy (Deploy → Manage deployments → ✏️ → Version: New → Deploy).
- **The archive:** the Sheet IS your comment archive — sortable, searchable, permanent, in JF's Drive.
- **Live board:** the test page's "Community Board" reads the last 30 comments straight from the Sheet.
