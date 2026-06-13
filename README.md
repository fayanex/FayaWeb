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

### Option A — Connect the GitHub repo (recommended)

1. hPanel → your website → **Advanced → Node.js** (or **Git** → *Create a new app from a repository*).
2. Connect the GitHub repository and choose the `main` branch.
3. Set:
   - **Build command:** `npm run build`
   - **Output / public directory:** `out`
   - **Node version:** 18 or 20
4. Add the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (from step 3 above).
5. Deploy. Future `git push`es to `main` redeploy automatically.

### Option B — Upload the built files (simplest, no build on server)

1. Run `npm run build` locally.
2. Open hPanel → **File Manager** → `public_html`.
3. Upload everything **inside** the `out/` folder into `public_html`
   (the contents, not the folder itself).
4. Done — the site is live on your domain.

> A pre-built copy is provided as `fayanex-build.zip` for Option B. If you set up the
> Formspree ID, rebuild so the live form points at it (the pre-built copy uses the
> email fallback).

---

## 6. Editing content

- **Founder bios** — `src/app/team/page.js` (marked as placeholders; replace the `bio` lines).
- **Logo** — replace `public/fayanex-logo.png` (hero) and `public/fayanex-logo-sm.png` (nav).
- **Copy / headings** — each page lives in `src/app/<page>/page.js`.
- **Colors** — defined in `tailwind.config.js` and `src/app/globals.css` (`:root`).

---

© Fayanex Ventures LLP · Mysore, India
