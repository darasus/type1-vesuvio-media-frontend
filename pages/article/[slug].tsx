import { getSite } from '../../api/getSite';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Data } from '../../types/Data';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

const Article = (props: Data) => {
  const router = useRouter();
  const { slug } = router.query;
  const article = props.articles?.find(article => article.slug === slug);

  if (!article) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`${article.title} | ${props.site.title}`}</title>
        <meta name="Title" content={article.title} />
        <meta
          name="Description"
          content={`${article.body.substr(0, 100)}...`}
        />
      </Head>
      <div>
        <div className="flex lg:flex-row flex-col items-center">
          <div className="overflow-hidden rounded-lg lg:mb-10 mb-5 lg:w-1/2 lg:mr-10">
            <img src={article.image.large.src} alt={article.title} />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl mb-4 font-bold">{article.title}</h1>
          </div>
        </div>
        <ReactMarkdown className="mb-5">{article.body}</ReactMarkdown>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const data = await getSite();

  return {
    paths: data.articles.map(article => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSite();

  return {
    props: {
      ...data,
    },
  };
};

export default Article;
