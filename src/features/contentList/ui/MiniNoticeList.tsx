'use client';

import Link from 'next/link';
import { Button } from '@/shared/ui/ui/button';
import { truncateTitle } from '@/shared/lib/utils';
import { useGetCampusNotice } from '../api/queries';
import { Skeleton } from '@/shared/ui/ui/skeleton';

const MiniNoticeList = () => {
  const { data, isSuccess, isLoading, isError } =
    useGetCampusNotice('일반공지');

  return (
    <div className="flex flex-col w-full space-y-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-bold">공지사항</p>
        <Button
          variant="link"
          className="text-black hover:no-underline hover:opacity-50 pr-0"
        >
          <Link href="/notice/general">{'바로가기 >'}</Link>
        </Button>
      </div>

      {isLoading && (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-80" />
          ))}
        </div>
      )}

      {isError && (
        <div>공지사항을 불러오지 못했습니다. 관리자에게 문의해주세요.</div>
      )}

      {isSuccess && data && (
        <div className="flex flex-col ml-1">
          {data.content.slice(0, 5).map((content, index) => (
            <Link href={`/notice/general/${content.id}`} key={index}>
              <Button
                variant="link"
                className="justify-start text-left hover:no-underline hover:opacity-50 text-gray-300 pl-0 py-0 h-7"
              >
                {truncateTitle(content.title, 29)}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniNoticeList;
