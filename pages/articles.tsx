import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSite } from '../api/getSite';

export default function About() {
  return (
    <div>
      <p>Articles</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSite();

  return {
    props: {
      ...data,
    },
  };
};
