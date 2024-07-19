'use client';

import { usePathname } from 'next/navigation';
import MainHeader from './MainHeader';
import CommonHeader from './CommonHeader';

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/main' ? (
        <MainHeader />
      ) : pathname === '/login' ? (
        ''
      ) : (
        <CommonHeader />
      )}
    </>
  );
};

export default Header;
