import { MainLayout } from '@joindev/todo/layouts';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const links = [
  { href: '/', str: 'home' },
  { href: '/users/', str: 'users' },
  { href: '/todos/', str: 'todos' },
];

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Joindev apollo</title>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <MainLayout links={links}>zxc</MainLayout>;
    </>
  );
}

export default CustomApp;
