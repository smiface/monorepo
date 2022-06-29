import { Button } from '@joindev/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { links } from './aside-links';

interface StorybookAsideProps {
  array?: {
    title?: string;
    path?: string;
  };
  isAnimated?: boolean;
  canBeTiny?: boolean;
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

function StorybookAside({ array = links, isAnimated = false, canBeTiny = false }: StorybookAsideProps) {
  const router = useRouter();
  const hook = useCustomHook(array);

  return (
    <div className="w-[300px] h-[100%] overflow-y-scroll  overflow-x-hidden flex flex-col">
      {array.map((el) => (
        <Button text={el.title} fn={() => router.push('/' + el.path)} key={el.toString()} addition="border-0 bg-white p-4" color="lite" />
      ))}
    </div>
  );
}

export default StorybookAside;
