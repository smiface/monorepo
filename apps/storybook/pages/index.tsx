import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
export function Index() {
  
  return (
    <div className=" border-red-500 h-[100%]">
      <div className="w-[300px] border-2 border-red-100 h-[100%] overflow-y-scroll  overflow-x-hidden flex flex-col">
        <StorybookAside array={array} />
      </div>
    </div>
  );
}

export default Index;
