import { Button } from '@/shared/ui/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/ui/carousel';
import IconComponent from '@/views/main/IconComponent';
import Link from 'next/link';
import {
  FcList,
  FcRules,
  FcDepartment,
  FcCustomerSupport,
  FcCurrencyExchange,
  FcBusinessman,
} from 'react-icons/fc';

const page = () => {
  const noticeContents = [
    '2024 휴학 신청 안내',
    '장학금 신청 안내',
    '어쩌고저쩌고 안내',
    '생활관 신청 안내',
    '비행기 가격 안내',
    '일본 가고 싶당',
  ];

  return (
    <div className="space-y-8 flex flex-col justify-center items-center">
      <Carousel
        className="w-full h-[240px] bg-pink-100 rounded-sm"
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
      </Carousel>
      <div className="flex flex-col w-full space-y-1">
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-bold">공지사항</p>
          <Button
            variant="link"
            className="text-black hover:no-underline hover:opacity-50"
          >
            {'바로가기 >'}
          </Button>
        </div>
        <div className="flex flex-col ml-1">
          {noticeContents.slice(0, 5).map((content, index) => (
            <Button
              variant="link"
              className="justify-start text-left hover:no-underline hover:opacity-50 text-gray-300 pl-0 py-0 h-7"
              key={index}
            >
              {content}
            </Button>
          ))}
        </div>
      </div>
      <div className="w-full grid grid-cols-3 ">
        <Link
          href="/event"
          className="flex items-center flex-col justify-center"
        >
          <IconComponent icon={FcList} text="행사" />
        </Link>
        <Link
          href="/proceeding"
          className="flex items-center flex-col justify-center"
        >
          <IconComponent icon={FcRules} text="회의록" />
        </Link>
        <Link
          href="/rule"
          className="flex items-center flex-col justify-center"
        >
          <IconComponent icon={FcDepartment} text="학칙/회칙" />
        </Link>
        <Link href="/faq" className="flex items-center flex-col justify-center">
          <IconComponent icon={FcCustomerSupport} text="FAQ" />
        </Link>
        <Link
          href="/transaction"
          className="flex items-center flex-col justify-center"
        >
          <IconComponent icon={FcCurrencyExchange} text="입/출금 내역" />
        </Link>
        <Link
          href="/profile"
          className="flex items-center flex-col justify-center"
        >
          <IconComponent icon={FcBusinessman} text="마이페이지" />
        </Link>
      </div>
    </div>
  );
};

export default page;
