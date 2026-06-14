/*
 * Production server for Hostinger (Node.js app).
 *
 * `npm run build` generates a static site in ./out (next.config.js has
 * output: 'export'). This Express process simply serves that folder on
 * process.env.PORT, so the site runs as a genuine Node.js application.
 *
 * Order on the server is always: install -> build -> start.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const OUT_DIR = path.join(__dirname, 'out');

if (!fs.existsSync(OUT_DIR)) {
  console.error(
    '\n[fayanex] Build output "out/" not found.\n' +
      '          Run `npm run build` before starting the server.\n'
  );
  process.exit(1);
}

// Long-cache the immutable Next.js asset bundles.
app.use(
  '/_next/static',
  express.static(path.join(OUT_DIR, '_next', 'static'), {
    immutable: true,
    maxAge: '1y',
  })
);

// Serve the exported site. trailingSlash:true means directory requests
// resolve to <dir>/index.html; serve-static redirects "/about" -> "/about/".
app.use(
  express.static(OUT_DIR, {
    extensions: ['html'],
    index: 'index.html',
  })
);

// Clean-URL fallback + custom 404.
app.use((req, res) => {
  const candidate = path.join(OUT_DIR, req.path, 'index.html');
  if (req.path.indexOf('..') === -1 && fs.existsSync(candidate)) {
    return res.sendFile(candidate);
  }
  const notFound = path.join(OUT_DIR, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  return res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`[fayanex] Serving ./out on http://localhost:${PORT}`);
});
