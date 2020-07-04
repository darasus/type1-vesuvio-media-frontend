import { Site } from './Site';
import { HomePage } from './HomePage';
import { Product } from './Product';
import { Article } from './Article';

export interface Data {
  site: Site;
  homePage: HomePage;
  primaryColor: string;
  articles: Article[];
  products: Product[];
}
