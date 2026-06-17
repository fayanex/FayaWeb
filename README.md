# Fayanex Ventures — Website

Corporate website for **Fayanex Ventures LLP**, a deep-tech industrial machinery company.
Built with Next.js (static export), Tailwind CSS and Framer Motion. Chrome-on-black
identity derived from the Fayanex logo.

---

## 1. What's inside

```
src/app/            Pages: home, technology, products, about, team, contact
src/components/     Nav, Footer, Hero, Reveal, WovenThreads, TechProcess, ContactForm, ...
public/             Logo, favicon, founder photos
next.config.js      Static export config (output: 'export')
```

The site builds to a folder of plain static files (`out/`) — no running server needed.

---

## 2. Run it locally

Requires **Node.js 18.18+** (or 20+).

```bash
npm install
npm run dev          # http://localhost:3000
```

To produce the deployable static files:

```bash
npm run build        # outputs to the "out/" folder
```

---

## 3. Contact form -> Google Sheet

Clicking **Send Message** appends a row (with timestamp) to a Google Sheet.
Full steps are in **SETUP.md**; the script to paste is **APPS_SCRIPT.gs**. In short:
create a sheet, paste the Apps Script, deploy it as a Web app, and put the resulting
`/exec` URL into `src/config.js` (or the `NEXT_PUBLIC_SHEET_ENDPOINT` env var).
Until a URL is set, the form falls back to opening the visitor's email app.


## 4. Push to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit: Fayanex website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`node_modules`, `.next` and `out` are already excluded via `.gitignore`.

---

## 5. Deploy on Hostinger as a Node.js application (Business plan)

This project runs as a real Node.js app: `npm run build` generates the static
site into `out/`, and `server.js` (Express) serves it on the port Hostinger
assigns. That's what keeps it from showing a 503.

1. hPanel → your website → **Advanced → Node.js** → **Create application**.
2. Set:
   - **Application root:** the folder containing this project (where `package.json` is)
   - **Application startup file:** `server.js`
   - **Node version:** 18 or 20
   - **Application URL:** your domain
3. Add the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (see step 3 above).
4. Click **Run npm install**.
5. Run the build once: in the app's **NPM scripts**/**Run command** area (or the
   terminal), run `npm run build`. This creates the `out/` folder the server needs.
6. **Start / Restart** the application.

Your domain now serves the site through Node. After any future change, push to
GitHub (or upload), then `npm run build` + restart.

> Important: the app needs the `out/` folder to exist, which `npm run build`
> creates. If you ever see a 503, it almost always means the build step hasn't
> been run yet, or the startup file isn't set to `server.js`.

### Alternative — serve as plain static files (no Node)

If you'd rather not run a Node process: run `npm run build` and upload the
**contents** of `out/` into `public_html` via File Manager. The provided
`fayanex-build.zip` is exactly that.

---

## 6. Editing content

- **Founder bios** — `src/app/team/page.js` (marked as placeholders; replace the `bio` lines).
- **Logo** — replace `public/fayanex-logo.png` (hero) and `public/fayanex-logo-sm.png` (nav).
- **Copy / headings** — each page lives in `src/app/<page>/page.js`.
- **Colors** — defined in `tailwind.config.js` and `src/app/globals.css` (`:root`).

---

© Fayanex Ventures LLP · Mysore, India
