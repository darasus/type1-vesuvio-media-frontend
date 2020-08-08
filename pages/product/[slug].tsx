import { getSite } from '../../network/getSite';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Data } from '../../types/Data';

const Product = (props: Data) => {
  const router = useRouter();
  const { slug } = router.query;
  const product = props.products?.find(product => product.slug === slug);

  if (!product) {
    return null;
  }

  return (
    <div>
      <div>
        <img src={product.image?.small?.src} />
      </div>
      <div>{product.title}</div>
      <div>{product.shortDescription}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const data = await getSite();

  return {
    paths: data.products.map(product => ({ params: { slug: product.slug } })),
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

export default Product;
