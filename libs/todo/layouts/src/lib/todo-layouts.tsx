import Link from 'next/link';

type TProps = {
  children?: React.ReactNode;
  links: { href: string; str: string }[];
};

export const MainLayout = (props: TProps) => {
  const links = props.links || [];

  return (
    <div className="flex align-middle flex-col  h-[calc(100vh)] border-2 border-slate-800 relative">
      <header className="pt-2 pb-2 h-[calc(50px)] bg-neutral-900  absolute top-0 w-screen flex align-middle ">
        {links.map((el) => (
          <Link href={el.href}>
            <a
              className="  mr-2 flex align-middle  text-slate-300 hover:border-neutral-900 hover:text-neutral-900 hover:bg-slate-300 transition-all duration-300"
              href={el.href}
            >
             {el.str}
            </a>
          </Link>
        ))}
      </header>
      {/* class="w-[calc(100%+2rem)]" */}
      <div className=" bg-slate-50 min-h-[calc(80%)] mt-12 ">
        {props.children}
      </div>

      <footer className=" bg-neutral-900 h-[calc(50px)] flex align-middle absolute bottom-0 w-screen">
        footer
      </footer>
    </div>
  );
};

// export default MainLayout;

// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
