import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';

export function Index() {
  const array = [
    { title: 'home', path: '/' },
    { title: 'selector', path: '/selector' },
    { title: 'modal', path: '/modal' },
    { title: 'faq', path: '/faq' },
    { title: 'grid', path: '/grid' },
    { title: 'home', path: '/' },
    { title: 'home', path: '/' },
    { title: 'home', path: '/' },
    { title: 'home', path: '/' },
  ];
  return (
    <div className=" border-red-500 h-[100%]">
      <div className="w-[300px] border-2 border-red-100 h-[100%] overflow-y-scroll  overflow-x-hidden flex flex-col">
        <StorybookAside array={array} />
      </div>
    </div>
  );
}

export default Index;
