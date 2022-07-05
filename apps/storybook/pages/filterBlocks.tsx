import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomFilterBlocks } from 'libs/storybook-components/src/lib/custom-filter-blocks';
import { useState } from 'react';
import { CLOSING } from 'ws';

class Filter {
  constructor(title, isActive) {
    this.title = title;
    this.isActive = isActive;
  }
}

// class array item
class FilterItem {
  constructor(id, title, isActive) {
    this.id = id;
    this.title = title;
    this.isActive = isActive;
  }
}

const array = [
  new FilterItem(1, 'Filter 1', false),
  new FilterItem(2, 'Filter 2', false),
  new FilterItem(3, 'Filter 3', false),
  new FilterItem(4, 'Filter 4', false),
];

// log array
console.log(array);

export default function FilterBlocksPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <div className="w-[100%] p-4">
        <CustomFilterBlocks filtersArray={array} />
      </div>
    </div>
  );
}
