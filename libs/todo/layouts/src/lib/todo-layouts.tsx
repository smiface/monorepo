import { Header } from '@joindev/header';
import Link from 'next/link';

export const MainLayout = ({ children, links }: { children?: React.ReactNode; links: { href: string; str: string }[] }) => {
  const CLinks = links || [];

  return (
    <div className="flex align-middle flex-col h-screen relative">
      <Header links={CLinks} />

      <div className="bg-slate-50  h-[100%]">{children}</div>

      <footer className=" bg-neutral-900 flex items-center w-full  h-[50px]">footer</footer>
    </div>
  );
};
