# Fayanex — Contact form to Google Sheet: setup

Clicking **Send Message** appends a row to your Google Sheet with a timestamp.
Five steps, ~5 minutes. The only part only you can do is creating the Google
deployment (it needs your Google login).

## 1. Create the sheet
New Google Sheet. In row 1 add these headers:

`Timestamp` | `Name` | `Email` | `Company` | `Message`

## 2. Add the script
In the sheet: **Extensions → Apps Script**. Delete the sample code and paste the
contents of **APPS_SCRIPT.gs** (in this project). Save.

## 3. Deploy it
**Deploy → New deployment → Web app.**
- Execute as: **Me**
- Who has access: **Anyone**

Authorize when prompted. Copy the **Web app URL** (ends in `/exec`).

## 4. Tell the site the URL
Open **src/config.js** and paste your URL:

```js
export const SHEET_ENDPOINT =
  process.env.NEXT_PUBLIC_SHEET_ENDPOINT ||
  'https://script.google.com/macros/s/XXXX/exec';   // <- your /exec URL
```

(Or, instead of editing the file, set `NEXT_PUBLIC_SHEET_ENDPOINT` to that URL in
Hostinger's environment settings.)

## 5. Build & deploy
On Hostinger: **Run npm install** → run **`npm run build`** → **Restart** the app.

Done. Submit a test from the live site and confirm a new row appears in the sheet
(and an email arrives, if you kept the optional email line in the script).

---

### Notes
- The form sends in "no-cors" mode — the reliable way to reach Apps Script from a
  static site. The browser can't read the reply, so the form shows "sent" once the
  request completes; the optional email is your confirmation it's landing.
- Updating the script later: **Manage deployments → edit → Version: New version**,
  so the same `/exec` URL keeps working.
- Until a URL is set, the form falls back to opening the visitor's email app, so no
  message is ever lost.
