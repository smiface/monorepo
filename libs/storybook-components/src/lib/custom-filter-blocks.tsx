import { Button } from '@joindev/button';
import { useState } from 'react';

interface CustomFilterBlocksProps {
  filtersArray: { id: number; title: string; isActive: boolean }[];
  updateArray: (newArray: array) => void;
}

const FilterItem = ({ text }: { text: string }) => {
  // isactive state
  const [isActive, setIsActive] = useState(false);

  return <Button text={text + (isActive ? ' ✕' : '')} color={isActive ? ' lite ' : ''}  addition={' w-[150px]  m-4 '} fn={() => setIsActive(!isActive)} />;
};

export const CustomFilterBlocks = ({ filtersArray, updateArray }: CustomFilterBlocksProps) => {
  const [array, setArray] = useState(filtersArray); // array of filters
  const toggleFilter = (id: number) => {
    setArray(
      array.map((filter) => {
        filter.id === id ? { ...filter, isActive: !filter.isActive } : filter;
      })
    );
  };

  return (
    <div>
      {array.map((filter) => {
        return <FilterItem text={filter.title} key={filter.id} />;
      })}
    </div>
  );
};
export default CustomFilterBlocks;
