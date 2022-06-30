import { Button } from '@joindev/button';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

function getArrayWithLength(length: number) {
  return Array(length).fill(0);
}

const updClass = (elements, poses, idx, isPre) => {
  const cl = 'p-2 border-2  m-4 border-green-900 transition-all bg-green-100 hover:bg-green-200 duration-300 w-[100px] move-trigger';
  const addition = (idx) => ' absolute top-[' + Math.floor(poses[idx].y) + 'px] left-[' + Math.floor(poses[idx].x) + 'px] zxc';
  elements[idx].className = clsx(cl, addition);
};

export const CustomGrid = () => {
  const [arr, setArr] = useState(getArrayWithLength(40));
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    let elements = document.querySelectorAll('.move-trigger');
    let poses = [...elements].map((i) => i.getBoundingClientRect());
    const array = poses.map((el) => (el = { x: Math.floor(el.x), y: Math.floor(el.y) }));
    setMatrix(array);
    // elements.forEach((item, idx) => updClass(elements, poses, idx));
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.move-trigger');
    if (matrix.length) {
      const pre = `p-2 border-2  border-blue-900 transition-all bg-green-100 hover:bg-green-200 duration-300 w-[100px] move-trigger
      absolute`;
      const cl = (idx: number) => `top-[${matrix[idx].y}px] left-[${matrix[idx].x}px] zxc`;

      setTimeout(() => {
        elements[1].className = clsx(pre, cl(3));
        console.log(elements[1].className);
      }, 500);
    }
  }, [matrix]);

  const animetedRemove = (idx: number) => {
    const elements = document.querySelectorAll('.move-trigger');
    const poses = [...elements].map((i) => i.getBoundingClientRect());
    console.log(poses[idx].x, poses[idx].y);

    const cl = `p-2 border-2  m-4 border-blue-900 transition-all bg-green-100 hover:bg-green-200 duration-300 w-[100px] move-trigger  absolute top-[${Math.floor(
      poses[idx - 1].y
    )}px] left-[${Math.floor(poses[idx - 1].x)}px] zxc`;
    elements[idx].className = cl;
  };

  return (
    <div className="grid grid-cols-6">
      {arr.map((el, idx) => (
        <Button
          key={el + ' ' + idx + ' '}
          text={'close ' + idx}
          fn={() => animetedRemove(idx)}
          addition="duration-300 w-[100px] m-4 move-trigger"
        />
      ))}
    </div>
  );
};
