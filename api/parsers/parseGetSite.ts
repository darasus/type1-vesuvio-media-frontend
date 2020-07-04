import { ResponseSite } from '../../generated/types';
import { Data } from '../../types/Data';
import { parseImage } from './parseImage';

export const parseGetSite = (response: ResponseSite): Data => {
  return {
    site: {
      uid: response.uid,
      id: response.id,
      title: response.title,
      createdAt: response.created_at,
      updatedAt: response.updated_at,
    },
    homePage: {
      id: response.home_page.id,
      introductionText: response.home_page.introduction_text,
      mainText: response.home_page.main_text,
      createdAt: response.home_page.created_at,
      updatedAt: response.home_page.updated_at,
    },
    primaryColor: response.primary_color,
    articles: response.articles.map(article => {
      return {
        id: article.id,
        title: article.title,
        slug: article.slug,
        body: article.body,
        createdAt: article.created_at,
        image: article.featured_image
          ? parseImage(article.featured_image)
          : null,
      };
    }),
    products: response.products.map(item => {
      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        url: item.url,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        site: item.site,
        shortDescription: item.short_description,
        image: item.Image ? parseImage(item.Image) : null,
      };
    }),
  };
};
