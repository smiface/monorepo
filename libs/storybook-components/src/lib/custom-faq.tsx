import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';

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

        setTimeout(() => {
          setIsShow(false);
        }, 250);
      }, 250);
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

  useEffect(() => {
    console.log(`h`, s.height);
  }, [s]);

  return (
    <div className="flex flex-col p-2 m-2">
      <h2> Custom faq </h2>
      <div className="flex flex-col relative">
        <Button text={title} fn={() => s.handleOpen()} addition=" text-left" />

        {s.isShow ? (
          <div
            className={`flex flex-col justify-center w-full border-2 border-red-300 bg-gray-200 duration-300 h-${s.height}`}
          >
            <div className={` p-2 text-left duration-300 opacity-${s.opacity}  h-${s.height}}  `}>{children}</div>
          </div>
        ) : (
          false
        )}
      </div>

      <p>another content </p>
    </div>
  );
}
