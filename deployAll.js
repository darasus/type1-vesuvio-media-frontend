const { deploy } = require('./network/deploy');
const { API_BASE } = require('./constants');

const fetch = require('isomorphic-fetch');


async function main() {
  const response = await fetch(`${API_BASE}/sites`);
  const sites = await (await response).json();

  sites.forEach(async site => {
    await deploy({ projectName: `site-id-${site.id}`, siteId: site.id });
  });
}

main();
