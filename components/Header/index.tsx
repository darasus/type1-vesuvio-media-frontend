import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="relative bg-white px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex">
              {title}
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setActiveItem(2)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <button
                type="button"
                className={clsx(
                  'text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150',
                  {
                    'text-gray-900': activeItem === 2,
                    'text-gray-500': activeItem !== 2,
                  }
                )}
              >
                <span>Articles</span>
                <svg
                  className={clsx(
                    'text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150',
                    {
                      'text-gray-600': activeItem === 2,
                      'text-gray-400': activeItem !== 2,
                    }
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={clsx(
                  'absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 bg-white',
                  {
                    'transition ease-out duration-200': activeItem === 2,
                    // 'opacity-0 translate-y-1': activeItem === 2,
                    'opacity-100 translate-y-0': activeItem === 2,
                    'transition ease-in duration-150': activeItem !== 2,
                    // 'opacity-100 translate-y-0': activeItem !== 2,
                    'opacity-0 translate-y-1': activeItem !== 2,
                  }
                )}
              >
                <div className="rounded-lg shadow-lg">
                  <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
                      <div className="space-y-4">
                        <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-base leading-6 truncate">
                            <a
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                              Boost your conversion rate
                            </a>
                          </li>
                          <li className="text-base leading-6 truncate">
                            <a
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                              How to use search engine optimization to drive
                              traffic to your site
                            </a>
                          </li>
                          <li className="text-base leading-6 truncate">
                            <a
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                              Improve your customer experience
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="text-sm leading-5">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                        >
                          View all posts &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
