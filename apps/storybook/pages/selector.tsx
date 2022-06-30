import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomSelector } from 'libs/storybook-components/src/lib/custom-selector';

export default function SelectorPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <StorybookAside />

      <div className="flex flex-col pl-6 p-2">
        <h1 className=" text-2xl pt-4 pb-4">Custom selector</h1>
        <div className="flex">
          <div className="flex flex-col align-middle justify-center border-2 border-gray-300 w-[300px] mr-3 p-2 ">
            <h2 className="w-[250px] ">Default : No animation</h2>
            <CustomSelector array={['🐖', '🐈', '🐓']} />
          </div>
          <div className="flex flex-col align justify-center-middle border-2 border-gray-300 w-[300px] mr-3 p-2 ">
            <p className="w-[250px] ">Animated : 300ms duration</p>
            <CustomSelector array={['🐖', '🐈', '🐓']} duration={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
