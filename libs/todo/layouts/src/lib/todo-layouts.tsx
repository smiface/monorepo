import Link from 'next/link';

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const links = [
    { href: '/about', str: 'about' },
    { href: '/todo/1', str: 'todo' },
    { href: '/todo', str: 'all todo' },
  ];

  return (
    <div className="pt-2 flex align-middle flex-col bg-neutral-900 h-20">
      <header className=" pt-2 pb-2 mb-2 h-24">
        {links.map((el) => (
          <Link href={el.href}>
            <a
              className="p-2 mr-2 border-slate-300 text-slate-300 hover:border-neutral-900 hover:text-neutral-900 hover:bg-slate-300 transition-all duration-300"
              href={el.href}
            >
              {el.str}
            </a>
          </Link>
        ))}
      </header>

      <div className="border-red-100 bg-slate-50  h-max "> {children}</div>

      <footer className=" bg-neutral-900 h-50 flex align-middle"> footer </footer>
    </div>
  );
};

export default MainLayout;

/* eslint-disable-next-line */
// interface MainLayoutProps {
//   children?: React.ReactNode;
// }
// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
