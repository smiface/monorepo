import { MainLayout } from '@joindev/todo/layouts';
import { useRouter } from 'next/router';

function PaymentPage() {
  const router = useRouter();
  const params = router.query;

  return (
      <h1 onClick={() => console.log(params)} >All cars </h1>
  );
}

export default PaymentPage;
