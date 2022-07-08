import { useEffect, useState } from 'react';
import { HomeSvg } from './HomeSvg';

interface HomeButtonProps {
  scale: number;
  wrapperOffset: { offsetLeft: number; offsetTop: number };
  imgOffset: { x: number; y: number };
  top: number;
  left: number;
  item: { id: number; title: string; top: number; left: number };
}

export const HomeButton = ({ item, scale, wrapperOffset, imgOffset }: HomeButtonProps) => {
  // state getLeft
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const a = wrapperOffset.offsetLeft;
    const b = imgOffset.x;
    const c = a + b < 0 ? a + b : 0; // - отступ дома слева всегда в пикселях

    const d = wrapperOffset.offsetTop;
    const e = imgOffset.y;
    const f = d - e < 0 ? d - e : 0; // - отступ дома сверху всегда в пикселях

    let offLeft = item.left * scale;
    let offTop = item.top * scale - f - e - d;

    // setLeftOffset(offLeft);
    // setTopOffset(offTop);

    //если img левее экрана
    if (imgOffset.x < 0) {
      // надо вычесть отступ дома от левого края экрана
      offLeft = offLeft + imgOffset.x;
    }

    // если img выше экрана
    if (imgOffset.y < 0) {
      // надо вычесть отступ дома от верхнего края экрана
      offTop = offTop + imgOffset.y;
    }

    setLeftOffset(offLeft);
    setTopOffset(offTop);
    console.log('scaled', b);
  }, [scale]);

  useEffect(() => {
    // imgOffset.x насколько img вылез за рамки экрана
    // wrapperOffset.offsetLeft видимый отступ img от левого края экрана
  }, [imgOffset]);

  const handleClick = () => {};

  const handleCalc = () => {
    // console.log(`handleCalc`, 1280 * scale - 1);
  };

  return (
    <button
      className={` absolute text-pink-200 w-[30px] h-[30px] z-50 bg-black `}
      style={{ top: `${topOffset}px`, left: `${leftOffset}px` }}
      onClick={handleClick}
    >
      <HomeSvg />
      {item.id}
    </button>
  );
};
