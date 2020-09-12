import { GetStaticProps } from 'next';
import { getSite } from '../network/getSite';
import { Data } from '../types/Data';
import { ArticlePreview } from '../components/ArticlePreview';
import { NextSeo } from 'next-seo';

const About = (props: Data) => {
  return (
    <>
      <NextSeo
        title={`Articles | ${props.site.title}`}
        description="Articles"
        noindex={props.site.isNoIndex}
        nofollow={props.site.isNoIndex}
      />
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
      ...data,
    },
  };
};

export default About;
