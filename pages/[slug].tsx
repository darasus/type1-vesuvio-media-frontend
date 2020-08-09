import { getSite } from '../network/getSite';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Data } from '../types/Data';
import { Markdown } from '../components/Markdown';
import { NextSeo } from 'next-seo';

const Article = (props: Data) => {
  const router = useRouter();
  const { slug } = router.query;
  const article = props.articles?.find(article => article.slug === slug);

  if (!article) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={article.seoTitle}
        description={article.seoDescription}
        noindex={props.site.isNoIndex}
        nofollow={props.site.isNoIndex}
        openGraph={{
          url: `https://${props.site.domainName}/${article.slug}`,
          title: article.seoTitle,
          description: article.seoDescription,
          images: [
            {
              url:
                article.image.large.src ||
                article.image.medium.src ||
                article.image.small.src ||
                article.image.thumbnail.src,
            },
          ],
        }}
      />
      <div>
        <div className="flex lg:flex-row flex-col items-center mb-5">
          <div className="overflow-hidden rounded-lg lg:mb-10 lg:w-1/2 lg:mr-10">
            <img src={article.image.large.src} alt={article.image.alt} />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl mb-4 font-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
        <div className="content mb-8 leading-relaxed">
          <Markdown source={article.body} />
        </div>
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
