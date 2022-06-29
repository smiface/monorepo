import { Button } from '@joindev/button';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

let array = [
  {
    id: 0,
    str: 'item 0',
  },
  {
    id: 1,
    str: 'item 1',
  },
  {
    id: 2,
    str: 'item 2',
  },
  {
    id: 3,
    str: 'item 3',
  },
  {
    id: 4,
    str: 'item 4',
  },
  {
    id: 5,
    str: 'item 5',
  },
  {
    id: 6,
    str: 'item 6',
  },
  {
    id: 7,
    str: 'item 7',
  },
  {
    id: 8,
    str: 'item 8',
  },
  {
    id: 9,
    str: 'item 9',
  },
  {
    id: 10,
    str: 'item 10',
  },
  {
    id: 11,
    str: 'item 11',
  },
  {
    id: 12,
    str: 'item 12',
  },
  {
    id: 13,
    str: 'item 13',
  },
  {
    id: 14,
    str: 'item 14',
  },
  {
    id: 15,
    str: 'item 15',
  },
  {
    id: 16,
    str: 'item 16',
  },
  {
    id: 17,
    str: 'item 17',
  },
  {
    id: 18,
    str: 'item 18',
  },
  {
    id: 19,
    str: 'item 19',
  },
  {
    id: 20,
    str: 'item 20',
  },
  {
    id: 21,
    str: 'item 21',
  },
  {
    id: 22,
    str: 'item 22',
  },
  {
    id: 23,
    str: 'item 23',
  },
  {
    id: 24,
    str: 'item 24',
  },
  {
    id: 25,
    str: 'item 25',
  },
  {
    id: 26,
    str: 'item 26',
  },
  {
    id: 27,
    str: 'item 27',
  },
  {
    id: 28,
    str: 'item 28',
  },
  {
    id: 29,
    str: 'item 29',
  },
  {
    id: 30,
    str: 'item 30',
  },
  {
    id: 31,
    str: 'item 31',
  },
  {
    id: 32,
    str: 'item 32',
  },
  {
    id: 33,
    str: 'item 33',
  },
  {
    id: 34,
    str: 'item 34',
  },
  {
    id: 35,
    str: 'item 35',
  },
  {
    id: 36,
    str: 'item 36',
  },
  {
    id: 37,
    str: 'item 37',
  },
  {
    id: 38,
    str: 'item 38',
  },
  {
    id: 39,
    str: 'item 39',
  },
  {
    id: 40,
    str: 'item 40',
  },
];

export const CustomGrid = () => {
  const [arr, setArr] = useState(array);
  const [matrix, setMatrix] = useState([]);

  const hideByIdx = (elements, idx, id) => {
    elements[idx].style.position = 'absolute';
    elements[idx].style.transition = '.3s';
    elements[idx].style.opacity = '0';

    setTimeout(() => {
      elements[idx].remove();
      reCalculate(id);
    }, 300);
  };

  const moveToPrePos = (elements: HTMLElement[], offset: { x: number; y: number }, idx: number) => {
    elements[idx].style.position = 'absolute';
    elements[idx].style.top = matrix[idx].y - offset.y + 'px';
    elements[idx].style.left = matrix[idx].x - offset.x + 'px';
  };

  const reCalculate = (id = false) => {
    let elements = document.querySelectorAll('.move-trigger');
    let poses = [...elements].map((i) => i.getBoundingClientRect());
    const array = poses.map((el) => (el = { x: Math.floor(el.x), y: Math.floor(el.y) }));
    setMatrix(array);
    if (id) {
      const newArr = arr.filter((el) => el.id !== id);
      setArr(newArr);
    }
  };

  useEffect(() => {
    reCalculate();
  }, []);

  useEffect(() => {
    let elements = document.querySelectorAll('.move-trigger');
    let parentPos = document.querySelector('.move-trigger-parent').getBoundingClientRect();
    let offset = { x: parentPos.x, y: parentPos.y };

    elements.forEach((item, idx) => {
      if (matrix[idx] !== undefined && idx > 0) {
        moveToPrePos(elements, offset, idx);
      }
    });
  }, [matrix]);

  const bar = () => {
    const checkItem = localStorage.getItem('bar') ? localStorage.getItem('bar') : false;
    const checkParse = checkItem ? JSON.parse(checkItem) : false;
    const checkArray = Array.isArray(checkParse) ? checkParse : false;
    const checkLengthArray = checkArray.length > 0 ? checkArray : false;

    const checkEveryKeys =
      checkLengthArray && checkLengthArray.map((el) => Object.keys(el) == ['id', 'color']).find((i) => i == false)
        ? checkLengthArray
        : false;

    const checkEveryValues =
      checkEveryKeys && checkLengthArray.map((el) => Object.values(el).map((i) => typeof i) == ['number', 'string']).find((i) => i == false)
        ? checkEveryKeys
        : false;

    const value = checkEveryValues ? checkEveryValues : [];
    return value;
  };

  const animatedRemove = (idx: number, id: number) => {
    let elements = document.querySelectorAll('.move-trigger');
    let parentPos = document.querySelector('.move-trigger-parent').getBoundingClientRect();
    let offset = { x: parentPos.x, y: parentPos.y };

    if (elements[idx]) {
      hideByIdx(elements, idx, id);

      setTimeout(() => {
        setTimeout(() => {
          elements.forEach((el, index) => {
            if (index + 1 > id) {
              console.log(index + 1 > id);
              elements[idx + 1].style.top = matrix[idx].y - offset.y + 'px';
              elements[idx + 1].style.left = matrix[idx].x - offset.x + 'px';
            }
          });
        }, 300);
      }, 100);
    }
  };

  return (
    <div className="move-trigger-parent grid grid-cols-6 gap-6 relative">
      {array.map((el, idx) => (
        <button
          key={el.id}
          className="move-trigger w-[150px] m-0 border-2 border-pink-700 duration-300 "
          onClick={() => animatedRemove(idx, el.id)}
        >
          {el.str}
        </button>
      ))}

      <div className="absolute left-[90%] top-[80vh]">{arr.length}</div>
    </div>
  );
};
