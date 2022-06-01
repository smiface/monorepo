import Link from 'next/link';

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const links = [
    { href: '/about', str: 'about' },
    { href: '/todo/1', str: 'todo' },
    { href: '/todo', str: 'all todo' },
  ];

  return (
    <div className="p-4">
      <header>
        {links.map((el) => (
          <Link href={el.href}>
            <a className="p-2 border-2 m-2" href={el.href}>
              {el.str}
            </a>
          </Link>
        ))}
       
      </header>

      <div> {children}</div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;

/* eslint-disable-next-line */
// interface MainLayoutProps {
//   children?: React.ReactNode;
// }
// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
