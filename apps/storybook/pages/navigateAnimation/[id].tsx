import { Button } from '@joindev/button';
import { NavLink } from '@joindev/nav-link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCustomHook } from './customHook';

export default function MainNavAnimId() {
  const hook = useCustomHook();

  return (
    <div className={hook.mainClass}>
      <Button text={'Go back'} fn={() => hook.handleClick()} addition="ml-4 mr-4" />
    </div>
  );
}
