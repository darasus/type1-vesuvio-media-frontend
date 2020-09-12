import { parseGetSite } from './parsers/parseGetSite';
import { API_BASE } from '../constants';
import fetch from 'isomorphic-fetch';
import { renderHTML } from '../utils/renderHTML';
import { getSite } from './getSite';

export const getPrivacyPolicy = async () => {
  const siteData = await getSite();
  const response = await fetch(`${API_BASE}/privacy-policy`);
  const data = await response.json();

  return {
    id: data.id,
    title: data.title,
    body: renderHTML(
      data.body.replace('{website_url}', siteData.site.domainName)
    ),
  };
};
