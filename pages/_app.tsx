import '../styles/index.css';
import Head from 'next/head';
import { Header } from '../components/Header';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{`Home | ${pageProps.site.title}`}</title>
      </Head>
      <Header title={pageProps.site.title} />
      <div className="container mx-auto py-5">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
