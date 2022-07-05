import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './globals.scss';
import { MainLayout } from '@joindev/todo/layouts';

const links = [
  { href: '/', str: 'Home' },
  { href: '/sudoku', str: 'sudoku' },
  { href: '/dijkstra', str: 'dijkstra algorithm' },
]

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to copilot-repo!</title>
      </Head>
      <main className="app">
        <MainLayout links={links}>
          <Component {...pageProps} />
        </MainLayout>
      </main>
    </>
  );
}

export default CustomApp;
