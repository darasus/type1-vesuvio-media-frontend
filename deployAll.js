const { deploy } = require('./network/deploy');

const fetch = require('isomorphic-fetch');

console.log(process.env.API_BASE)

async function main() {
  const response = await fetch(`${process.env.API_BASE}/sites`);
  const sites = await (await response).json();

  sites.forEach(async site => {
    await deploy({ projectName: `site-id-${site.id}`, siteId: site.id });
  });
}

main();
