import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';
import { Data } from '../types/Data';

const About = (props: Data) => {
  return (
    <div>
      {props.articles.map(article => {
        return (
          <div className="flex mb-6">
            <div
              className="bg-center bg-cover w-2/6 h-64 rounded-lg mr-6"
              style={{ backgroundImage: `url(${article.image.medium.src})` }}
            />
            <div className="w-4/6">
              <div className="text-gray-900 font-bold text-xl">
                {article.title}
              </div>
              <div>{`${article.body.substring(0, 500)}...`}</div>
            </div>
          </div>
        );
      })}
    </div>
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
