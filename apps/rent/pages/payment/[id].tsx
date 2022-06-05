import { MainLayout } from '@joindev/todo/layouts';
import { useRouter } from 'next/router';

const links = [
  { href: '/', str: 'home' },
  { href: '/payment', str: 'all payment' },
];

function PaymentPage() {
  const router = useRouter();
  const params = router.query;

  return (
    <MainLayout links={links}>
      <h1 className='border-2 border-black' onClick={() => console.log(params)}>Current payment {params.id} </h1>
    </MainLayout>
  );
}

export default PaymentPage;
