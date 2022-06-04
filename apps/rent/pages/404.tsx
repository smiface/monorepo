import { MainLayout } from '@joindev/todo/layouts';

const links = [
  { href: '/', str: 'home' },
  { href: '/payment', str: 'payment' },
];

export function Index() {
  return (
    <MainLayout links={links}>
      <div className="border-2 bg-red-100  ">
        <h1 className="text-7xl">Page not found</h1>
      </div>
    </MainLayout>
  );
}

export default Index;
