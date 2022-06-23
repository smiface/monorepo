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
      <h2>  </h2>
      <div className="flex flex-col relative">
        <Button text={s.current} fn={() => s.handleOpen()}  />

        {s.isShow ? (
          <div className="flex flex-col absolute top-0 w-full mt-10 border-2 border-red-300">
            {testArray.map((el, index) => (
              <Button text={el} fn={() => s.handleSelect(index)} addition={' bg-slate-100 mt-2 w-full '} />
            ))}
          </div>
        ) : (
          false
        )}
      </div>

      <p>another content </p>
    </div>
  );
}

export default StorybookAside;

//  <p className=" max-w-lg border-2 border-pink-500 p-2 m-4">1</p>
