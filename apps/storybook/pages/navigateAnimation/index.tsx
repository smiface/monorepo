import { Button } from '@joindev/button';
import { NavLink } from '@joindev/nav-link';
import Router from 'next/dist/server/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MainNavAnim() {
  const arr = [1, 2, 3];
  const [mainClass, setMainClass] = useState('mt-4 opacity-0 duration-300');
  const router = useRouter();

  useEffect(() => {
    setMainClass(`mt-4  duration-300`);
  }, []);

  const handleClick = (el) => {
    setMainClass('mt-4 opacity-0  duration-300');
    setTimeout(() => {
        router.push('/navigateAnimation/' + el)
    }, 300);
  };

  return (
    <div className={mainClass}>
      {arr.map((el) => (
        <Button text={'Go to ' + el} fn={() => handleClick(el) } addition="ml-4 mr-4" />
      ))}
    </div>
  );
}
