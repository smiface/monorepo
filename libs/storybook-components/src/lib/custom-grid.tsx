import { Button } from '@joindev/button';
import { useEffect, useState } from 'react';

import { useWindowWidth } from '@joindev/use-window-width';
const getArrayWithLength = (length: number) => [...Array(40)].map((_, i) => ({ id: i + 1 }));

const getElements = () => document?.querySelectorAll('.move-trigger');
const getPoses = () =>  [...Array.from(getElements())].map((i) => i.getBoundingClientRect());
const getOffset = () => document?.querySelector('.move-trigger-parent')?.getBoundingClientRect()

const helper = () => {
  const elements = document.querySelectorAll('.move-trigger');
  const poses = [...Array.from(elements)]
    .map((i) => i.getBoundingClientRect())
    .map((el) => (el = { x: el.x, y: el.y }));
  const ParentRect = document?.querySelector('.move-trigger-parent')?.getBoundingClientRect();
  const offset = { x: Math.floor(ParentRect.x), y: Math.floor(ParentRect.y) };

  return { elements, poses, offset };
};

export const CustomGrid = () => {
  const [arr, setArr] = useState(getArrayWithLength(40));
  const [isPending, setIsPending] = useState(false);

  const [matrix, setMatrix] = useState([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const w = useWindowWidth();

  const hideByIdx = (elements, idx, id) => {
    elements[idx].style.position = 'absolute';
    elements[idx].style.transition = '.3s';
    elements[idx].style.opacity = '0';
    // elements[idx].remove();
  };

  const moveToPrePos = (elements: any, idx: number) => {
    elements[idx].style.position = 'absolute';
    elements[idx].style.top = matrix[idx - 1].y - offset.y + 'px';
    elements[idx].style.left = matrix[idx - 1].x - offset.x + 'px';
  };

  const setDisable = (isDiabled = false) => {
    const h = helper();
    h.elements.forEach((item: any, idx: number) => (item.disabled = isDiabled));
  };

  // const moveAnother = (id, idx) => {
  const moveAnother = (elements: any[]) => {
    elements.forEach((_, idx: number) => {
      if (matrix[idx] !== undefined && idx > 0) {
        moveToPrePos(elements, idx);
      }
    });
  };

  useEffect(() => {
    isPending ? setMatrix(getPoses()) : false
  }, [isPending]);


  useEffect(() => {
    // create list of
    const h = helper();
    

    const parent = document.querySelector('.move-trigger-parent')?.getBoundingClientRect() || { x: 0, y: 0 };
    setOffset({ x: parent.x, y: parent.y });
  }, []);

  useEffect(() => {
    const h = helper();
    h.elements.forEach((item, idx) => {
      if (matrix[idx] !== undefined && idx > 0) {
        moveToPrePos(h.elements, idx);
      }
    });
  }, [matrix]);

  const animeteRemove = (idx: number, id: number) => {
    const h = helper();
    setDisable(true);

    // прячем элемент
    hideByIdx(h.elements, idx, id);

    // удаляем элемент
    setTimeout(() => {
      // elements[idx].remove();
    }, 300);

    // пододвигаем элементы
    setTimeout(() => {
      // moveAnother(id, idx);
      moveAnother(h.elements);
    }, 600);

    // обновляем состояние после удаления
    setTimeout(() => {
      setArr(arr.filter((el: any) => el.id !== id));
      setDisable(false);
    }, 900);
  };

  return (
    <div className="move-trigger-parent grid grid-cols-6 gap-6 relative">
      {arr.map((el, idx) => (
        <Button
          key={el.id}
          text={'id ' + el.id + ' idx ' + idx}
          fn={() => animeteRemove(idx, el.id)}
          addition="duration-300 w-[100px] move-trigger h-[80px] w-[100px]"
        />
      ))}

      <div className="absolute left-[90%] top-[80vh]">{arr.length}</div>
    </div>
  );
};
