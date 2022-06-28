import { Button } from '@joindev/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { array } from './aside-links';

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

function StorybookAside({ array = array, isAnimated, canBeTiny }: StorybookAsideProps) {
  const router = useRouter();
  const hook = useCustomHook();

  return (
    <>
      {array.map((el) => (
        <Button text={el.title} fn={() => router.push('/' + el.path)} key={el.toString()} addition="ml-4 mr-4 border-0 bg-white" color="lite" />
      ))}
    </>
  );
}

export default StorybookAside;

// //  <p className=" max-w-lg border-2 border-pink-500 p-2 m-4">1</p>
