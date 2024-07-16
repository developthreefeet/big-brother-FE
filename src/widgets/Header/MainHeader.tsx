'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/shared/ui/ui/tooltip';
import { usePathname } from 'next/navigation';
import { FaUserLarge } from 'react-icons/fa6';

const MainHeader = () => {
  let pathname = usePathname();
  console.log(pathname);

  return (
    <div className="h-[50px] bg-white top-0 border-y sticky z-10 flex justify-between items-center px-2">
      <Button
        variant="link"
        className="text-xl font-bold text-blue-500 hover:no-underline"
      >
        Big Brother
      </Button>
      <TooltipProvider>
        {pathname === '/signUp' || pathname === '/signIn' ? (
          ''
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link">
                <FaUserLarge
                  size="16"
                  className="text-gray-200 hover:opacity-50"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="relative -ml-5">
              <p>마이페이지</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
};

export default MainHeader;
