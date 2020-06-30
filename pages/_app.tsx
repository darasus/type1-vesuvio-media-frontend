import '../styles/index.css';
import Head from 'next/head';
import { Header } from '../components/Header';
import { darken } from 'polished';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{`Home | ${pageProps?.site?.title}`}</title>
        {pageProps?.primaryColor && (
          <style>
            {`
            :root {
              --primary-color-100: ${darken(-0.4, pageProps.primaryColor)};
              --primary-color-200: ${darken(-0.3, pageProps.primaryColor)};
              --primary-color-300: ${darken(-0.2, pageProps.primaryColor)};
              --primary-color-400: ${darken(-0.1, pageProps.primaryColor)};
              --primary-color-500: ${darken(0, pageProps.primaryColor)};
              --primary-color-600: ${darken(0.1, pageProps.primaryColor)};
              --primary-color-700: ${darken(0.2, pageProps.primaryColor)};
              --primary-color-800: ${darken(0.3, pageProps.primaryColor)};
              --primary-color-900: ${darken(0.4, pageProps.primaryColor)};
            }
          `}
          </style>
        )}
      </Head>
      <Header title={pageProps?.site?.title} />
      <div className="container mx-auto py-5">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
