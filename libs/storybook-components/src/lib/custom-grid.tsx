import { Button } from '@joindev/button';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { array } from './custom-grid-array';

const helper = () => {
  const elements = document.querySelectorAll('.move-trigger');
  const poses = [...Array.from(elements)]
    .map((i) => i.getBoundingClientRect())
    .map((el) => (el = { x: Math.floor(el.x), y: Math.floor(el.y) }));

  return { elements, poses, posesXY };
};

function useWindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export const CustomGrid = () => {
  const [arr, setArr] = useState(array);
  const [matrix, setMatrix] = useState([]);
  const w = useWindowSize();
  // const { getElements, getPoses, getPosesXY } = useHelper(document);

  // useeffect console.log when window width changes
  useEffect(() => {
    console.log(w);
  }, [w]);

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
    const elements = document.querySelectorAll('.move-trigger');
    const poses = [...elements].map((i) => i.getBoundingClientRect());
    const getPosesXY = poses.map((el) => (el = { x: Math.floor(el.x), y: Math.floor(el.y) }));
    setMatrix(helper().posesXY);
    if (id) {
      const newArr = arr.filter((el) => el.id !== id);
      setArr(newArr);
    }

    setTimeout(() => {
      setDisable(false);
    }, 500);
  };

  const setDisable = (isDiabled: boolean) => {
    let elements = document.querySelectorAll('.move-trigger');
    elements.forEach((item, idx) => {
      if (idx > 0) {
        item.disabled = isDiabled;
      }
    });
  };

  const moveAnother = (id, idx) => {
    setTimeout(() => {
      let elements = document.querySelectorAll('.move-trigger');
      let parentPos = document.querySelector('.move-trigger-parent').getBoundingClientRect();
      let offset = { x: parentPos.x, y: parentPos.y };

      elements.forEach((item, idx) => {
        if (matrix[idx] !== undefined && idx > 0) {
          moveToPrePos(elements, offset, idx);
        }
      });

      elements.forEach((el, index) => {
        if (index + 1 > id) {
          elements[idx].style.top = matrix[idx].y - offset.y + 'px';
          elements[idx].style.left = matrix[idx].x - offset.x + 'px';
        }
      });

      setTimeout(() => {
        reCalculate();
      }, 300);
    }, 300);
  };

  useEffect(() => {
    reCalculate();
  }, []);

  const useHook = () => {};

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

  const animatedRemove = (idx: number, id: number) => {
    let elements = document.querySelectorAll('.move-trigger');
    let parentPos = document.querySelector('.move-trigger-parent').getBoundingClientRect();
    let offset = { x: parentPos.x, y: parentPos.y };

    setDisable(true);

    if (elements[idx]) {
      hideByIdx(elements, idx, id);
      moveAnother(id, idx);
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


{/* create pink button increment */}
      <button
        className="move-trigger w-[150px] m-0 border-2 border-pink-700 duration-300 "
        onClick={() => {

      <div className="absolute left-[90%] top-[80vh]">{arr.length}</div>
    </div>
  );
};
