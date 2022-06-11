import { Button } from '@joindev/button';
import { MainLayout } from '@joindev/todo/layouts';

const links = [
  { href: '/', str: 'home' },
  { href: '/payment', str: 'all payment' },
];

export function Index() {
  return (
    <MainLayout links={links}>
      <Button text='zxc' fn={()=> console.log('zxc')}>zxc</Button>
      <div className="border-2 ">zxc</div>
    </MainLayout>
  );
}

export default Index;
