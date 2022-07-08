import { useEffect, useRef, useState } from 'react';

interface CustomTickerWithProps {
  text: string;
  duration: number;
}
export const CustomTicker = ({ text = 'no text', duration = '3s' }: CustomTickerWithProps) => {
  const TickerRef = useRef(null);
  // state ml
  const [ml, setMl] = useState(0);

  useEffect(() => {
    const timeoutID1 = window.setTimeout(() => {
      // TickerRef.current.style.transition = duration;
      TickerRef.current.style.marginLeft = '-' + ml + '%';
      if (TickerRef.current && TickerRef.current?.style) {
        setMl(ml + 0.1);
      }
    }, 7);
    return () => {
      window.clearTimeout(timeoutID1);
    };
  }, [ml]);

  return (
    <div className="absolute h-[100%] top-0 left-0 flex flex-col  justify-center ">
      <div
        className={`opacity-50 text-pink-800 font-thin text-[15rem] pl-[100%] max-w-max w-[250%] left-0 flex-nowrap flex align-middle justify-center  text-left  `}
        ref={TickerRef}
      >
        {text}
      </div>
    </div>
  );
};
