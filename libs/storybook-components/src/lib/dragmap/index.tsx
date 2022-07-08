import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@joindev/button';
import { useDrag } from './useDrag';
import { HomeButton } from './HomeButton';

const imagePadding = 500;

interface DragMapProps {
  imgPath: string;
  items: any[];
}

export const CustomDragMap = ({ imgPath, items }: DragMapProps) => {
  const hook = useDrag(imagePadding);

  return (
    <div className=" bg-[#3d4f57] h-[100%] flex relative  w-[100%] overflow-hidden border-2 border-pink-900">
      <Button text="reset map" color="lite" addition=" absolute top-[10px] right-[10px] z-50 rounded" fn={hook.handleResetMap} />
      <div
        className="relative top-0 left-0 h-[100%] w-[100%] "
        ref={hook.dragTarget}
        onDragStart={(e) => hook.onDragStart(e)}
        onDragEnd={(e) => hook.onDragEnd(e)}
        onDrag={(e) => hook.onDrag(e)}
        onWheel={(e) => hook.handleOnWheel(e)}
      >
        <img
          src={imgPath}
          alt=""
          // className={`absolute top-0 left-0  border-2 border-black  h-[${hook.height}px] w-[1200px]`}
          className={`absolute top-0 left-0  border-2 border-black `}
          style={{ transform: `scale(${hook.scale})` }}
          ref={hook.imgRef}
        />

       <div className='absolute top-0 left-0 border-2 border-blue-500'>
       {items.map((item, index) => (
          <HomeButton item={item} scale={hook.scale} key={item.id} wrapperOffset={hook.wrapperOffset} imgOffset={hook.imgOffset} />
        ))}
       </div>
      </div>
    </div>
  );
};
