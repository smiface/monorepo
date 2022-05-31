import { MainLayout } from '@joindev/todo/layouts';
import { useRouter } from 'next/router';

export function TodoPage() {
  const router = useRouter();
  const id = router.query['id'];

  return <MainLayout>TodoPage zxc {id}</MainLayout>;
}

export default TodoPage;
