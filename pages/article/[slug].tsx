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
        <meta name="Description" content={article.title} />
      </Head>
      <div>
        <h1 className="text-4xl mb-4">{article.title}</h1>
        <div className="overflow-hidden rounded-lg mb-10">
          <img
            className="w-full"
            src={article.image.large.src}
            alt={article.title}
          />
        </div>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const data = await getSite();

  return {
    paths: data.articles.map(article => ({ params: { slug: article.slug } })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSite();

  return {
    props: {
      ...data
    }
  };
};

export default Article;
