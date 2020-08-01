import { parseGetSite } from './parsers/parseGetSite';

export const getSite = async () => {
  const response = await fetch(
    `https://type1.vesuviomedia.com/sites/${process.env.SITE_ID}`
  );

  const data = await response.json();

  return parseGetSite(data);
};
