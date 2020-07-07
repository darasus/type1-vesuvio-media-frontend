const { deploy } = require('./api/deploy');

const fetch = require('isomorphic-fetch');

async function main() {
  const response = await fetch('https://nippel.systems/sites');
  const sites = await (await response).json();

  sites.forEach(async site => {
    await deploy({ projectName: `site-id-${site.id}`, siteId: site.id });
  });
}

main();
