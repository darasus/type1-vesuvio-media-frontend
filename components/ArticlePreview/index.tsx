import { Article } from '../../types/Article';
import Link from 'next/link';
import { calcReadTime } from '../../utils/calcReadTime';
import clsx from 'clsx';

interface Props {
  article: Article;
  className?: string;
}

export const ArticlePreview: React.FC<Props> = ({ article, className }) => {
  return (
    <div className={clsx('flex flex-wrap', className)}>
      <div className="flex flex-col items-start">
        <span className="inline-block py-1 px-3 rounded bg-primary-200 text-primary-500 text-sm font-medium tracking-widest">
          ARTICLE
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          {article.title}
        </h2>
        <p className="leading-relaxed mb-8">{`${article.body.substr(
          0,
          600
        )}...`}</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <Link href={`/article/${article.slug}`}>
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
            {calcReadTime(article.body)}
          </span>
        </div>
      </div>
    </div>
  );
};
