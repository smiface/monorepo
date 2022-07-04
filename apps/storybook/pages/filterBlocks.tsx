import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomFilterBlocks } from 'libs/storybook-components/src/lib/custom-filter-blocks';
import { useState } from 'react';

class Filter {
  constructor(title, isActive) {
    this.title = title;
    this.isActive = isActive;
  }
}

export default function FilterBlocksPage() {
  const [array, setArray] = useState([]);

  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <div className="w-[100%] p-4">
        <CustomFilterBlocks array={array} />
      </div>
    </div>
  );
}