import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '../styles/globals.css';
import { MainLayout } from '@joindev/todo/layouts';
import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';

const links = [
  { href: '/', str: 'home' },
  { href: '/testpage', str: 'testpage' },
  { href: '/navigateAnimation', str: 'navigateAnimation' },
];

// test

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Monorepo | storybook</title>

        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <MainLayout links={links}>
        <div className=" bg-gray-100 h-[100%] flex">
          <StorybookAside />
          <Component {...pageProps} />
        </div>
      </MainLayout>
    </>
  );
}

export default CustomApp;
