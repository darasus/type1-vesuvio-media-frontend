import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import { Data } from '../types/Data';
import { ButtonLink } from '../components/Button';
import { Icon } from '../components/Icon';
import { calcReadTime } from '../utils/calcReadTime';
import clsx from 'clsx';
import UndrawWorkout from 'react-undraw-illustrations/lib/components/UndrawWorkout';
import { ArticlePreview } from '../components/ArticlePreview';
import { ProductPreview } from '../components/ProductPreview';
import Head from 'next/head';

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
      <Head>
        <title>{props.homePage.title}</title>
        <meta name="Description" content={props.homePage.introductionText} />
      </Head>
      <section className="mb-20">
        <div className="flex py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {props.homePage.title}
            </h1>
            <p className="mb-8 leading-relaxed">
              {props.homePage.introductionText}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {props.homePage.image && (
              <img
                src={props.homePage.image.small.src}
                height={props.homePage.image.small.height}
                width={props.homePage.image.small.width}
              />
            )}
          </div>
        </div>
      </section>
      <section className="mb-20">
        <Title title="Products" className="mb-20" />
        {props.products.map(product => (
          <ProductPreview
            key={product.id}
            product={product}
            className="mb-10"
          />
        ))}
      </section>
      <section>
        <Title title="Latest articles" className="mb-20" />
        {props.articles.map(article => (
          <ArticlePreview
            key={article.id}
            article={article}
            className="mb-10"
          />
        ))}
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
