import { Image } from './Image';

export interface Article {
  id: number | null;
  title: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  slug: string | null;
  body: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  image: Image | null;
}
