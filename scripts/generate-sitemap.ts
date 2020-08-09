import { getSite } from "../network/getSite";
import fs from 'fs'
import globby from 'globby'
import prettier from 'prettier'

(async () => {

  const pages = await globby(['pages/*.tsx', '!pages/_*.tsx','!pages/[*.tsx', '!pages/api']);
  const site = await getSite()
  const baseUrl = `https://${site.site.domainName}`;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page: string) => {
          const path = page.replace('pages', '').replace('.tsx', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`${baseUrl}${route}`}</loc>
              ${path === '/index' ? "<changefreq>weekly</changefreq>" : "<changefreq>monthly</changefreq>"}
              ${path === '/index' ? "<priority>1.0</priority>" : "<priority>0.8</priority>"}
            </url>`;
        })
        .join('')}
        ${site.articles
          .map(article => {
            return `
              <url>
                  <loc>${`${baseUrl}/${article.slug}`}</loc>
                  <lastmod>${article.updatedAt}</lastmod>
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
})();
