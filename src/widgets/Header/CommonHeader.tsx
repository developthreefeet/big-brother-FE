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
import { FaHome } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const CommonHeader = () => {
  let pathname = usePathname();

  const getPageName = () => {
    if (pathname.includes('notice')) {
      return '공지사항';
    } else if (pathname.includes('faq')) {
      return 'FAQ';
    } else if (pathname.includes('proceeding')) {
      return '회의록';
    } else if (pathname.includes('event')) {
      return '행사';
    } else if (pathname.includes('transaction')) {
      return '입/출금 내역';
    } else if (pathname.includes('mypage')) {
      return '마이페이지';
    } else if (pathname.includes('join')) {
      return '회원가입';
    } else if (pathname.includes('changePw')) {
      return '비밀번호 변경';
    } else if (pathname.includes('rule')) {
      return '학칙/회칙';
    } else if (pathname.includes('modify')) {
      return '정보 수정';
    } else {
      return ' ';
    }
  };

  const router = useRouter();

  const handleGoBack = () => {
    const patterns = [
      'event/studentCouncil',
      'event/college',
      'event/department',
      'notice/studentCouncil',
      'notice/college',
      'notice/department',
      'rule/studentCouncil',
      'rule/college',
      'rule/department',
      'faq/studentCouncil',
      'faq/college',
      'faq/department',
      'proceeding/studentCouncil',
      'proceeding/college',
      'proceeding/department',
    ];

    const isPatternMatched = patterns.some((pattern) => pathname === pattern);

    if (isPatternMatched) {
      router.push('/main');
    } else {
      router.back();
    }
  };

  return (
    <div className="h-[50px] bg-white top-0 border-b sticky z-10 flex justify-between items-center px-2">
      <Button variant="link" onClick={handleGoBack}>
        <IoIosArrowBack size="20" className="text-gray-200 hover:opacity-50" />
      </Button>
      <p className="text-lg font-bold text-blue-500">{getPageName()}</p>
      {pathname !== '/join' &&
      pathname !== '/join/email' &&
      pathname !== '/changePw' ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/main" className="w-[50px] flex justify-center">
                <FaHome size="20" className="text-gray-200 hover:opacity-50" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="relative -ml-10">
              <p>메인으로</p>
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
