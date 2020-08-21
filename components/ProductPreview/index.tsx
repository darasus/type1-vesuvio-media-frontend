import { Product } from '../../types/Product';
import clsx from 'clsx';
import { ButtonLink } from '../Button';
import { Data } from '../../types/Data';

interface Props {
  product: Product;
  data: Data;
  className?: string;
}

export const ProductPreview: React.FC<Props> = ({
  product,
  className,
  data,
}) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-lg border-2 border-gray-100 p-3',
        className
      )}
    >
      <div className="mx-auto flex flex-wrap">
        {(product.image?.medium?.src || product.image?.small?.src) && (
          <img
            className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image?.medium?.src || product.image?.small?.src}
            width={product.image?.medium?.width || product.image?.small?.width}
            height={
              product.image?.medium?.height || product.image?.small?.height
            }
            alt={product.title}
          />
        )}
        <div className="lg:w-3/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <span className="text-sm title-font text-gray-500 tracking-widest uppercase">
            {product.brand}
          </span>
          <h3 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.title}
          </h3>
          <div className="flex mb-4">
            <span className="flex ml-3 py-2">
              <a
                className="text-gray-500"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://${data.site.domainName}`}
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-2 text-gray-500"
                href={`https://twitter.com/share?url=https://${data.site.domainName}`}
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed">{product.shortDescription}</p>
          <div className="flex border-t-2 border-gray-100 mt-3 pt-3">
            <a href={product.url} target="_blank">
              <ButtonLink className="flex-shrink mr-4">Buy now</ButtonLink>
            </a>
            <a href={product.url} target="_blank">
              <ButtonLink className="flex-shrink" variant="secondary">
                Learn more
              </ButtonLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
