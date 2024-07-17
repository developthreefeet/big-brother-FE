'use client';

import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/shared/ui/ui/tooltip';
import Link from 'next/link';
import { FaUserLarge } from 'react-icons/fa6';

const MainHeader = () => {
  return (
    <div className="h-[50px] bg-white top-0 border-y sticky z-10 flex justify-between items-center px-2">
      <p className="text-xl font-bold text-blue-500 ml-4 cursor-default">
        Big Brother
      </p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/profile" className="w-[50px] flex justify-center">
              <FaUserLarge
                size="16"
                className="text-gray-200 hover:opacity-50"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="relative -ml-10">
            <p>마이페이지</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default MainHeader;
