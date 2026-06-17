// Fayanex Ventures — Node.js application server
// Serves the built static site (the "out" folder) as a proper Node process,
// listening on the port Hostinger assigns via process.env.PORT.

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const ROOT = path.join(__dirname, 'out');

// Serve all static assets; directory requests resolve to their index.html
app.use(
  express.static(ROOT, {
    extensions: ['html'],
    index: 'index.html',
    maxAge: '1h',
  })
);

// Fallback: handle clean URLs without a trailing slash (e.g. /about -> /about/index.html),
// then a custom 404 if nothing matches.
app.use((req, res) => {
  const candidate = path.join(ROOT, req.path, 'index.html');
  if (candidate.startsWith(ROOT) && fs.existsSync(candidate)) {
    return res.sendFile(candidate);
  }
  const notFound = path.join(ROOT, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  return res.status(404).send('Not found');
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Fayanex site running as a Node.js app on port ${port}`);
});
