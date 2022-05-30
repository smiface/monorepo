/* eslint-disable-next-line */
// interface MainLayoutProps {
//   children?: React.ReactNode;
// }
// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

import Link from 'next/link';

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="p-4">
      <header>
        {/* <Link pathHref="/about"> */}
        <Link href="/about">
          <a className="p-2">about</a>
        </Link>
        <Link href="/todo/1">
          <a className="p-2">todo</a>
        </Link>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
