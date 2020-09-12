import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Data } from '../types/Data';
import { getSite } from '../network/getSite';
import { renderHTML } from '../utils/renderHTML';
import { getPrivacyPolicy } from '../network/getPrivacyPolicy';

const PrivacyPolicy = (
  props: Data & { privacyPolicy: { body: string; title: string; id: number } }
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
              {props.privacyPolicy.title}
            </h1>
          </div>
        </div>
        <div
          className="content mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: props.privacyPolicy.body }}
        ></div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const data = await getSite();
  const privacyPolicy = await getPrivacyPolicy();

  return {
    props: {
      ...data,
      privacyPolicy,
    },
  };
};

export default PrivacyPolicy;
