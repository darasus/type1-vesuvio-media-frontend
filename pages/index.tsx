import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import ReactMarkdown from 'react-markdown';
import { Data } from '../types/Data';
import { ButtonLink } from '../components/Button';
import { Icon } from '../components/Icon';
import { calcReadTime } from '../utils/calcReadTime';
import clsx from 'clsx';
import { UndrawWorkout } from 'react-undraw-illustrations';

const Title: React.FC<{ title: string; className?: string }> = ({
  title,
  className
}) => {
  return (
    <div className={clsx('flex flex-wrap w-full', className)}>
      <div className="lg:w-1/2 w-full">
        <h1 className="text-4xl font-medium title-font mb-2">{title}</h1>
        <div className="h-1 w-20 bg-primary-500 rounded"></div>
      </div>
    </div>
  );
};

const Home = (props: Data) => {
  return (
    <>
      {/* <ReactMarkdown
        className="font-medium mb-5"
        source={props.homePage.introductionText}
      />
      <ReactMarkdown className="font-medium" source={props.homePage.mainText} /> */}
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <UndrawWorkout primaryColor={props.site.color} />
          </div>
        </div>
      </section>
      <section>
        <Title title="Products" className="mb-12" />
        {props.products.map(product => {
          return (
            <section className="text-gray-700 body-font overflow-hidden rounded-lg border-2 border-gray-100 p-3 mb-5">
              <div className="container mx-auto">
                <div className="mx-auto flex flex-wrap">
                  {(product.image?.medium?.src ||
                    product.image?.small?.src) && (
                    <img
                      className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
                      src={
                        product.image?.medium?.src || product.image?.small?.src
                      }
                      width={
                        product.image?.medium?.width ||
                        product.image?.small?.width
                      }
                      height={
                        product.image?.medium?.height ||
                        product.image?.small?.height
                      }
                    />
                  )}
                  <div className="lg:w-3/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      BRAND NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product.title}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-primary-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-primary-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-primary-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-primary-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-primary-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="flex border-t-2 border-gray-200 mt-3 pt-3">
                      <a href="https://google.com">
                        <ButtonLink className="flex-shrink mr-4">
                          Buy now
                        </ButtonLink>
                      </a>
                      <ButtonLink className="flex-shrink" variant="secondary">
                        Learn more
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
      <section>
        <Title title="Latest articles" />
        <div className="container mx-auto mt-20">
          {props.articles.map(item => {
            return (
              <div className="flex flex-wrap -m-12">
                <div className="p-12 flex flex-col items-start">
                  <span className="inline-block py-1 px-3 rounded bg-primary-200 text-primary-500 text-sm font-medium tracking-widest">
                    ARTICLE
                  </span>
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed mb-8">
                    {`${item.body.substr(0, 600)}...`}
                  </p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                    <Link href={`/article/${item.slug}`}>
                      <a className="text-primary-500 inline-flex items-center">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                    <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
                      <svg
                        className="w-6 h-6 mr-1 text-gray-600"
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="heroicon-ui"
                          d="M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z"
                        />
                      </svg>
                      {calcReadTime(item.body)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSite();

  return {
    props: {
      ...data
    }
  };
};

export default Home;
