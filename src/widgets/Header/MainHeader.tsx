'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/shared/ui/ui/tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserLarge } from 'react-icons/fa6';

const MainHeader = () => {
  let pathname = usePathname();

  return (
    <div className="h-[50px] bg-white top-0 border-y sticky z-10 flex justify-between items-center px-2">
      <Button
        variant="link"
        asChild
        className="text-xl font-bold text-blue-500 hover:no-underline"
      >
        <Link href="/main">Big Brother</Link>
      </Button>
      <TooltipProvider>
        {pathname === '/signUp' ? (
          ''
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/profile">
                <FaUserLarge
                  size="16"
                  className="text-gray-200 hover:opacity-50 mr-3"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="relative -ml-10">
              <p>마이페이지</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
};

export default MainHeader;
