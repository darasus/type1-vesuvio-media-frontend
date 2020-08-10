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
      color: response.primary_color,
      isPublished: response.is_published,
      isNoIndex: response.is_no_index,
      domainName: response.domain_name,
    },
    homePage: {
      id: response.home_page.id,
      title: response.home_page.title,
      seoTitle: response.home_page.seo_title,
      seoDescription: response.home_page.seo_description,
      introductionText: response.home_page.introduction_text,
      mainText: response.home_page.main_text,
      createdAt: response.home_page.created_at,
      updatedAt: response.home_page.updated_at,
      image: response.home_page.intro_image
        ? parseImage(response.home_page.intro_image)
        : null,
    },
    primaryColor: response.primary_color,
    articles: response.articles
      .filter(article => article.is_published)
      .map(article => {
        return {
          id: article.id,
          seoTitle: article.seo_title,
          seoDescription: article.seo_description,
          title: article.title,
          slug: article.slug,
          body: article.body,
          createdAt: article.created_at,
          updatedAt: article.updated_at,
          excerpt: article.excerpt,
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
