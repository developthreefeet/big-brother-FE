import Link from 'next/link';
import { Button } from '@/shared/ui/ui/button';
import { NoticeItem } from '@/shared/types/type';

const MiniNoticeList = ({
  noticeContents,
}: {
  noticeContents: NoticeItem[];
}) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-bold">공지사항</p>
        <Button
          variant="link"
          className="text-black hover:no-underline hover:opacity-50 pr-0"
        >
          <Link href="/notice">{'바로가기 >'}</Link>
        </Button>
      </div>
      <div className="flex flex-col ml-1">
        {noticeContents.slice(0, 5).map((content, index) => (
          <Link href={`/notice/${content.notice_id}`}>
            <Button
              variant="link"
              className="justify-start text-left hover:no-underline hover:opacity-50 text-gray-300 pl-0 py-0 h-7"
              key={index}
            >
              {content.notice_title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MiniNoticeList;
