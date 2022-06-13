import { NavLink } from '@joindev/nav-link';
import { HeaderProps } from '@joindev/types';

export function Header(props: HeaderProps) {
  return (
    <header className="pt-2 pb-2  bg-neutral-900  absolute top-0 w-screen flex align-middle ">
      {props.links.map((el) => (
        <NavLink el={el} key={el.href} />
      ))}
    </header>
  );
}

export default Header;
