import { Button } from '@joindev/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { array as mockedArray } from './aside-links';

interface StorybookAsideProps {
  array: {
    title: string;
    path: string;
  };
  isAnimated: boolean;
  canBeTiny: boolean;
}

const useCustomHook = (array: string[]) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow(!isShow);
  };

  const handleClick = (str: string) => {
    router.push('/' + str);
  };
  return { isShow, setIsShow, handleOpen, handleClick };
};

function StorybookAside({ array = mockedArray, isAnimated, canBeTiny }: StorybookAsideProps) {
  const router = useRouter();
  const hook = useCustomHook();

  return (
    <>
      <div className="w-[300px] h-[100%] overflow-y-scroll  overflow-x-hidden flex flex-col">
        {array.map((el) => (
          <Button text={el.title} fn={() => router.push('/' + el.path)} key={el.title} addition="border-0 bg-white p-4" color="lite" />
        ))}
      </div>
    </>
  );
}

export default StorybookAside;

// //  <p className=" max-w-lg border-2 border-pink-500 p-2 m-4">1</p>
