import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import {SessionProvider} from 'next-auth/react';

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Welcome to frontend-nextauth!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
