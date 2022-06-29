import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomModal } from 'libs/storybook-components/src/lib/custom-modal';

export default function ModalPage() {
  return (
    <div  className=" bg-gray-100 h-[100%] flex">
      <StorybookAside />

      <div className="flex flex-col pl-6 p-2">
        <h1 className=" text-2xl pt-4 pb-4">Custom Modal</h1>
        <CustomModal />
      </div>

      
    </div>
  );
}
