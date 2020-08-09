import { Data } from '../../types/Data';
import Link from 'next/link';

export const Footer = (props: Data) => {
  return (
    <footer className="text-gray-700 bg-gray-100">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* <div className="lg:w-3/4 md:w-1/2 w-full px-4"> */}
          <div className="w-full px-4">
            <span className="inline-block py-1 px-2 rounded bg-gray-200 text-gray-700 text-xs font-medium tracking-widest mb-3">
              ARTICLES
            </span>
            <nav className="list-none">
              {props.articles?.map(article => (
                <div key={article.id}>
                  <Link href={`/${article.slug}`}>
                    <a
                      className="text-gray-600 hover:text-gray-800"
                      title={article.title}
                    >
                      {article.title}
                    </a>
                  </Link>
                </div>
              )) || null}
            </nav>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
              <input
                className="w-40 sm:w-auto bg-white rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-primary-500 text-base py-2 px-4"
                placeholder="Placeholder"
                type="text"
              />
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded">
                Button
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div> */}
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            {`© 2020 ${props?.site?.title}`}
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
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
            <a className="ml-3 text-gray-500">
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
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};
