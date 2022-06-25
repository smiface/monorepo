import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface CustomFaqProps {
  title: string;
  children?: React.ReactNode;
}

const useCustomFaq = () => {
  const ChildPre = 'flex flex-col justify-center w-full duration-300';
  const childStr1 = ChildPre + ' mt-[0]      opacity-0'; //opened hidden
  const childStr2 = ChildPre + ' mt-[0]      opacity-1 '; //opened showed
  const childStr3 = ChildPre + ' mt-[-100%]  opacity-0'; //closed

  const parentPre = ' p-2  bg-gray-200 duration-300 z-0 h-max rounded-b-xl border-grey-300 ';
  const parentStr1 = parentPre + '  mt-[-20px] '; //closed
  const parentStr2 = parentPre + '  '; //opened

  const [isShow, setIsShow] = useState(false);
  const [parentClass, setParentClass] = useState(parentStr1);
  const [childClass, setChildClass] = useState(childStr1);

  const Open = () => {
    setIsShow(true);
    setParentClass(parentStr2);
    setChildClass(childStr1);

    setTimeout(() => {
      setChildClass(childStr2);
    }, 300);
  };

  const Close = () => {
    setChildClass(childStr1);

    setTimeout(() => {
      setChildClass(childStr3);
      setParentClass(parentStr1);
    }, 300);

    setTimeout(() => {
      setIsShow(false);
    }, 600);
  };

  const toggleShow = () => (isShow ? Close() : Open());
  return { isShow, setIsShow, toggleShow, childClass, parentClass };
};

export function CustomFaq({ title, children }: CustomFaqProps) {
  const hook = useCustomFaq();

  return (
    <div className="flex flex-col p-2 m-2 ">
      <h2> Custom faq </h2>

      <div className="flex flex-col relative  h-max  ">
        <Button text={title} fn={() => hook.toggleShow()} addition=" border-2 border-grey-100 text-left z-10" color='lite'/>
        {/* child wrapper */}
        <div className={hook.parentClass}>{hook.isShow ? <div className={hook.childClass}>{children}</div> : false}</div>
      </div>

    </div>
  );
}
