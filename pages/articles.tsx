import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import { Data } from '../types/Data';
import { ArticlePreview } from '../components/ArticlePreview';

const About = (props: Data) => {
  return (
    <div>
      {props.articles.map(article => (
        <ArticlePreview article={article} className="mb-10" />
      ))}
    </div>
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
