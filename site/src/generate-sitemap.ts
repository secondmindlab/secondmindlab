import fs from 'fs';
import path from 'path';

function generateSitemap() {
  const baseUrl = 'https://secondmindlab.com';
  const articles = fs.readdirSync('content/articles');
  const urls = articles
    .map((slug) => `<url><loc>${baseUrl}/articles/${slug}/</loc></url>`)
    .join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  fs.writeFileSync(
    'public/robots.txt',
    `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`
  );
}

generateSitemap();
