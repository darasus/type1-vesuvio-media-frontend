import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import ReactMarkdown from 'react-markdown';
import { Data } from '../types/Data';

const Home = (props: Data) => {
  return (
    <>
      <ReactMarkdown
        className="font-medium text-gray-800"
        source={props.homePage.introductionText}
      />
      {props.products.map(item => {
        return (
          <div
            className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg"
            key={item.id}
          >
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url('${item.image.medium.src}')` }}
              title="Woman holding a mug"
            />
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-base">
                  {item.shortDescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={item.url}
                  target="_blank"
                  className="mb-3 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Buy now
                </a>
                <a
                  href={item.url}
                  target="_blank"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <ReactMarkdown
        className="font-medium text-gray-800"
        source={props.homePage.mainText}
      />
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
