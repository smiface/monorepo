import { useRouter } from 'next/router';

export function TodoPage() {
  const router = useRouter();
  const id = router.query['id'];

  return <div>TodoPage zxc {id}</div>;
}

export default TodoPage;
