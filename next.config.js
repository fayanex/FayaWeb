/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML export -> serve directly on Hostinger
  images: { unoptimized: true },
  trailingSlash: true,       // produces /about/index.html etc. for clean static hosting
};

module.exports = nextConfig;
