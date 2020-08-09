const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
const {API_BASE} = require('../constants')

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby(['pages/*.tsx', '!pages/_*.tsx', '!pages/api']);
  const response = await fetch(
    `${API_BASE}/sites/${process.env.SITE_ID}`
  );
  const data = await response.json();
  const baseUrl = `https://${data.domain_name}`;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page.replace('pages', '').replace('.tsx', '');
          const route = path === '/index' ? '' : path;

          return `<url><loc>${`${baseUrl}${route}`}</loc></url>`;
        })
        .join('')}
        ${data.articles
          .map(article => {
            return `
              <url>
                  <loc>${`${baseUrl}/article/${article.slug}`}</loc>
                  <lastmod>${article.updated_at}</lastmod>
              </url>
          `;
          })
          .join('')}
    </urlset>
  `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
