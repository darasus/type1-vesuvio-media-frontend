import { Data } from '../../types/Data';
import Link from 'next/link';

export const Footer = (props: Data) => {
  return (
    <footer className="text-gray-700 bg-gray-100">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap text-left order-first">
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
          <span className="text-sm text-gray-500 sm:mt-0 mt-4">
            {`Vesuvio Media © ${new Date().getFullYear()}`}
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="/privacy-policy" className="text-gray-500">
              <a>
                <span className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 underline">
                  {`Privacy policy`}
                </span>
              </a>
            </Link>
            <Link href="/terms-of-service" className="text-gray-500">
              <a>
                <span className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 underline">
                  {`Temrs of Service`}
                </span>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
