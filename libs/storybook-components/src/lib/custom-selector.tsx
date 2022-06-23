import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface CustomSelectorProps {
  array: string[];
  animated?: boolean;
}

const useCustomSelector = (array: string[]) => {
  const [isShow, setIsShow] = useState(false);
  const [current, setCurrent] = useState(array[0]);
  const [opacity, setOpacity] = useState(0);

  const toggleOpen = () => {
    if (isShow) {
      setOpacity(0);
      setTimeout(() => {
        setIsShow(false);
      }, 300);
    } else {
      setIsShow(true);
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }
  };

  const handleSelect = (index: number) => {
    setCurrent(array[index]);
    toggleOpen()
  };

  return { isShow, toggleOpen, handleSelect, current, opacity };
};

export function CustomSelector({ array }: CustomSelectorProps) {
  const s = useCustomSelector(array);

  useEffect(() => {
    console.log(s.isShow);
  }, [s.isShow]);

  return (
    <div className="flex flex-col p-2 m-2">
      <h2> Custom selector </h2>
      <div className="flex flex-col relative">
        <Button text={s.current} fn={() => s.toggleOpen()} />

        {s.isShow ? (
          <div className="flex flex-col absolute top-0 w-full mt-10 ">
            {array.map((el, index) => (
              <Button
                text={el}
                fn={() => s.handleSelect(index)}
                addition={` bg-slate-100 mt-2 w-full opacity-${s.opacity} duration-300 z-10`}
              />
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
