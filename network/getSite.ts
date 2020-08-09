import { parseGetSite } from './parsers/parseGetSite';
import { API_BASE } from '../constants';
import fetch from 'isomorphic-fetch'

export const getSite = async () => {
  const response = await fetch(
    `${API_BASE}/sites/${process.env.SITE_ID}`
  );
  const data = await response.json();

  return parseGetSite(data);
};
