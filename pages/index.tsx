import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';

const Home = props => {
  return (
    <>
      <p className="p-4 bg-white rounded shadow">Home page</p>
      <Link href="/about">Go to about</Link>
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

export default Home;
