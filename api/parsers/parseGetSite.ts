import { ResponseSite } from '../../generated/types';
import { Data } from '../../types/Data';

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
    articles: [],
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
        image: {
          id: item.Image.id,
          title: item.Image.name,
          large: {
            src: item.Image.formats.large.url,
            width: item.Image.formats.large.width,
            height: item.Image.formats.large.height,
          },
          medium: {
            src: item.Image.formats.medium.url,
            width: item.Image.formats.medium.width,
            height: item.Image.formats.medium.height,
          },
          small: {
            src: item.Image.formats.small.url,
            width: item.Image.formats.small.width,
            height: item.Image.formats.small.height,
          },
          thumbnail: {
            src: item.Image.formats.thumbnail.url,
            width: item.Image.formats.thumbnail.width,
            height: item.Image.formats.thumbnail.height,
          },
        },
      };
    }),
  };
};
