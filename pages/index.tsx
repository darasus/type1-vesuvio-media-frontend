import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import ReactMarkdown from 'react-markdown';
import { Data } from '../types/Data';
import { ButtonLink } from '../components/Button';

const Home = (props: Data) => {
  return (
    <>
      <ReactMarkdown
        className="font-medium mb-5"
        source={props.homePage.introductionText}
      />
      {props.products.map(item => {
        return (
          <div
            className="w-full lg:max-w-full lg:flex mb-5 overflow-hidden rounded-lg border-2 border-gray-100 p-3"
            key={item.id}
          >
            {(item.image?.medium?.src || item.image?.small?.src) && (
              <div className="h-64 w-1/6 flex content-center items-center">
                <img
                  className="w-full h-auto"
                  src={item.image?.medium?.src || item.image?.small?.src}
                  width={item.image?.medium?.width || item.image?.small?.width}
                  height={
                    item.image?.medium?.height || item.image?.small?.height
                  }
                />
              </div>
            )}
            <div className="bg-white p-4 w-5/6 flex flex-row justify-between leading-normal">
              <div className="mr-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {item?.title}
                </div>
                <p className="text-gray-700 text-base">
                  {item.shortDescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <ButtonLink href={item.url} target="_blank" className="mb-4">
                  Buy now
                </ButtonLink>
                <ButtonLink href={item.url} target="_blank" variant="secondary">
                  Learn more
                </ButtonLink>
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
