import { Header } from '@joindev/header';
import Link from 'next/link';

export const MainLayout = ({
  children,
  links,
}: {
  children?: React.ReactNode;
  links: { href: string; str: string }[];
}) => {
  const CLinks = links || [];

  return (
    <div className="flex align-middle flex-col h-screen relative">
      <Header links={CLinks} />

      <div className="bg-slate-50 h-screen">{children}</div>

      <footer className=" bg-neutral-900 h-10 flex align-middle w-screen">footer</footer>
    </div>
  );
};

// export default MainLayout;

// export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
