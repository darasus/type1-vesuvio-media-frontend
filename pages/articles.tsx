import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import { Data } from '../types/Data';
import { ArticlePreview } from '../components/ArticlePreview';
import Head from 'next/head';

const About = (props: Data) => {
  return (
    <>
      <Head>
        <title>{`Articles | ${props.site.title}`}</title>
        <meta
          name="Description"
          content={`Read our articles for ${props.site.title}`}
        />
      </Head>
      <div>
        {props.articles.map(article => (
          <ArticlePreview
            key={article.id}
            article={article}
            className="mb-10"
          />
        ))}
      </div>
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

export default About;
