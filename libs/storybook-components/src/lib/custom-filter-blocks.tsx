import { Button } from '@joindev/button';
import { useState } from 'react';

interface CustomFilterBlocksProps {
  filtersArray: { title: string; isActive: boolean }[];
  updateArray: (newArray: array) => void;
}

const FilterItem = (text: string) => {
  // isactive state
  const [isActive, setIsActive] = useState(false);

  return (
    <button onClick={() => setIsActive(!isActive)}>
      {text}
      {isActive ? ' ✕' : false}
    </button>
  );
};

const CustomFilterBlocks = ({ filtersArray, updateArray }: CustomFilterBlocksProps) => {
  return (
    <div>

{/* create pink button toggle isactive */}


      {filtersArray.map((filter) => {
        return <FilterItem text={filter.title} />;
      })}
    </div>
  );
};
export default CustomFilterBlocks;
