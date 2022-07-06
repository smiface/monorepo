import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomFilterBlocks } from 'libs/storybook-components/src/lib/custom-filter-blocks';
import { useState } from 'react';
import { CLOSING } from 'ws';
// class array item
class FilterItem {
  constructor(id, title, isActive) {
    this.id = id;
    this.title = title;
    this.isActive = isActive;
  }
}

const filtersArray = [
  new FilterItem(1, 'Filter 1', false),
  new FilterItem(2, 'Filter 2', false),
  new FilterItem(3, 'Filter 3', false),
  new FilterItem(4, 'Filter 4', false),
];

const itemsArray = [
  { id: 1, title: 'Item 1', filter: 'Filter 1' },
  { id: 2, title: 'Item 2', filter: 'Filter 2' },
  { id: 3, title: 'Item 3', filter: 'Filter 3' },
  { id: 4, title: 'Item 4', filter: 'Filter 4' },
  { id: 5, title: 'Item 5', filter: 'Filter 1' },
  { id: 6, title: 'Item 6', filter: 'Filter 2' },
  { id: 7, title: 'Item 7', filter: 'Filter 3' },
  { id: 8, title: 'Item 8', filter: 'Filter 4' },
  { id: 9, title: 'Item 9', filter: 'Filter 1' },
  { id: 10, title: 'Item 10', filter: 'Filter 2' },
  { id: 11, title: 'Item 11', filter: 'Filter 3' },
  { id: 12, title: 'Item 12', filter: 'Filter 4' },
  { id: 13, title: 'Item 13', filter: 'Filter 1' },
  { id: 14, title: 'Item 14', filter: 'Filter 2' },
  { id: 15, title: 'Item 15', filter: 'Filter 3' },
  { id: 16, title: 'Item 16', filter: 'Filter 4' },
  { id: 17, title: 'Item 17', filter: 'Filter 1' },
  { id: 18, title: 'Item 18', filter: 'Filter 2' },
  { id: 19, title: 'Item 19', filter: 'Filter 3' },
  { id: 20, title: 'Item 20', filter: 'Filter 4' },
];

export default function FilterBlocksPage() {
  return (
    <div className=" bg-gray-100 h-[100%] flex">
      <div className="w-[100%] p-4">
        <CustomFilterBlocks filtersArray={filtersArray} itemsArray={itemsArray} />
      </div>
    </div>
  );
}
