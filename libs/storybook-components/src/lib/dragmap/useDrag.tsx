import { useEffect, useRef, useState } from 'react';

export const useDrag = (imagePadding: number) => {
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [objInitLeft, setObjInitLeft] = useState(0);
  const [objInitTop, setObjInitTop] = useState(0);
  const [inDrag, setInDrag] = useState(false);
  const dragTarget = useRef(null);
  const imgRef = useRef(null);
  const [scale, setScale] = useState(2);
  const [wrapperOffset, setWrapperOffset] = useState({ offsetLeft: 0, offsetTop: 0 });
  const [imgOffset, setImageOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log(scale);
  }, [scale]);

  const onDragStart = (e: any) => {
    setInDrag(true);
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
    setObjInitLeft(dragTarget.current.offsetLeft);
    setObjInitTop(dragTarget.current.offsetTop);
  };

  const handleResetMap = () => {
    dragTarget.current.style.left = '0px';
    dragTarget.current.style.top = '0px';
    setScale(2);
  };

  const onDragEnd = (e: MouseEvent) => {
    setInDrag(false);
    const wrapperOffsetLeft = e.target.parentElement.parentElement.offsetLeft;
    const wrapperOffsetTop = e.target.parentElement.parentElement.offsetTop;
    const imgOff = { x: imgRef.current.getBoundingClientRect().x, y: imgRef.current.getBoundingClientRect().y };
    setWrapperOffset({ x: wrapperOffsetLeft, y: wrapperOffsetTop });
    setImageOffset(imgOff);
    if (wrapperOffsetLeft + imagePadding < imgOff.x || wrapperOffsetTop + imagePadding < imgOff.y) {
      handleResetMap();
    }
  };

  const onDrag = (e: MouseEvent) => {
    if (inDrag && e.pageX && e.pageY) {
      dragTarget.current.style.left = objInitLeft + e.pageX - dragStartX + 'px';
      dragTarget.current.style.top = objInitTop + e.pageY - dragStartY + 'px';
    }
  };

  const handleOnWheel = (e) => {
    console.log(Date.now());
    const toTop = !!e.deltaY.toString().match('-');
    if (toTop) {
      const newScale = scale + 1;
      setScale(newScale);
    } else {
      if (scale > 1) {
        const newScale = scale - 1;
        setScale(newScale);
      }
    }
  };

  return {
    dragTarget,
    inDrag,
    onDragStart,
    onDragEnd,
    onDrag,
    imgRef,
    handleResetMap,
    scale,
    handleOnWheel,
    wrapperOffset,
    imgOffset,
  };
};
