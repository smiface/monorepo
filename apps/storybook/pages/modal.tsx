import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomModal } from 'libs/storybook-components/src/lib/custom-modal';

export default function ModalPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <div className="flex flex-col pl-6 p-2">
        <h1 className=" text-2xl pt-4 pb-4">Custom Modal</h1>

        <div className="grid grid-cols-6 gap-6">
          <div className="">
            <h2>Default</h2>
            <CustomModal />
            <p>Can close on background click</p>
            <p>Overlay on all background</p>
          </div>

          <div>
            <h2>Default</h2>
            <CustomModal />
          </div>
        </div>
      </div>
    </div>
  );
}
