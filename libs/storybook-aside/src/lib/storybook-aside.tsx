import { Button } from '@joindev/button';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface StorybookAsideProps {

}

const useCustomSelector = (array: string[]) => {
  const [isShow, setIsShow] = useState(false);
  const [current, setCurrent] = useState(array[0]);

  const handleOpen = () => {
    setIsShow(!isShow);
  };
  const handleSelect = (index: number) => {
    setCurrent(array[index]);
    handleOpen();
  };

  return { isShow, setIsShow, handleOpen, handleSelect, current, setCurrent };
};

export function StorybookAside({array}: {array: string[]}) {
  const testArray = ['zzz', 'xxx', 'ccc'];
  const s = useCustomSelector(testArray);

  return (
    <div className="flex flex-col p-2 m-2">
      zxc
    </div>
  );
}

export default StorybookAside;

//  <p className=" max-w-lg border-2 border-pink-500 p-2 m-4">1</p>
