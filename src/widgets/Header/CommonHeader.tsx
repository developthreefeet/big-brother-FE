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
import { useRouter } from 'next/navigation';
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
      case '/mypage':
        return '마이페이지';
      case '/join':
        return '회원가입';
      case '/rule':
        return '학칙/회칙';
      case '/modify':
        return '정보 수정';
      default:
        return ' ';
    }
  };

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-[50px] bg-white top-0 border-b sticky z-10 flex justify-between items-center px-2">
      <Button variant="link" onClick={handleGoBack}>
        <IoIosArrowBack
          size="20"
          className="text-gray-200 hover:text-blue-500"
        />
      </Button>
      <p className="text-lg font-bold text-blue-500">{getPageName()}</p>
      {pathname !== '/join' ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/mypage" className="w-[50px] flex justify-center">
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
      ) : (
        <div className="w-16"></div>
      )}
    </div>
  );
};

export default CommonHeader;
