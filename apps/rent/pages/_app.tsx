import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const links = [
  { href: '/', str: 'home' },
  { href: '/payment', str: 'all payment' },
];

function CustomApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>Welcome to rent!</title>
      </Head>
      <main className="app">
        <MainLayout links={links}>
            Current payment {params.id}{' '}
          </h1>
          <Component {...pageProps} />
        </MainLayout>
      </main>
    </>
  );
}

export default CustomApp;
