import StorybookAside from 'libs/storybook-aside/src/lib/storybook-aside';
import { CustomDragMap } from 'libs/storybook-components/src/lib/dragmap/';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import Image from 'next/image';

export default function DragMapPage() {
  const items = [
    { id: 1, title: 'Item 1', top: 100, left: 100 },
    { id: 2, title: 'Item 2', top: 200, left: 200 },
    { id: 3, title: 'Item 3', top: 300, left: 300 },
    { id: 4, title: 'Item 4', top: 400, left: 400 },
    { id: 5, title: 'Item 5', top: 500, left: 500 },
  ];

  return <CustomDragMap imgPath="./map-lite.png" items={items} />;
}
