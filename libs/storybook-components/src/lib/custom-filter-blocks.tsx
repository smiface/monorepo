import { Button } from '@joindev/button';
import { useState } from 'react';

interface CustomFilterBlocksProps {
  filtersArray: { id: number; title: string; isActive: boolean }[];
  itemsArray: { id: number; title: string; filter: string }[];
}

const FilterItem = ({ filter, toggleFilter }: { filter: { title: string; id: number; isActive: boolean }; toggleFilter: () => void }) => {
  // isactive state
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      text={filter.title + (isActive ? ' ✕' : '')}
      color={isActive ? ' lite ' : ''}
      addition={' w-[150px]  m-4 '}
      fn={() => {
        setIsActive(!isActive);
        toggleFilter(filter.id);
      }}
    />
  );
};

export const CustomFilterBlocks = ({ filtersArray, itemsArray }: CustomFilterBlocksProps) => {
  const [filters, setFilters] = useState(filtersArray);
  const [items, setItems] = useState(itemsArray);

  const toggleFilter = (id: number) => {
    const newFilters = filters.map((filter: any) => (filter.id === id ? { ...filter, isActive: !filter.isActive } : filter));
    setFilters(newFilters);
    const activeFilters = newFilters.filter((f) => f.isActive === true);
    const newItems = itemsArray.filter((el) => activeFilters.find((f) => f.title === el.filter)) || itemsArray;
    setItems(newItems.length > 0 ? newItems : itemsArray);
  };

  return (
    <div>
      {filters.map((filter) => {
        return <FilterItem filter={filter} key={filter.id} toggleFilter={(id) => toggleFilter(id)} />;
      })}
      <div className="grid gap-6 grid-cols-6 m-4">
        {items.map((el) => (
          <div className="">
            <h2 className="text-2xl">{el.title}</h2>
            <h3 className=" text-cyan-700 ">{el.filter}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomFilterBlocks;
