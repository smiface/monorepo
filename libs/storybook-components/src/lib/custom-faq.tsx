import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface CustomFaqProps {
  title: string;
  children?: React.ReactNode;
}

const useCustomFaq = () => {
  const [isShow, setIsShow] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [height, setHeight] = useState(24);

  const handleOpen = () => {
    if (isShow) {
      setOpacity(0);

      setTimeout(() => {
        setHeight(1);
      }, 250);

      setTimeout(() => {
        setIsShow(false);
      }, 350);
    } else {
      setIsShow(true);

      setTimeout(() => {
        setHeight(24);
      }, 50);

      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }
  };

  return { isShow, setIsShow, handleOpen, opacity, height };
};

export function CustomFaq({ title, children }: CustomFaqProps) {
  const s = useCustomFaq();
  const pre = 'flex flex-col justify-center w-full border-2 border-pink-900 p-2 bg-gray-200 duration-300';
  const [h, setH] = useState(1);


  return (
    <div className="flex flex-col p-2 m-2">
      <h2> Custom faq </h2>

      <button onClick={() => (h == 1 ? setH(10) : setH(1))}>zxc</button>

      <div className="flex flex-col relative">
        <Button text={title} fn={() => s.handleOpen()} addition=" text-left" />

        {s.isShow ? (
          <div
            className={
              `flex flex-col justify-center w-full border-2 border-pink-900 p-2 bg-gray-200 duration-300 ` +
              `h-${s.height}`
            }
          >
            <div className={clsx('border-2 border-red-500 p-2 text-left duration-300', ` opacity-${s.opacity}`)}>
              {children}
            </div>
          </div>
        ) : (
          false
        )}
      </div>

      <p>another content </p>
    </div>
  );
}
