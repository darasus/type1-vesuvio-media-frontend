export interface ResponseSite {
    id: number;
    uid: string;
    title: string;
    created_at: string;
    updated_at: string;
    home_page: ResponseHome_page;
    primary_color: string;
    is_published: boolean;
    is_no_index: boolean;
    domain_name: string;
    created_by: null;
    updated_by: null;
    articles: ResponseArticlesItem[];
    products: ResponseProductsItem[];
}
export interface ResponseHome_page {
    id: number;
    introduction_text: string;
    main_text: string;
    site: number;
    created_at: string;
    updated_at: string;
    title: string;
    seo_title: string;
    seo_description: string;
    created_by: null;
    updated_by: null;
    intro_image: ResponseIntro_image;
}
export interface ResponseIntro_image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: ResponseFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
}
export interface ResponseFormats {
    large?: ResponseLarge;
    small: ResponseSmall;
    medium?: ResponseMedium;
    thumbnail: ResponseThumbnail;
}
export interface ResponseLarge {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
export interface ResponseSmall {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
export interface ResponseMedium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
export interface ResponseThumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
export interface ResponseArticlesItem {
    id: number;
    slug: string;
    title: string;
    body: string;
    site: number;
    created_at: string;
    updated_at: string;
    seo_title: string;
    seo_description: string;
    is_published: boolean;
    domain_name: null;
    created_by: null;
    updated_by: null;
    excerpt: string;
    featured_image: ResponseFeatured_image;
}
export interface ResponseFeatured_image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: ResponseFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
}
export interface ResponseProductsItem {
    id: number;
    slug: string;
    title: string;
    url: string;
    site: number;
    created_at: string;
    updated_at: string;
    Description: string | null;
    short_description: string;
    created_by: null;
    updated_by: null;
    Image: ResponseImage;
}
export interface ResponseImage {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: ResponseFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
}
