import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface CustomFaqProps {
  title?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  animateDuration?: number
}

const useCustomFaq = (duration: number) => {
  const ChildPre = 'flex flex-col justify-center w-full duration-' + duration;
  const childStr1 = ChildPre + ' mt-[0]      opacity-0'; //opened hidden
  const childStr2 = ChildPre + ' mt-[0]      opacity-1 '; //opened showed
  const childStr3 = ChildPre + ' mt-[-100%]  opacity-0'; //closed

  const parentPre = ` p-2  bg-gray-200 duration-${duration} z-0 h-max rounded-b-xl border-grey-300 `;
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
    }, duration);
  };

  const Close = () => {
    setChildClass(childStr1);

    setTimeout(() => {
      setChildClass(childStr3);
      setParentClass(parentStr1);
    }, duration);

    setTimeout(() => {
      setIsShow(false);
    }, duration * 2);
  };

  const toggleShow = () => (isShow ? Close() : Open());
  return { isShow, setIsShow, toggleShow, childClass, parentClass };
};

export function CustomFaq({ title, children, animateDuration = 0 , isDisabled = false}: CustomFaqProps) {
  const hook = useCustomFaq(animateDuration);

  return (
    <div className="flex flex-col relative  h-max  ">
      <Button text={title} fn={() => hook.toggleShow()}  addition=" border-2 border-grey-100 text-left z-10 p-4 " color="lite" isDisabled={isDisabled} />
      <div className={hook.parentClass + ' pl-4 pr-4'} >{hook.isShow ? <div className={hook.childClass}>{children}</div> : false}</div>
    </div>
  );
}
