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
import { IoIosArrowBack } from 'react-icons/io';

const CommonHeader = () => {
  let pathname = usePathname();

  const getPageName = () => {
    switch (pathname) {
      case '/notice':
        return '공지사항';
      case '/faq':
        return 'FAQ';
      case '/proceeding':
        return '회의록';
      case '/event':
        return '행사';
      case '/transaction':
        return '입/출금 내역';
      case '/profile':
        return '마이 페이지';
      default:
        return ' ';
    }
  };
  return (
    <div className="h-[50px] bg-white top-0 border-y sticky z-10 flex justify-between items-center px-2">
      <Button variant="link">
        {
          <IoIosArrowBack
            size="20"
            className="text-gray-200 hover:text-blue-500"
          />
        }
      </Button>
      <p className="text-lg font-bold text-blue-500">{getPageName()}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="link">
              {
                <FaUserLarge
                  size="16"
                  className="text-gray-200 hover:opacity-50"
                />
              }
            </Button>
          </TooltipTrigger>
          <TooltipContent className="relative -ml-5">
            <p>마이페이지</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CommonHeader;
