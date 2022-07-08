import { Button } from '@joindev/button';
import { useState } from 'react';

type TypeFilter = { id: number; title: string; isActive: boolean };
type TypeItem = { id: number; title: string; filter: string };
interface CustomFilterBlocksProps {
  filtersArray: TypeFilter[];
  itemsArray: TypeItem[];
}

const FilterItem = ({
  filter,
  toggleFilter,
}: {
  filter: { title: string; id: number; isActive: boolean };
  toggleFilter: (id: number) => void;
}) => {
  // isactive state
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      text={filter.title + (isActive ? ' ✕' : '')}
      color={isActive ? 'green' : 'lite'}
      addition={' w-[150px]  m-4 '}
      fn={() => {
        setIsActive(!isActive);
        toggleFilter(filter.id);
      }}
    />
  );
};

const useCustomHook = (filtersArray: TypeFilter[], itemsArray: TypeItem[]) => {
  const [filters, setFilters] = useState(filtersArray);
  const [items, setItems] = useState(itemsArray);

  const toggleFilter = (id: number) => {
    const newFilters = filters.map((filter: TypeFilter) => (filter.id === id ? { ...filter, isActive: !filter.isActive } : filter));
    setFilters(newFilters);
    const activeFilters = newFilters.filter((f) => f.isActive === true);
    const newItems = itemsArray.filter((el) => activeFilters.find((f) => f.title === el.filter)) || itemsArray;
    setItems(newItems.length > 0 ? newItems : itemsArray);
  };

  return { filters, items, toggleFilter };
};

export const CustomFilterBlocks = ({ filtersArray, itemsArray }: CustomFilterBlocksProps) => {
  const hook = useCustomHook(filtersArray, itemsArray);

  return (
    <div>
      {hook.filters.map((filter) => {
        return <FilterItem filter={filter} key={filter.id} toggleFilter={(id) => hook.toggleFilter(id)} />;
      })}
      <div className="grid gap-6 grid-cols-6 m-4">
        {hook.items.map((el) => (
          <div>
            <h2 className="text-2xl">{el.title}</h2>
            <h3 className=" text-cyan-700 ">{el.filter}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomFilterBlocks;
