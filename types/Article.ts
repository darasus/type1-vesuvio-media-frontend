import { Image } from './Image';

export interface Article {
  id: number | null;
  title: string | null;
  slug: string | null;
  body: string | null;
  createdAt: string | null;
  image: Image | null;
}
