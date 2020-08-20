const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const generateSitemap = async config => {
  const pages = await globby([
    'pages/*.tsx',
    '!pages/_*.tsx',
    '!pages/[*.tsx',
    '!pages/api',
  ]);
  const response = await fetch(`${config.env.API_BASE}/sites/2`);
  const site = await response.json();
  const baseUrl = `https://${site.domain_name}`;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page.replace('pages', '').replace('.tsx', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`${baseUrl}${route}`}</loc>
              ${
                path === '/index'
                  ? '<changefreq>weekly</changefreq>'
                  : '<changefreq>monthly</changefreq>'
              }
              ${
                path === '/index'
                  ? '<priority>1.0</priority>'
                  : '<priority>0.8</priority>'
              }
            </url>`;
        })
        .join('')}
        ${site.articles
          .map(article => {
            return `
              <url>
                  <loc>${`${baseUrl}/${article.slug}`}</loc>
                  <lastmod>${article.updated_at}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>0.8</priority>
              </url>`;
          })
          .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);

  console.log(`✅ sitemap generated...`);

  return config;
};

module.exports = { generateSitemap };
