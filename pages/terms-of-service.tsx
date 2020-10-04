import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Data } from '../types/Data';
import { getSite } from '../network/getSite';
import { getTermsOfService } from '../network/getTermsOfService';

const TermsOfServicePage = (
  props: Data & { termsOfService: { body: string; title: string; id: number } }
) => {
  return (
    <>
      <NextSeo
        title={`Articles | ${props.site.title}`}
        description="Articles"
        noindex={props.site.isNoIndex}
        nofollow={props.site.isNoIndex}
      />
      <section className="mb-20">
        <div className="flex md:flex-row flex-col items-center mb-5">
          <div className="">
            <h1 className="text-4xl mb-4 font-bold leading-tight">
              {props.termsOfService.title}
            </h1>
          </div>
        </div>
        <div
          className="content mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: props.termsOfService.body }}
        ></div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const data = await getSite();
  const termsOfService = await getTermsOfService();

  return {
    props: {
      ...data,
      termsOfService,
    },
  };
};

export default TermsOfServicePage;
