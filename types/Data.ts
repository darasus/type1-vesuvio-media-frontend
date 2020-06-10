import { Site } from './Site';
import { HomePage } from './HomePage';
import { Product } from './Product';

export interface Data {
  site: Site;
  homePage: HomePage;
  articles: any[];
  products: Product[];
}
