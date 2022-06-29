import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomGrid } from 'libs/storybook-components/src/lib/custom-grid';

export default function GridPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <StorybookAside />
      <div className="w-[100%]">
        <CustomGrid />
      </div>
    </div>
  );
}