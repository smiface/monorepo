import { Button } from '@joindev/button';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { array as mockedArray } from './aside-links';

interface StorybookAsideProps {
  array?: {
    title: string;
    path: string;
  };
  isAnimated?: boolean;
  canBeTiny?: boolean;
}

const ArrowLeft = () => {
  return (
    <svg className="h-8 w-8 text-grey-600" fill="none" viewBox="0 0 24 24" stroke="grey">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>
  );
};

const ArrowRight = () => {
  return (
    <svg className="h-8 w-8 text-grey-600" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};

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

  useEffect(() => {
    console.log(hook.isShow);
  }, [hook.isShow]);

  return (
    <div className='z-50'>
      <Button
      color='lite'
        addition={clsx("  absolute bottom-[56px] left-0  "  , hook.isShow ? ' ml-[300px]' : '' , 'border-0]')}
        fn={() => {
          hook.setIsShow(!hook.isShow);
        }}
      >
        {hook.isShow ?  <ArrowLeft /> : <ArrowRight /> }
      </Button>


      <div className={clsx(`w-[300px] h-[100%] overflow-y-scroll  overflow-x-hidden flex flex-col duration-300`, hook.isShow ?   'ml-[0px]' : ' ml-[-300px]')}>
        {array.map((el) => (
          <Button text={el.title} fn={() => router.push('/' + el.path)} key={el.title} addition="border-0 bg-white p-4" color="lite" />
        ))}
      </div>
    </div>
  );
}

export default StorybookAside;

// //  <p className=" max-w-lg border-2 border-pink-500 p-2 m-4">1</p>
