import { getSite } from '../network/getSite';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Data } from '../types/Data';
import { NextSeo } from 'next-seo';
import { Title } from '../components/Title';
import { ProductPreview } from '../components/ProductPreview';
import { ArticlePreview } from '../components/ArticlePreview';

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
          ...(article.image?.src
            ? {
                images: [
                  {
                    url: article.image.src,
                  },
                ],
              }
            : {}),
        }}
      />
      <section className="mb-20">
        <div className="flex md:flex-row flex-col items-center mb-5">
          {article.image?.src && (
            <div className="overflow-hidden rounded-lg md:mr-10">
              <img
                className=""
                style={{ maxHeight: 400 }}
                src={article.image.src}
                alt={article.image.alt}
                height={400}
                width={article.image.width * (400 / article.image.height)}
              />
            </div>
          )}
          <div className="">
            <h1 className="text-4xl mb-4 font-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
        <div
          className="content mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></div>
      </section>
      <section className="mb-20">
        <Title title="You might be interested in" className="mb-20" />
        {props.products.map(product => (
          <ProductPreview
            data={props}
            key={product.id}
            product={product}
            className="mb-10"
          />
        ))}
      </section>
      <section>
        <Title title="Latest articles" className="mb-20" />
        {props.articles.slice(0, 3).map(article => (
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

export async function getStaticPaths() {
  const data = await getSite();

  return {
    paths: data.articles.map(article => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ctx => {
  const data = await getSite();
  const { slug } = ctx.params;
  const articleSource = data.articles?.find(article => article.slug === slug);

  return {
    props: {
      ...data,
    },
  };
};

export default Article;
