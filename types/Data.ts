import { Site } from './Site';
import { HomePage } from './HomePage';
import { Product } from './Product';

export interface Data {
  site: Site;
  homePage: HomePage;
  primaryColor: string;
  articles: any[];
  products: Product[];
}
