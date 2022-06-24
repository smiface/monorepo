import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface CustomFaqProps {
  title: string;
  children?: React.ReactNode;
}

const useCustomFaq = () => {
  const pre = 'flex flex-col justify-center w-full border-2 border-pink-900 p-2 bg-gray-200 duration-300';

  const [isShow, setIsShow] = useState(false);
  const [opacity, setOpacity] = useState(' opacity-0');
  const [height, setHeight] = useState(' h-1');
  const [str, setStr] = useState(pre + 'h-1 opacity-0');

  const handleOpen = () => {
    if (isShow) {
      setStr(pre + ' h-full opacity-0');

      setTimeout(() => {
        setStr(pre + ' h-1 opacity-0');
      }, 300);

      setTimeout(() => {
        setIsShow(false);
      }, 600);
    } else {
      setIsShow(true);

      setTimeout(() => {
        setStr(pre + '  h-full  opacity-0');
      }, 300);

      setTimeout(() => {
        setStr(pre + '  h-full opacity-1');
      }, 600);
    }
  };

  const handleOpen1 = () => {
    if (isShow) {
      setOpacity(' opacity-0');

      setTimeout(() => {
        setHeight(' h-1');
      }, 250);

      setTimeout(() => {
        setIsShow(false);
      }, 550);
    } else {
      setIsShow(true);

      setTimeout(() => {
        setHeight(' h-full');
      }, 250);

      setTimeout(() => {
        setOpacity(' opacity-1');
      }, 300);
    }
  };

  return { isShow, setIsShow, handleOpen, opacity, height, str };
};

export function CustomFaq({ title, children }: CustomFaqProps) {
  const hook = useCustomFaq();

  useEffect(() => {
    console.log(hook.opacity, hook.height);
  }, [hook]);

  return (
    <div className="flex flex-col p-2 m-2">
      <h2> Custom faq </h2>

      <div className="flex flex-col relative">
        <Button text={title} fn={() => hook.handleOpen()} addition=" text-left" />
        {hook.isShow ? <div className={hook.str + ' h-12'}>{children}</div> : false}
      </div>

      <p>another content </p>
    </div>
  );
}
