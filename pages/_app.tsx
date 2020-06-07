import '../styles/main.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`Home | ${pageProps.title}`}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
