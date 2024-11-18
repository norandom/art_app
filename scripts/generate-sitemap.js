const fs = require('fs');
const path = require('path');

// Update this with your actual domain when deployed
const BASE_URL = 'https://mariusciepluch.github.io';

// Define your routes
const routes = [
  '',
  '#about',
  '#education',
  '#projects',
  '#cv'
];

// Generate sitemap content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

console.log('Sitemap generated successfully!');
