import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '../styles/globals.css';
import { MainLayout } from '@joindev/todo/layouts';

const links = [
  { href: '/', str: 'home' },
  { href: '/testpage', str: 'testpage' },
  { href: '//navigateAnimation', str: 'navigateAnimation' },
  
];

// forceupd

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Monorepo | storybook</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <MainLayout links={links}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default CustomApp;

