import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCustomHook = () => {
  const router = useRouter();
  const [mainClass, setMainClass] = useState('mt-4 opacity-0 duration-300');

  useEffect(() => {
    setMainClass(`mt-4  duration-300`);
  }, []);

  const handleClick = (el = '') => {
    setMainClass('mt-4 opacity-0  duration-300');
    setTimeout(() => {
      router.push('/navigateAnimation/' + el);
    }, 300);
  };

  return { router, mainClass, setMainClass, handleClick };
};
