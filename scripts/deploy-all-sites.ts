import fetch from 'isomorphic-fetch';
import { deploy } from '../network/deploy';
import { API_BASE } from '../constants';
import { Site } from '../types/Site';

async function main() {
  const response = await fetch(`${API_BASE}/sites`);
  const sites = await (await response).json();

  sites.forEach(async (site: Site) => {
    await deploy({ projectName: `site-id-${site.id}`, siteId: site.id });
  });
}

main();
