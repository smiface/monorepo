import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavLinkProps {
  href: string;
  str: string;
}

export const NavLink = ({ el }: { el: NavLinkProps }) => {
  return (
    <Link href={el.href} key={el.href}>
      <a
        className="p-2  mr-2 flex align-middle  text-slate-300 hover:border-neutral-900 hover:text-neutral-900 hover:bg-slate-300 transition-all duration-300"
        href={el.href}
      >
        {el.str}
      </a>
    </Link>
  );
};
