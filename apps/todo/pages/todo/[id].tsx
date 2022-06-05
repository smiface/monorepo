import { MainLayout } from '@joindev/todo/layouts';
import { useRouter } from 'next/router';

const links = [
  { href: '/about', str: 'about' },
  { href: '/todo/1', str: 'todo' },
  { href: '/todo', str: 'all todo' },
];

export const TodoPage = ()  => {
  const router = useRouter();
  const id = router.query['id'];

  return (
    <MainLayout links={links}>
      <div>TodoPage zxc {id}</div>
    </MainLayout>
  );
}
