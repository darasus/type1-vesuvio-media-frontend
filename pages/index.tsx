import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import ReactMarkdown from 'react-markdown';
import { Data } from '../types/Data';
import { ButtonLink } from '../components/Button';
import { Icon } from '../components/Icon';

const Home = (props: Data) => {
  return (
    <>
      <ReactMarkdown
        className="font-medium mb-5"
        source={props.homePage.introductionText}
      />
      {props.products.map(product => {
        return (
          <div
            className="w-full lg:max-w-full lg:flex mb-5 overflow-hidden rounded-lg border-2 border-gray-100 p-3"
            key={product.id}
          >
            {(product.image?.medium?.src || product.image?.small?.src) && (
              <div className="h-64 w-1/6 flex content-center items-center">
                <img
                  className="w-full h-auto"
                  src={product.image?.medium?.src || product.image?.small?.src}
                  width={
                    product.image?.medium?.width || product.image?.small?.width
                  }
                  height={
                    product.image?.medium?.height ||
                    product.image?.small?.height
                  }
                />
              </div>
            )}
            <div className="bg-white p-4 w-5/6 flex flex-row justify-between leading-normal">
              <div className="mr-8">
                <div className="text-gray-900 font-bold text-xl mb-1">
                  {product.title}
                </div>
                <div className="flex mb-1">
                  <Icon icon="star" className="text-yellow" />
                  <Icon icon="star" className="text-yellow" />
                  <Icon icon="star" className="text-yellow" />
                  <Icon icon="star" />
                  <Icon icon="star" />
                </div>
                <p className="text-gray-700 text-base">
                  {product.shortDescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href={product.url} target="_blank">
                  <ButtonLink className="mb-4">Buy now</ButtonLink>
                </a>
                <Link href={`/product/${product.slug}`}>
                  <a>
                    <ButtonLink variant="secondary">Learn more</ButtonLink>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <ReactMarkdown className="font-medium" source={props.homePage.mainText} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSite();

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
