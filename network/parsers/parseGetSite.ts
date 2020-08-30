import { ResponseSite } from '../../generated/types';
import { Data } from '../../types/Data';
import { replaceAllImageURLs } from '../../utils/replaceAllImageURLs';
import { parseISO, compareDesc } from 'date-fns';

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
      gaTrackingId: response.ga_tracking_id,
    },
    homePage: {
      id: response.home_page.id,
      title: response.home_page.title,
      seoTitle: response.home_page.seo_title,
      seoDescription: response.home_page.seo_description,
      introductionText: replaceAllImageURLs(
        response.home_page.introduction_text
      ),
      mainText: replaceAllImageURLs(response.home_page.main_text),
      createdAt: response.home_page.created_at,
      updatedAt: response.home_page.updated_at,
      image: response.home_page.intro_image
        ? {
            id: response.home_page.intro_image.id,
            title: response.home_page.intro_image.name,
            alt: response.home_page.intro_image.alternativeText,
            src: replaceAllImageURLs(response.home_page.intro_image.url, {
              quality: 'high',
              size: 500,
            }),
            width: response.home_page.intro_image.width,
            height: response.home_page.intro_image.height,
          }
        : null,
    },
    primaryColor: response.primary_color,
    articles: response.articles
      .filter(article => article.is_published)
      .sort((a, b) =>
        compareDesc(parseISO(a.created_at), parseISO(b.created_at))
      )
      .map(article => ({
        id: article.id,
        seoTitle: article.seo_title,
        seoDescription: article.seo_description,
        title: article.title,
        slug: article.slug,
        body: replaceAllImageURLs(article.body, { size: 500 }),
        createdAt: article.created_at,
        updatedAt: article.updated_at,
        excerpt: article.excerpt,
        image: article.featured_image
          ? {
              id: article.featured_image.id,
              title: article.featured_image.name,
              alt: article.featured_image.alternativeText,
              src: replaceAllImageURLs(article.featured_image.url, {
                size: 400,
              }),
              width: article.featured_image.width,
              height: article.featured_image.height,
            }
          : null,
      })),
    products: response.products.map(item => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      url: item.url,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      site: item.site,
      shortDescription: item.short_description,
      image: item.Image
        ? {
            id: item.Image.id,
            title: item.Image.name,
            alt: item.Image.alternativeText,
            src: replaceAllImageURLs(item.Image.url, { quality: 'high' }),
            width: item.Image.width,
            height: item.Image.height,
          }
        : null,
      brand: item.brand_name,
    })),
  };
};
