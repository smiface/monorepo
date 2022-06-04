import { MainLayout } from '@joindev/todo/layouts';

const links = [
  { href: '/about', str: 'about' },
  { href: '/todo/1', str: 'todo' },
  { href: '/todo', str: 'all todo' },
];

export function About() {
  return <MainLayout links={links} >About</MainLayout>;
}

export default About;
