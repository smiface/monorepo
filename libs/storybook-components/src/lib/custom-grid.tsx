import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';

function getArrayWithLength(length: number) {
  return Array(length).fill(0);
}

export const CustomGrid = () => {
  const [arr, setArr] = useState(getArrayWithLength(40));
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    console.log(isPreloaded);
    if (isPreloaded === true) {
      setIsPreloaded(false);
      let elements = document.querySelectorAll('.trigger');
      let poses = [...elements].map((i) => i.getBoundingClientRect());

      setTimeout(() => {
        elements.forEach((el, idx) => {
          // el.className = elements[idx].className + ` m-0 absolute top-[${poses[idx].x}px] left-[${poses[idx].y}px]`;
        });
      }, 500);
    }
  }, [isPreloaded]);

  const animetedRemove = (idx: number) => {
    const elements = document.querySelectorAll('.trigger');
    const poses = [...elements].map((i) => i.getBoundingClientRect());

    const newClass = (idx) => {
      let a = elements[idx].className;
      let b = `   absolute top-[`;
      let c = String(poses[idx - 1].y).split('.')[0];
      let d = `px] left-[`;
      let e = String(poses[idx - 1].x).split('.')[0];
      let f = `px]`;
      let g = a + b + c + d + e + f;
      console.log(g)
      return g;
    };

    elements[idx].className = newClass(idx);

    // elements[idx].className = elements[idx].className + ` m-0 absolute top-[${poses[idx].x}px] left-[${poses[idx].y}px] `
    // elements[idx].className = elements[idx].className + ` absolute top-[${poses[idx].x}px] left-[${poses[idx].y}px]`;


    setTimeout(() => {
      //   setArr(arr.filter((el, index) => index !== idx));
    }, 300);
  };

  return (
    <div className="grid grid-cols-6">
      {arr.map((el, idx) => (
        <Button
          key={el + ' ' + idx + ' '}
          text={'close ' + idx}
          fn={() => animetedRemove(idx)}
          addition="duration-300 w-[100px] m-4 trigger"
        />
      ))}
    </div>
  );
};
