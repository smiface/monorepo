import { Button } from '@joindev/button';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface CustomSelectorProps {
  array: string[];
  duration?: number;
}

const useCustomSelector = (array: string[], duration: number) => {
  const [isShow, setIsShow] = useState(false);
  const [current, setCurrent] = useState(array[0]);
  const [opacity, setOpacity] = useState(0);

  const toggleOpen = () => {
    if (isShow) {
      setOpacity(0);
      setTimeout(() => {
        setIsShow(false);
      }, duration);
    } else {
      setIsShow(true);
      setTimeout(() => {
        setOpacity(1);
      }, 0);
    }
  };

  const handleSelect = (index: number) => {
    setCurrent(array[index]);
    toggleOpen();
  };

  return { isShow, toggleOpen, handleSelect, current, opacity };
};

export function CustomSelector({ array, duration = 0 }: CustomSelectorProps) {
  const s = useCustomSelector(array, duration);

  return (
    <div className="flex flex-col p-2 m-2">
      <div className="flex flex-col relative">
        <Button text={s.current} fn={() => s.toggleOpen()} color="lite" />

        {s.isShow ? (
          <div className="flex flex-col absolute top-0 w-full mt-10">
            {array.map((el, index) => (
              <Button
                key={el.toString() + index}
                color="lite"
                text={el}
                fn={() => s.handleSelect(index)}
                addition={clsx(
                  'bg-slate-100 w-full z-30',
                  ` opacity-${s.opacity}`,
                  index > 0 ? ' mt-2 ' : ' mt-3 ',
                  `duration-${duration}`
                )}
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
