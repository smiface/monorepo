import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head >
        <title>Welcome to todo!</title>
      </Head>
      <main className="app ">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default CustomApp;
