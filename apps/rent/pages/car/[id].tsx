import { MainLayout } from '@joindev/todo/layouts';
import { useRouter } from 'next/router';

function CarPage() {
  const router = useRouter();
  const params = router.query;

  return (
    <div>
      <h1 className="border-2 border-black" onClick={() => console.log(params)}>car </h1>
    </div>
  );
}

export default CarPage;
