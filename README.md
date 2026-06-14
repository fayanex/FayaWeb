# Fayanex Ventures — Website

Corporate website for **Fayanex Ventures LLP**, a deep-tech industrial machinery company.
Built with Next.js (static export), Tailwind CSS and Framer Motion. Chrome-on-black
identity derived from the Fayanex logo.

---

## 1. What's inside

```
src/app/            Pages: home, technology, products, about, team, contact
src/components/     Nav, Footer, Hero, MachineCutaway, ClosedVsLine, FeedbackLoop,
                    Roadmap, MysoreMap, TechProcess, Reveal, WovenThreads, ContactForm, ...
public/             Logo, favicon, founder photos
next.config.js      Static export config (output: 'export')
server.js           Express process that serves the built out/ folder
```

`npm run build` produces a static site in `out/`. `server.js` (Express) serves that
folder on `process.env.PORT`, so the site runs as a genuine Node.js application — which
is what Hostinger's Node.js hosting expects. (We don't use `next start`; it doesn't work
with `output: 'export'`.)

---

## 2. Run it locally

Requires **Node.js 18.18+** (or 20+).

```bash
npm install
npm run dev          # http://localhost:3000
```

To produce the deployable site and run it as the Node.js app (what Hostinger runs):

```bash
npm run build        # outputs the static site to the "out/" folder
npm start            # node server.js — serves out/ on $PORT (default 3000)
```

The order is always **install → build → start**. `server.js` exits with a clear message
if `out/` is missing (i.e. the build step was skipped).

---

## 3. Contact form (one-time setup)

The form uses **Formspree** (free) so it works on static hosting.

1. Create a free account at https://formspree.io and a new form that delivers to
   **contact@fayanex.com**.
2. Copy the form ID (the part after `/f/` in your endpoint).
3. Create a file named `.env.local` (copy from `.env.example`) and set:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```

4. Rebuild (`npm run build`). On Hostinger, add the same variable in the app's
   environment settings before building there.

Until an ID is set, the form gracefully falls back to opening the visitor's email
client addressed to contact@fayanex.com, so no message is ever lost.

---

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

## 5. Deploy on Hostinger (Business plan)

### Option A — Run it as a Node.js app (recommended, matches `server.js`)

1. hPanel → **Advanced → Node.js → Create application**.
2. Set:
   - **Application root:** the repo folder (must contain `package.json` and `server.js` at its top level).
   - **Application startup file:** `server.js`
   - **Node version:** 18 or 20
   - **Application URL:** your domain
3. Add the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (from step 3 above).
4. Run **npm install**.
5. Run **`npm run build` once** (NPM scripts / run-command / terminal) — this creates `out/`.
6. **Restart** the application.

The order is always **install → build → restart**.

> **503 troubleshooting:** almost always means `out/` doesn't exist (the build step was
> skipped) or the startup file isn't set to `server.js`. Re-run install → build → restart.

### Option B — Upload the built files (static, no Node process)

1. Run `npm run build` locally.
2. Open hPanel → **File Manager** → `public_html`.
3. Upload everything **inside** the `out/` folder into `public_html`
   (the contents, not the folder itself).
4. Done — the site is live on your domain. (No `server.js` needed for this route, since
   `out/` is plain static HTML.)

---

## 6. Editing content

- **Founder bios** — `src/app/team/page.js` (edit the `bio`, `role`, `degree` and `focus` fields).
- **Logo** — replace `public/fayanex-logo.png` (hero) and `public/fayanex-logo-sm.png` (nav).
- **Copy / headings** — each page lives in `src/app/<page>/page.js`.
- **Colors** — defined in `tailwind.config.js` and `src/app/globals.css` (`:root`).

---

© Fayanex Ventures LLP · Mysore, India
