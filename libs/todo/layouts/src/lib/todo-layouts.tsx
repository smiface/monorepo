import { Header } from '@joindev/header';
import Link from 'next/link';
export const MainLayout = ({children, links}: {children?: React.ReactNode, links: { href: string; str: string }[]}) => {
  const CLinks = links || [];

  return (
    <div className="flex align-middle flex-col  h-[calc(100vh)] border-2 border-slate-800 relative">
      <Header links={CLinks} />
      
      <div className=" bg-slate-50 min-h-[calc(80%)] mt-12 ">
        {children}
      </div>

      <footer className=" bg-neutral-900 h-[calc(50px)] flex align-middle absolute bottom-0 w-screen">
        footer
      </footer>
    </div>
  );
};

// export default MainLayout;

// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
