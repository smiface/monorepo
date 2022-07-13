import { NavLink } from '@joindev/nav-link';
import { HeaderProps } from '@joindev/types';

export function Header(props: HeaderProps) {
  return (
    <header className="p-2  bg-neutral-900  w-full flex ">
      {props.links.map((el) => (
        <NavLink el={el} key={el.href} />
      ))}
    </header>
  );
}

export default Header;
