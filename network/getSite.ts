import { parseGetSite } from './parsers/parseGetSite';

export const getSite = async () => {
  const response = await fetch(
    `${process.env.API_BASE}/sites/${process.env.SITE_ID}`
  );

  const data = await response.json();

  return parseGetSite(data);
};
